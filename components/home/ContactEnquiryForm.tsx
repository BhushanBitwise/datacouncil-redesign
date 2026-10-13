
"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { courses } from "@/data/courses";

const inputClass =
  "mt-2 block min-h-[54px] w-full min-w-0 rounded-2xl border border-black/15 bg-white px-4 py-3 text-base text-[#101010] outline-none transition-[border-color,box-shadow] placeholder:text-black/35 focus:border-[#101010] focus:ring-2 focus:ring-[#c9ff3b]/70";

export default function ContactEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const course = String(data.get("course") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const whatsappMessage = [
      "Hello Data Council, I have a course enquiry.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interested course: ${course}`,
      `Message: ${message || "Not provided"}`,
    ].join("\n");

    const whatsappUrl =
      "https://wa.me/918080152238?text=" +
      encodeURIComponent(whatsappMessage);

    const newWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );

    if (newWindow) {
      setSubmitted(true);
    } else {
      // Popup blocked: let the user open the prepared message manually.
      window.location.href = whatsappUrl;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full min-w-0 space-y-6">
      <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-[#101010]"
          >
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            minLength={2}
            maxLength={80}
            required
            className={inputClass}
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-[#101010]"
          >
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={254}
            required
            className={inputClass}
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="contact-phone"
            className="block text-sm font-semibold text-[#101010]"
          >
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            pattern="[+0-9 ()-]{10,18}"
            title="Enter a valid phone number."
            required
            className={inputClass}
          />
        </div>

        <div className="min-w-0">
          <label
            htmlFor="contact-course"
            className="block text-sm font-semibold text-[#101010]"
          >
            Interested course <span aria-hidden="true">*</span>
          </label>
          <select
            id="contact-course"
            name="course"
            defaultValue=""
            required
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              Select a course
            </option>

            {courses.map((course) => (
              <option key={course.slug} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-[#101010]"
        >
          Your message{" "}
          <span className="font-normal text-black/45">(optional)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={1500}
          placeholder="Tell us what you want to learn or ask us a question..."
          className={`${inputClass} min-h-[130px] resize-y leading-6`}
        />
      </div>

      <p className="text-xs leading-5 text-black/50">
        On submission, WhatsApp will open with your enquiry details ready to
        send to our team.
      </p>

      <button
        type="submit"
        className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#101010] px-6 text-base font-semibold !text-white transition-[background-color,color,transform] duration-200 hover:bg-[#c9ff3b] hover:!text-[#101010] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010] sm:w-auto sm:min-w-[220px]"
      >
        {submitted ? "Open WhatsApp again" : "Send your enquiry"}

        {submitted ? (
          <CheckCircle2 size={18} aria-hidden="true" />
        ) : (
          <ArrowUpRight size={18} aria-hidden="true" />
        )}
      </button>
    </form>
  );
}
