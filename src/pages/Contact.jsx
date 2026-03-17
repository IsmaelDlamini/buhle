import React, { useState, useMemo } from "react";
import AnimatedSection from "../components/AnimatedSection";

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
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-grey py-20 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-secondary/70">
                Get In Touch
              </p>
              <h1 className="mt-3 font-zuume text-5xl md:text-6xl text-secondary">
                Contact Us
              </h1>
              <p className="mt-4 font-poppins text-sm md:text-base leading-7 text-slate-600">
                We would love to hear from you. Whether you have a question
                about admissions, programmes, or learner support, our team is
                ready to help.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
            {/* Left info */}
            <AnimatedSection>
              <div className="h-full rounded-[28px] bg-secondary p-8 md:p-10 text-white">
                <p className="font-poppins text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                  Contact Details
                </p>

                <h2 className="mt-3 font-zuume text-4xl md:text-5xl text-white">
                  Let’s Start the Conversation
                </h2>

                <p className="mt-5 font-poppins text-sm md:text-base leading-7 text-white/80">
                  Reach out to us for enquiries about enrolment, subject
                  support, learner progress, or any general questions about our
                  academy.
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="font-poppins text-xs uppercase tracking-[0.18em] text-white/60">
                      Phone
                    </p>
                    <a
                      href="tel:+27601234567"
                      className="mt-1 inline-block font-poppins text-base text-white hover:text-white/80 transition"
                    >
                      +27 60 123 4567
                    </a>
                  </div>

                  <div>
                    <p className="font-poppins text-xs uppercase tracking-[0.18em] text-white/60">
                      Email
                    </p>
                    <a
                      href="mailto:info@buhlelearning.co.za"
                      className="mt-1 inline-block font-poppins text-base text-white hover:text-white/80 transition"
                    >
                      info@buhlelearning.co.za
                    </a>
                  </div>

                  <div>
                    <p className="font-poppins text-xs uppercase tracking-[0.18em] text-white/60">
                      Office Hours
                    </p>
                    <p className="mt-1 font-poppins text-base text-white/85">
                      Monday – Friday
                      <br />
                      08:00 – 17:00
                    </p>
                  </div>

                  <div>
                    <p className="font-poppins text-xs uppercase tracking-[0.18em] text-white/60">
                      Location
                    </p>
                    <p className="mt-1 font-poppins text-base text-white/85 leading-7">
                      Mbombela, Mpumalanga,
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection>
              <div className="rounded-[28px] border border-border bg-white p-6 md:p-10 shadow-sm">
                <div className="mb-8">
                  <p className="font-poppins text-sm font-medium uppercase tracking-[0.18em] text-secondary/70">
                    Send a Message
                  </p>
                  <h2 className="mt-2 font-zuume text-4xl text-secondary">
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
                      className={`block w-full rounded-xl border bg-white px-4 py-3 font-poppins text-sm outline-none transition ${
                        touched.name && errors.name
                          ? "border-red-400 focus:border-red-500"
                          : "border-slate-200 focus:border-secondary"
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
                      className={`block w-full rounded-xl border bg-white px-4 py-3 font-poppins text-sm outline-none transition ${
                        touched.email && errors.email
                          ? "border-red-400 focus:border-red-500"
                          : "border-slate-200 focus:border-secondary"
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
                      className={`block w-full rounded-xl border bg-white px-4 py-3 font-poppins text-sm outline-none transition resize-none ${
                        touched.message && errors.message
                          ? "border-red-400 focus:border-red-500"
                          : "border-slate-200 focus:border-secondary"
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
                      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 font-poppins text-sm font-medium transition ${
                        valid
                          ? "bg-secondary text-white hover:opacity-90"
                          : "bg-slate-200 text-slate-400 cursor-not-allowed"
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
    </div>
  );
}