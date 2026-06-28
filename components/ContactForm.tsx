"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // ── BACKEND INTEGRATION POINT ───────────────────────────────
    // Replace this with a real submission, e.g.:
    //   await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data),
    //   });
    console.log("Contact form submission:", data);
    // ────────────────────────────────────────────────────────────

    setSent(true);
    form.reset();
  }

  const field =
    "w-full rounded-2xl border border-hairline bg-white px-4 py-3 text-ink placeholder:text-muted/70 focus:border-brand-400 focus:outline-none focus:ring-4 focus:ring-brand-100";
  const label = "mb-2 block text-xs font-700 uppercase tracking-[0.14em] text-muted";

  if (sent) {
    return (
      <div className="card flex h-full flex-col items-start justify-center p-9">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-2xl text-brand-600">
          ✓
        </span>
        <h3 className="mt-5 text-2xl font-700 text-ink">Message ready to send.</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          Your details were captured. Connect a backend or email service to
          deliver them — see the note in components/ContactForm.tsx.
        </p>
        <button onClick={() => setSent(false)} className="btn-soft mt-7">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className={label}>Organisation</label>
          <input id="company" name="company" className={field} placeholder="Company / department" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" required className={field} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="message" className={label}>Project details</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${field} resize-none`}
          placeholder="Tell us about the software you need."
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send message <ArrowRight size={16} />
      </button>
    </form>
  );
}
