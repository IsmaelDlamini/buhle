import React, { useState, useMemo } from "react";
import AnimatedSection from "../components/AnimatedSection";
import aboutustile9 from "../assets/about-us-tile-9.jpg";

const emailValid = (v) => /^\S+@\S+\.\S+$/.test(v);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({});

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!emailValid(form.email)) e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please enter your message.";
    return e;
  }, [form]);

  const valid = Object.keys(errors).length === 0;

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleBlur(e) {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!valid) return;

    alert("Thanks — we will get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
    setTouched({});
  }

  return (
    <div className="bg-white text-secondary">
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutustile9})` }}
        >
          <div className="absolute inset-0 bg-[#0f3d5c]/75" />

          <div className="relative mx-auto max-w-4xl px-5 pt-24 pb-14 text-center text-white md:px-8 md:pt-28 md:pb-16">
            <AnimatedSection>
              <p className="font-poppins text-[11px] uppercase tracking-[0.25em] text-white/70">
                Get In Touch
              </p>

              <h1 className="mt-3 font-zuume text-3xl leading-tight md:text-4xl">
                Contact Us
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white py-10 md:py-14">
          <div className="container mx-auto px-5 md:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-poppins text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  We would love to hear from you. Whether you have a question
                  about admissions, programmes, or learner support, our team is
                  ready to help.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr] lg:gap-6">
              {/* Contact info */}
              <AnimatedSection>
                <div className="relative h-full overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b2c3d] via-[#0f3d5c] to-[#184f73] p-6 text-white shadow-[0_16px_40px_rgba(11,44,61,0.16)] md:p-8">
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                  <div className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-[#9DCAEB]/20 blur-2xl" />
                  <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10" />

                  <div className="relative z-10">
                    <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-white/65">
                      Contact Details
                    </p>

                    <h2 className="mt-3 font-zuume text-3xl leading-tight text-white md:text-4xl">
                      Let’s Start the Conversation
                    </h2>

                    <p className="mt-4 font-poppins text-sm leading-7 text-white/80 md:text-base">
                      Reach out to us for enquiries about enrolment, subject
                      support, learner progress, or any general questions about
                      our academy.
                    </p>

                    <div className="mt-8 space-y-5">
                      <div className="rounded-[20px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                        <p className="font-poppins text-[11px] uppercase tracking-[0.18em] text-white/60">
                          Phone
                        </p>
                        <a
                          href="tel:+27601234567"
                          className="mt-2 inline-block font-poppins text-sm text-white transition hover:text-white/80 md:text-base"
                        >
                          +27 60 123 4567
                        </a>
                      </div>

                      <div className="rounded-[20px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                        <p className="font-poppins text-[11px] uppercase tracking-[0.18em] text-white/60">
                          Email
                        </p>
                        <a
                          href="mailto:info@buhlelearning.co.za"
                          className="mt-2 inline-block break-words font-poppins text-sm text-white transition hover:text-white/80 md:text-base"
                        >
                          info@buhlelearning.co.za
                        </a>
                      </div>

                      <div className="rounded-[20px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                        <p className="font-poppins text-[11px] uppercase tracking-[0.18em] text-white/60">
                          Office Hours
                        </p>
                        <p className="mt-2 font-poppins text-sm leading-7 text-white/85 md:text-base">
                          Monday – Friday
                          <br />
                          08:00 – 17:00
                        </p>
                      </div>

                      <div className="rounded-[20px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm">
                        <p className="font-poppins text-[11px] uppercase tracking-[0.18em] text-white/60">
                          Location
                        </p>
                        <p className="mt-2 font-poppins text-sm leading-7 text-white/85 md:text-base">
                          Mbombela, Mpumalanga,
                          <br />
                          South Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Form */}
              <AnimatedSection>
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-8">
                  <div className="mb-7">
                    <p className="font-poppins text-[11px] uppercase tracking-[0.18em] text-secondary/65">
                      Send a Message
                    </p>

                    <h2 className="mt-2 font-zuume text-3xl leading-tight text-secondary md:text-4xl">
                      We’re Here to Help
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-poppins text-sm font-medium text-slate-700"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`block w-full rounded-2xl border bg-slate-50 px-4 py-3.5 font-poppins text-sm text-slate-800 outline-none transition ${
                          touched.name && errors.name
                            ? "border-red-400 focus:border-red-500 bg-red-50/30"
                            : "border-slate-200 focus:border-secondary focus:bg-white"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {touched.name && errors.name && (
                        <p className="mt-2 font-poppins text-sm text-red-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-poppins text-sm font-medium text-slate-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`block w-full rounded-2xl border bg-slate-50 px-4 py-3.5 font-poppins text-sm text-slate-800 outline-none transition ${
                          touched.email && errors.email
                            ? "border-red-400 focus:border-red-500 bg-red-50/30"
                            : "border-slate-200 focus:border-secondary focus:bg-white"
                        }`}
                        placeholder="Enter your email address"
                      />
                      {touched.email && errors.email && (
                        <p className="mt-2 font-poppins text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block font-poppins text-sm font-medium text-slate-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="6"
                        className={`block w-full resize-none rounded-2xl border bg-slate-50 px-4 py-3.5 font-poppins text-sm text-slate-800 outline-none transition ${
                          touched.message && errors.message
                            ? "border-red-400 focus:border-red-500 bg-red-50/30"
                            : "border-slate-200 focus:border-secondary focus:bg-white"
                        }`}
                        placeholder="How can we help you?"
                      />
                      {touched.message && errors.message && (
                        <p className="mt-2 font-poppins text-sm text-red-600">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-poppins text-sm font-medium transition ${
                          valid
                            ? "bg-secondary text-white hover:opacity-90"
                            : "cursor-not-allowed bg-slate-200 text-slate-400"
                        }`}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}