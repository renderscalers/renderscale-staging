import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import "./styles.css";

let container = document.getElementById("root");
if (!container) {
  // If server-side rendered content exists, try to hydrate it.
  const mainEl = document.querySelector('main');
  if (mainEl) {
    container = mainEl as HTMLElement;
    console.info('Server-rendered root found; hydrating existing <main> element.');
  } else {
    console.warn("Root container not found — creating #root automatically.");
    console.debug("Current body HTML before creating root:\n", document.body.innerHTML);
    const newRoot = document.createElement("div");
    newRoot.id = "root";
    document.body.appendChild(newRoot);
    container = newRoot;
  }
}

const rootHasChildren = container.hasChildNodes();
if (rootHasChildren) {
  try {
    hydrateRoot(container, (
      <StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </StrictMode>
    ));
  } catch (e) {
    // If hydration fails, fallback to client-side render
    console.warn('Hydration failed, falling back to client render.', e);
    createRoot(container).render(
      <StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </StrictMode>
    );
  }
} else {
  createRoot(container).render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  );
}