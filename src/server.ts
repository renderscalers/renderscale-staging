import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

const CONTACT_RECIPIENT = "smrithi@renderscalers.com";
const MIN_CONTACT_MESSAGE_WORDS = 2000;

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function jsonResponse(payload: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(payload), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...(init?.headers ?? {}),
    },
  });
}

function wordCount(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getEnvValue(env: unknown, key: string): string | undefined {
  if (!env || typeof env !== "object" || !(key in env)) return undefined;
  const value = (env as Record<string, unknown>)[key];
  return typeof value === "string" && value.trim() ? value : undefined;
}

async function handleContactRequest(request: Request, env: unknown): Promise<Response> {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, { status: 405 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON payload" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return jsonResponse({ error: "Invalid contact payload" }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  const messageWords = wordCount(message);

  if (!name) {
    return jsonResponse({ error: "Name is required" }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return jsonResponse({ error: "A valid email address is required" }, { status: 400 });
  }
  if (messageWords < MIN_CONTACT_MESSAGE_WORDS) {
    return jsonResponse(
      { error: `Message must be at least ${MIN_CONTACT_MESSAGE_WORDS} words`, words: messageWords },
      { status: 400 },
    );
  }

  const resendApiKey = getEnvValue(env, "RESEND_API_KEY");
  if (!resendApiKey) {
    return jsonResponse(
      { error: "Email service is not configured. Add RESEND_API_KEY to send contact emails." },
      { status: 503 },
    );
  }

  const from = getEnvValue(env, "CONTACT_FROM_EMAIL") ?? "RenderScale Contact <onboarding@resend.dev>";
  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: CONTACT_RECIPIENT,
      reply_to: email,
      subject: `New RenderScale contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Message word count: ${messageWords}`,
        "",
        message,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const details = await resendResponse.text();
    console.error(`Resend contact email failed: ${details}`);
    return jsonResponse({ error: "Unable to send email right now" }, { status: 502 });
  }

  return jsonResponse({ ok: true });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/contact") {
        return await handleContactRequest(request, env);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return brandedErrorResponse();
    }
  },
};
