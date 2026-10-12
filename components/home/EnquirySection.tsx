
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Phone, CheckCircle2 } from "lucide-react";

const EMAIL_TO = "hr@datacouncil.in";
// const EMAIL_TO = "thebhushan752@gmail.com";


const initialForm = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

const inputClass =
  "w-full rounded-2xl border border-black/15 bg-white/70 px-4 py-3.5 text-sm text-[#101010] outline-none transition placeholder:text-black/40 focus:border-black focus:bg-white";

export default function EnquirySection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Website Enquiry${form.course ? ` - ${form.course}` : ""}`;

    const body = [
      "Hello Data Council Team,",
      "",
      "I would like to enquire about your training courses.",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Interested Course: ${form.course || "Not selected"}`,
      "",
      "Message:",
      form.message.trim() || "No additional message",
      "",
      "Thank you.",
    ].join("\n");

    const mailtoUrl =
      `mailto:${EMAIL_TO}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    setStatus(
      "Your email app should open with the enquiry details filled in. Please press Send in your email app to submit it.",
    );

    window.location.href = mailtoUrl;
  }

  return (
    <section id="enquiry" className="section-space">
      <div className="container-main grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <span className="eyebrow">LET&apos;S TALK</span>

          <h2 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
            Your next chapter starts here.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-black/60">
            Tell us what you want to learn. Connect with our team
            to explore courses and take your next step.
          </p>

          <a href="tel:+918080152238" className="outline-button mt-8">
            <Phone size={16} />
            Call our team
            <ArrowUpRight size={16} />
          </a>

          <a
            href={`mailto:${EMAIL_TO}`}
            className="mt-5 inline-flex items-center gap-2 text-sm text-black/60 transition hover:text-black"
          >
            <Mail size={16} />
            {EMAIL_TO}
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] border border-black/10 bg-white/60 p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="enquiry-name"
                className="mb-2 block text-sm font-medium"
              >
                Full name *
              </label>
              <input
                id="enquiry-name"
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-email"
                className="mb-2 block text-sm font-medium"
              >
                Email address *
              </label>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-phone"
                className="mb-2 block text-sm font-medium"
              >
                Phone number *
              </label>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                minLength={7}
                maxLength={25}
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+91 98765 43210"
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="enquiry-course"
                className="mb-2 block text-sm font-medium"
              >
                Interested course
              </label>
              <select
                id="enquiry-course"
                name="course"
                value={form.course}
                onChange={(e) => updateField("course", e.target.value)}
                className={inputClass}
              >
                <option value="">Select a course</option>
                <option value="Full Stack Development">Full Stack Development</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="React JS">React JS</option>
                <option value="Node JS">Node JS</option>
                <option value="Next JS">Next JS</option>
                <option value="Data Science">Data Science</option>
                <option value="Data Analytics">Data Analytics</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="UI/UX Designing">UI/UX Designing</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="enquiry-message"
              className="mb-2 block text-sm font-medium"
            >
              Your message (optional)
            </label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              maxLength={2000}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder="Tell us what you would like to know..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <button type="submit" className="lime-button mt-6 w-full">
            Continue to email
            <ArrowUpRight size={17} />
          </button>

          {status && (
            <p
              role="status"
              aria-live="polite"
              className="mt-4 flex items-start gap-2 rounded-xl bg-lime-100 p-4 text-sm leading-6 text-green-950"
            >
              <CheckCircle2 size={18} className="mt-1 shrink-0" />
              <span>{status}</span>
            </p>
          )}

          <p className="mt-4 text-center text-xs leading-5 text-black/45">
            Your email app will open so you can review and send your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
