import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Globe, Mail, MapPin, Phone, Send } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "smrithi@renderscalers.com",
    href: "mailto:smrithi@renderscalers.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9380213272",
    href: "http://wa.me/9380213272",
  },
  // {
  //   icon: Globe,
  //   label: "LinkedIn",
  //   value: "linkedin.com/company/renderscale",
  //   href: "https://www.linkedin.com/company/renderscale",
  // },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "https://maps.google.com/?q=Bengaluru%2C%20India",
  },
];

export function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const phoneIsValid = /^[6-9]\d{9}$/.test(phone.trim());
  const messageIsValid = Boolean(message.trim());
  const formIsValid =
  Boolean(name.trim()) &&
  emailIsValid &&
  phoneIsValid &&
  messageIsValid;
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwhdYIuzsTfAdXtk39kcnwFbUxW3qbMeYgLWfU3NjpPXpeM_NO4cDaxD-xL3UuCkmfMwQ/exec";

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setStatusMessage("");

  if (!name.trim()) {
    setStatus("error");
    setStatusMessage("Name is required.");
    return;
  }

  if (!emailIsValid) {
    setStatus("error");
    setStatusMessage("Enter a valid email address.");
    return;
  }
  
  if (!phoneIsValid) {
    setStatus("error");
    setStatusMessage("Enter a valid 10-digit phone number.");
    return;
  }
  if (!message.trim()) {
    setStatus("error");
    setStatusMessage("Message is required.");
    return;
  }

  setStatus("sending");

  try {
    const formData = new FormData();
    const ipInfo = await fetch("https://ipapi.co/json/")
    .then(res => res.json());


for (const [key, value] of formData.entries()) {
  console.log(key, value);
}
console.log(formData, "Before fetch");

formData.append("name", name);
formData.append("email", email);
formData.append("phone", phone);
formData.append("message", message);
formData.append("ip", ipInfo.ip);
formData.append("city", ipInfo.city);
formData.append("region", ipInfo.region);
formData.append("country", ipInfo.country_name);
formData.append("isp", ipInfo.org);

for (const [key, value] of formData.entries()) {
  console.log(key, value);
}

await fetch(WEB_APP_URL, {
  method: "POST",
  body: formData,
  mode: "no-cors"
});
console.log("Fetch completed");
    setStatus("success");
    setStatusMessage("Thanks, your message has been sent.");

    setName("");
    setEmail("");
    setMessage("");

  } catch (error) {
    console.error(error);

    setStatus("error");
    setStatusMessage(
      "Unable to send your message right now."
    );
  }
}
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl p-6 shadow-elevated ring-1 ring-white/70 md:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(145deg, color-mix(in oklab, white 92%, var(--sage-soft)) 0%, color-mix(in oklab, white 82%, var(--sage-soft)) 100%)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-normal text-sage-deep md:text-5xl">
                Let's Connect
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
                We're always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>

              <div className="mt-10 grid gap-5">
                {contactItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-center gap-5 rounded-lg border border-white/75 p-5 shadow-[0_1px_2px_color-mix(in_oklab,var(--ink)_5%,transparent)] transition-colors hover:border-sage/45"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, white 82%, var(--sage-soft)) 0%, color-mix(in oklab, var(--sage-soft) 38%, white) 100%)",
                    }}
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg text-sage-deep shadow-soft ring-1 ring-white/80 bg-[linear-gradient(135deg,color-mix(in_oklab,white_78%,var(--sage-soft)),color-mix(in_oklab,var(--sage-soft)_70%,var(--sage)))]">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">{item.label}</span>
                      <span className="mt-1 block break-words text-lg font-semibold text-foreground transition-colors group-hover:text-sage-deep">
                        {item.value}
                      </span>
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid content-start gap-7"
            >
              <label className="grid gap-3">
                <span className="text-lg font-semibold text-foreground">Name</span>
                <input
                  name="name"
                  required
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  aria-invalid={!name.trim() && status === "error"}
                  className="h-14 rounded-lg border border-white/80 bg-white/75 px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
              </label>

              <label className="grid gap-3">
                <span className="text-lg font-semibold text-foreground">Email</span>
                <input
                  name="email"
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  aria-invalid={Boolean(email) && !emailIsValid}
                  className="h-14 rounded-lg border border-white/80 bg-white/75 px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
              </label>
              
              <label className="grid gap-3">
                  <span className="text-lg font-semibold text-foreground">
                  Phone Number
                  </span>
                  <input
                  name="phone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(event) =>
                  setPhone(event.target.value.replace(/\D/g, ""))
                  }
                  placeholder="9876543210"
                  maxLength={10}
                  className="h-14 rounded-lg border border-white/80 bg-white/75 px-5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage focus:ring-2 focus:ring-sage/20"
                  />
              </label>

              <label className="grid gap-3">
                <span className="text-lg font-semibold text-foreground">Message</span>
                <textarea
                  name="message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your project..."
                  aria-invalid={Boolean(message) && !messageIsValid}
                  className="min-h-48 resize-y rounded-lg border border-white/80 bg-white/75 px-5 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
              </label>

              {statusMessage && (
                <p
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status === "success"
                      ? "bg-sage-soft text-sage-deep"
                      : "bg-[var(--inspinia-red)]/10 text-[var(--inspinia-red)]"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending" || !formIsValid}
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-sage px-6 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:scale-100"
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
