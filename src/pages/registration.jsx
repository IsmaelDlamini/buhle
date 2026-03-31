import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import aboutustile9 from "../assets/about-us-tile-9.jpg";
import registrationPoster from "../assets/notice.jpg"; // replace with your actual poster image path

export default function Registration() {
  const subjectFees = [
    { label: "1 Subject", price: "R200" },
    { label: "2 Subjects", price: "R300" },
    { label: "3 Subjects", price: "R400" },
    { label: "4 Subjects", price: "R500" },
    { label: "5 or 6 Subjects", price: "R600" },
  ];

  const steps = [
    {
      number: "01",
      title: "Download the Registration Form",
      description:
        "Click the download button below to get the registration form in PDF format.",
    },
    {
      number: "02",
      title: "Complete the Form",
      description:
        "Fill in all required learner and parent or guardian details clearly and accurately.",
    },
    {
      number: "03",
      title: "Attach the Required Documents",
      description:
        "Include the learner’s matric statement, or if Grade 12 is not available, submit the latest passed report or ABET Level 4 proof.",
    },
    {
      number: "04",
      title: "Submit the Form",
      description:
        "Send the completed form by email or submit it physically at the school office.",
    },
    {
      number: "05",
      title: "Pay the Registration Fee",
      description:
        "A non-refundable registration fee of R650 is required to process registration.",
    },
  ];

  const requirements = [
    "Matric statement.",
    "If you do not have Grade 12, bring your Grade 9–11 passed report or ABET Level 4 proof.",
    "Completed registration form.",
    "Registration fee of R650.",
  ];

  const contacts = {
    phone1: "082 505 5485",
    phone2: "066 499 1034",
    phone3: "076 059 8395",
    email: "info@buhlelearning.co.za",
    location: "Kamhlushwa, Dunusa, Nkomazi, Mpumalanga",
    officeNote: "You may email the completed form or submit it directly at the school office.",
    formPdf: "/documents/buhle-registration-form.pdf",
  };

  return (
    <div className="bg-white text-secondary">
      <main>
        {/* HERO */}
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutustile9})` }}
        >
          <div className="absolute inset-0 bg-[#0f3d5c]/75" />

          <div className="relative mx-auto max-w-4xl px-5 pt-24 pb-14 text-center text-white md:px-8 md:pt-28 md:pb-16">
            <AnimatedSection>
              <p className="font-poppins text-[11px] uppercase tracking-[0.25em] text-white/70">
                Admissions 2026
              </p>

              <h1 className="mt-3 font-zuume text-3xl leading-tight md:text-4xl">
                Registration Now Open
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-white py-10 md:py-14">
          <div className="container mx-auto px-5 md:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-poppins text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  Registration for the matric rewrite programme is now open.
                  Download the registration form, complete it, attach the
                  required documents, and submit it by email or at the school
                  office.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              {/* LEFT SIDE */}
              <div className="space-y-6">
                <AnimatedSection>
                  <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                    <div className="border-b border-slate-200 bg-secondary px-6 py-4 text-white md:px-7">
                      <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-white/70">
                        Registration Notice
                      </p>
                      <h2 className="mt-2 font-zuume text-3xl leading-tight md:text-4xl">
                        2026 Admission Now Open
                      </h2>
                    </div>

                    <div className="p-6 md:p-7">
                      <p className="font-poppins text-sm leading-7 text-slate-600 md:text-base">
                        Learners who would like to register for the matric
                        rewrite programme can now begin the registration
                        process. Please ensure that the form is completed
                        properly and submitted together with all required
                        supporting documents.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href={contacts.formPdf}
                          download
                          className="inline-flex items-center justify-center rounded-full bg-secondary px-6 py-3 font-poppins text-sm font-medium text-white transition hover:opacity-90"
                        >
                          Download Registration Form
                        </a>

                        <a
                          href={`mailto:${contacts.email}`}
                          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 font-poppins text-sm font-medium text-secondary transition hover:border-secondary hover:bg-secondary hover:text-white"
                        >
                          Email Completed Form
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-7">
                    <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-secondary/65">
                      Requirements
                    </p>

                    <h2 className="mt-2 font-zuume text-3xl leading-tight text-secondary md:text-4xl">
                      What You Need
                    </h2>

                    <div className="mt-5 space-y-3">
                      {requirements.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
                        >
                          <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
                          <p className="font-poppins text-sm leading-6 text-slate-600">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-6">
                <AnimatedSection>
                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-secondary/65">
                          Registration Fee
                        </p>

                        <h2 className="mt-2 font-zuume text-3xl leading-tight text-secondary md:text-4xl">
                          R650
                        </h2>

                        <p className="mt-3 font-poppins text-sm leading-6 text-slate-600">
                          A registration fee of <span className="font-semibold text-secondary">R650</span> is
                          applicable during registration.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-secondary px-4 py-3 text-white shadow-sm">
                        <p className="font-poppins text-[11px] uppercase tracking-[0.18em] text-white/70">
                          Fee
                        </p>
                        <p className="font-zuume text-3xl leading-none">R650</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection>
                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-7">
                    <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-secondary/65">
                      Subject Fees
                    </p>

                    <h2 className="mt-2 font-zuume text-3xl leading-tight text-secondary md:text-4xl">
                      Monthly Subject Prices
                    </h2>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {subjectFees.map((item) => (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                        >
                          <p className="font-poppins text-sm text-slate-500">
                            {item.label}
                          </p>
                          <p className="mt-1 font-zuume text-3xl leading-none text-secondary">
                            {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="bg-grey py-12 md:py-16">
          <div className="container mx-auto px-5 md:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-secondary/65">
                  How To Register
                </p>

                <h2 className="mt-2 font-zuume text-3xl leading-tight text-secondary md:text-4xl">
                  Follow These Steps
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white">
                      <span className="font-zuume text-xl leading-none">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-4 font-poppins text-base font-semibold text-secondary">
                      {step.title}
                    </h3>

                    <p className="mt-2 font-poppins text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SUBMISSION + CONTACT */}
        <section className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-5 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <AnimatedSection>
                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.06)] md:p-7">
                  <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-secondary/65">
                    Submission Instructions
                  </p>

                  <h2 className="mt-2 font-zuume text-3xl leading-tight text-secondary md:text-4xl">
                    Where To Submit
                  </h2>

                  <div className="mt-5 space-y-4">
                    <div className="rounded-2xl bg-slate-50 px-4 py-4">
                      <p className="font-poppins text-sm leading-6 text-slate-600">
                        {contacts.officeNote}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 px-4 py-4">
                      <p className="font-poppins text-sm text-slate-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${contacts.email}`}
                        className="mt-1 inline-block font-poppins text-sm font-medium text-secondary hover:opacity-80 md:text-base"
                      >
                        {contacts.email}
                      </a>
                    </div>

                    <div className="rounded-2xl bg-slate-50 px-4 py-4">
                      <p className="font-poppins text-sm text-slate-500">
                        School Office
                      </p>
                      <p className="mt-1 font-poppins text-sm font-medium leading-6 text-secondary md:text-base">
                        {contacts.location}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
                  <div className="border-b border-slate-200 px-6 py-5 md:px-7">
                    <p className="font-poppins text-[11px] uppercase tracking-[0.2em] text-secondary/65">
                      Registration Poster
                    </p>

                    <h2 className="mt-2 font-zuume text-3xl leading-tight text-secondary md:text-4xl">
                      More Information
                    </h2>
                  </div>

                  <div className="p-4 md:p-5">
                    <img
                      src={registrationPoster}
                      alt="2026 registration poster"
                      className="w-full rounded-[20px] border border-slate-200 object-cover"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-12 md:px-8 md:pb-16">
          <AnimatedSection>
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b2c3d] via-[#0f3d5c] to-[#184f73] px-6 py-10 text-center shadow-[0_12px_40px_rgba(11,44,61,0.25)] md:px-10 md:py-12">
              <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-14 -right-6 h-40 w-40 rounded-full bg-[#9DCAEB]/20 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10" />

              <div className="relative z-10">
                <p className="mb-3 font-poppins text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Download & Submit
                </p>

                <h2 className="font-zuume text-3xl leading-tight text-white md:text-4xl">
                  Start Your Registration Today
                </h2>

                <p className="mx-auto mt-4 max-w-2xl font-poppins text-sm leading-6 text-white/80">
                  Download the registration form, complete it, attach your
                  documents, and send it by email or submit it at the school
                  office together with the registration fee.
                </p>

                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href={contacts.formPdf}
                    download
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 font-poppins text-sm font-medium text-secondary shadow-md transition hover:bg-[#9DCAEB]"
                  >
                    Download Registration Form
                  </a>

                  <a
                    href={`mailto:${contacts.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 font-poppins text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Send By Email
                  </a>
                </div>

                <p className="mt-5 font-poppins text-sm text-white/85">
                  {contacts.phone1} | {contacts.phone2} | {contacts.phone3}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
}
