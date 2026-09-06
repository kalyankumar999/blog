"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { socialLinks, personalData } from "@/data/personalData";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: This form is UI-only. No email service is connected yet.
    // Wire this up to a provider (e.g. Resend, Formspree, or a custom API route)
    // and replace this handler to actually send the message.
    setNote(
      "This form isn't connected to an email service yet — please reach out directly using the email below for now."
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-20 md:px-10 md:py-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 animate-float-slow rounded-full bg-orange/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="06"
            kicker="Contact"
            title="Let's build something"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <Reveal>
            <p className="max-w-sm text-base leading-relaxed text-gray-400">
              Reach out about roles, freelance work, or collaboration —
              currently {personalData.status.toLowerCase()}.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${socialLinks.email}`}
                className="block font-mono text-sm text-white transition-colors hover:text-orange"
              >
                {socialLinks.email}
              </a>
              <a
                href={`tel:${socialLinks.phone.replace(/\s+/g, "")}`}
                className="block font-mono text-sm text-white transition-colors hover:text-orange"
              >
                {socialLinks.phone}
              </a>
              <p className="font-mono text-sm text-gray-500">
                {personalData.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-[11px] uppercase tracking-wide text-gray-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-line bg-black-soft px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-orange"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-[11px] uppercase tracking-wide text-gray-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-line bg-black-soft px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-orange"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-wide text-gray-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1.5 w-full rounded-lg border border-line bg-black-soft px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-orange"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-orange px-6 py-2.5 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-orange-light"
              >
                Send message
              </button>
              {note && (
                <p className="font-mono text-xs text-gray-500" role="status">
                  {note}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
