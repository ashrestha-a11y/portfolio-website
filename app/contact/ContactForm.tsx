"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = { name: string; email: string; phone: string; message: string };
type ErrorState = Partial<Record<keyof FormState, string>>;
const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "idle">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isValidEmail = useMemo(() => /^\S+@\S+\.\S+$/.test(form.email), [form.email]);
  const normalizePhone = (value: string) => value.replace(/[^\d]/g, "");
  const isValidPhone = (value: string) => { const digits = normalizePhone(value); return digits.length >= 10 && digits.length <= 15; };

  function validate(): ErrorState {
    const nextErrors: ErrorState = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!isValidEmail) nextErrors.email = "Please enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    else if (!isValidPhone(form.phone)) nextErrors.phone = "Please enter a valid phone number with 10 to 15 digits.";
    if (!form.message.trim()) nextErrors.message = "Please enter a message.";
    else if (form.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters.";
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatusType("error");
      setStatus("Please fix the highlighted fields and try again.");
      return;
    }
    setIsSubmitting(true); setStatusType("idle"); setStatus("Sending your message...");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, phone: normalizePhone(form.phone) }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send message.");
      setStatusType("success");
      setStatus("Thanks for reaching out. Your message has been sent successfully.");
      setForm(initialState); setErrors({});
    } catch (error) {
      setStatusType("error");
      setStatus(error instanceof Error ? error.message : "Unable to send message.");
    } finally { setIsSubmitting(false); }
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    const nextValue = field === "phone" ? value.replace(/[^\d()+\-\s.]/g, "") : value;
    setForm((current) => ({ ...current, [field]: nextValue }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  return (
    <form className="contact-form card" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input className={errors.name ? "input-error" : ""} type="text" value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" />
          {errors.name ? <small className="error-text">{errors.name}</small> : null}
        </label>
        <label>
          <span>Email</span>
          <input className={errors.email ? "input-error" : ""} type="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" />
          {errors.email ? <small className="error-text">{errors.email}</small> : null}
        </label>
        <label className="full-width-field">
          <span>Phone Number</span>
          <input className={errors.phone ? "input-error" : ""} type="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="(555) 555-5555" inputMode="tel" />
          {errors.phone ? <small className="error-text">{errors.phone}</small> : null}
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea className={errors.message ? "input-error" : ""} value={form.message} onChange={(event) => updateField("message", event.target.value)} rows={7} placeholder="Tell me about your project, opportunity, or question." />
        {errors.message ? <small className="error-text">{errors.message}</small> : null}
      </label>
      <button className="button primary submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</button>
      {status ? <p className={`form-status ${statusType}`}>{status}</p> : null}
    </form>
  );
}
