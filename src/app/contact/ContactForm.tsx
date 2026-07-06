"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const { t } = useLanguage();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setStatus("error");
      setFeedback(t.contact.errorFill);
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
        setFeedback(json.message || t.contact.errorGeneric);
      }
    } catch {
      setStatus("error");
      setFeedback(t.contact.errorGeneric);
    }
  }

  const inputClass =
    "h-14 w-full rounded-full border border-stone bg-clay-soft px-5 text-body-md text-forest placeholder:text-forest-mute transition-colors duration-300 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 focus:ring-offset-white";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-success-soft text-sage-deep">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-serif text-display-sm text-forest">
          {t.contact.successTitle}
        </p>
        <p className="max-w-prose text-body-md text-forest-soft">{feedback}</p>
      </div>
    );
  }

  return (
    <>
      {status === "error" && feedback && (
        <div className="mb-5 rounded-2xl border border-error/30 bg-error-soft px-5 py-3 text-body-sm text-error-deep">
          {feedback}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-body-sm font-semibold text-forest">
            {t.contact.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t.contact.namePlaceholder}
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-body-sm font-semibold text-forest">
            {t.contact.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t.contact.emailPlaceholder}
            required
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-body-sm font-semibold text-forest">
            {t.contact.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t.contact.messagePlaceholder}
            required
            rows={6}
            className="w-full rounded-3xl border border-stone bg-clay-soft px-5 py-4 text-body-md text-forest placeholder:text-forest-mute transition-colors duration-300 focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 focus:ring-offset-white"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary mt-2 h-14 w-full disabled:cursor-not-allowed disabled:opacity-65"
        >
          {status === "submitting" ? t.contact.sending : t.contact.send}
        </button>
      </form>

      <div className="my-8 flex items-center gap-4 text-caption uppercase tracking-widest text-forest-mute">
        <span className="h-px flex-1 bg-stone" />
        <span>{t.contact.orLabel}</span>
        <span className="h-px flex-1 bg-stone" />
      </div>

      <div className="flex justify-center">
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 text-body-sm font-semibold text-forest-soft transition-colors duration-300 hover:text-terracotta"
          aria-label={t.contact.emailDirect}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <polyline points="2,4 12,13 22,4" />
          </svg>
          {t.contact.emailDirect}
        </a>
      </div>
    </>
  );
}
