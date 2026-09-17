import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const initialForm = { firstName: "", lastName: "", email: "", phone: "", message: "" };
const contactEmail = "hamad290k@gmail.com";
const contactPhone = "+92 300 0000000";
const locationText = "Islamabad, Pakistan";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message || "Unable to send your message.");
        }
        return result;
      })
      .then(() => {
        setStatus("sent");
        setForm(initialForm);
      })
      .catch((error) => {
        setStatus("error");
        console.error("Contact form error:", error);
      });
  };

  return (
    <section className="container-page py-10 md:py-16 lg:py-20">
      <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_30px_80px_rgba(2,6,23,0.7)]">
        <div className="grid lg:grid-cols-[1.05fr_1.45fr]">
          <div className="relative overflow-hidden bg-slate-950 px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.25),_transparent_35%)]" />
            <div className="relative z-10">
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
                Share your thoughts
              </p>
              <h1 className="mb-4 text-4xl font-black leading-none text-white md:text-5xl">
                Love to hear from you
              </h1>
              <p className="max-w-md text-base leading-7 text-slate-300">
                I think it&apos;s great that you&apos;re open to hearing from others.
                Sharing thoughts fosters connection and creativity. Whether it&apos;s a
                deep insight, casual chat, or random idea, communication builds
                understanding.
              </p>

              <div className="mt-8 space-y-5 text-sm text-slate-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>Email: {contactEmail}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>Number: {contactPhone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>Location: {locationText}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 px-6 py-8 dark:bg-slate-900/80 sm:px-8 lg:px-10 lg:py-12">
            <div className="mb-6">
              <p className="text-3xl font-black tracking-[-0.05em] text-slate-900 dark:text-white">
                Get in touch
              </p>
              <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                Our friendly team would love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="firstName">
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="lastName">
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="phone">
                  Phone number*
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="message">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Leave us a message"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Thanks! Your message was sent. Check your inbox for it.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-rose-600 dark:text-rose-400">
                  The message could not be sent. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
