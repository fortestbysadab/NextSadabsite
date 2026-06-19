"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback("Please fill in all fields.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setFeedback(json.message);
        form.reset();
      } else {
        setStatus("error");
        setFeedback(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "h-12 w-full rounded-sm border border-hairline bg-canvas px-sm text-body-md text-ink placeholder:text-mute transition-colors focus:border-hairline-strong focus:outline-none focus:ring-2 focus:ring-link/20";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-md py-xl text-center">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-link-bg-soft text-link-deep">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-display-sm text-ink">Message sent.</p>
        <p className="max-w-prose text-body-md text-body">{feedback}</p>
      </div>
    );
  }

  return (
    <>
      {status === "error" && feedback && (
        <div className="mb-md rounded-sm bg-error-soft px-sm py-sm text-body-sm text-error-deep">
          {feedback}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-md">
        <div className="flex flex-col gap-xs">
          <label htmlFor="name" className="text-body-sm font-medium text-ink">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-xs">
          <label htmlFor="email" className="text-body-sm font-medium text-ink">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-xs">
          <label htmlFor="message" className="text-body-sm font-medium text-ink">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me what is on your mind..."
            required
            rows={6}
            className="w-full rounded-sm border border-hairline bg-canvas px-sm py-sm text-body-md text-ink placeholder:text-mute transition-colors focus:border-hairline-strong focus:outline-none focus:ring-2 focus:ring-link/20"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary mt-xs w-full disabled:cursor-not-allowed disabled:opacity-65"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </form>

      {/* Divider */}
      <div className="my-lg flex items-center gap-sm text-body-sm text-mute">
        <span className="h-px flex-1 bg-hairline" />
        <span>or</span>
        <span className="h-px flex-1 bg-hairline" />
      </div>

      <div className="flex justify-center">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 text-body-sm font-medium text-body transition-colors hover:text-link"
          aria-label="Email me directly"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          Email me directly
        </a>
      </div>
    </>
  );
}
