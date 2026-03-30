import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import aboutustile9 from "../assets/about-us-tile-9.jpg";

const subjects = [
  {
    title: "Mathematics",
    letter: "M",
    desc: "From foundational concepts to advanced problem-solving, we help learners build confidence, accuracy, and strong exam technique in Mathematics.",
    icon: (
      <svg
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Physical Sciences",
    letter: "P",
    desc: "We simplify challenging concepts through structured explanations, practical examples, and focused revision that prepares students for tests and exams.",
    icon: (
      <svg
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Life Sciences",
    letter: "L",
    desc: "Explore biology with engaging lessons that improve understanding, strengthen terminology, and help learners answer with confidence in assessments.",
    icon: (
      <svg
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "English",
    letter: "E",
    desc: "We support learners in comprehension, writing, grammar, and literature so they can communicate clearly and perform better across assessments.",
    icon: (
      <svg
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5 4.462 5 2 6.343 2 8v11c0-1.657 2.462-3 5.5-3 1.746 0 3.332.477 4.5 1.253m0-11C13.168 5.477 14.754 5 16.5 5 19.538 5 22 6.343 22 8v11c0-1.657-2.462-3-5.5-3-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "Geography",
    letter: "G",
    desc: "From mapwork to theory, we help students connect concepts, analyse case studies, and improve exam performance with targeted preparation.",
    icon: (
      <svg
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.553-.832L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m-6 3l6-3"
        />
      </svg>
    ),
  },
  {
    title: "Accounting",
    letter: "A",
    desc: "We teach Accounting step by step, helping learners understand financial concepts, master calculations, and answer structured questions correctly.",
    icon: (
      <svg
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10c1.305 0 2.417.418 2.83 1M12 8V6m0 12v-2m-6 2h12a2 2 0 002-2V8a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function Subjects() {
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
                Our Subjects
              </p>

              <h1 className="mt-3 font-zuume text-3xl leading-tight md:text-4xl">
                Focused Subject Support
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Subjects grid */}
        <section className="bg-white py-10 md:py-14">
          <div className="container mx-auto px-5 md:px-8">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="font-poppins text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  We offer structured academic support across key school
                  subjects, helping learners strengthen their understanding,
                  improve confidence, and prepare effectively for exams.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
                {subjects.map((subject) => (
                  <div
                    key={subject.title}
                    className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:p-7"
                  >
                    <span className="pointer-events-none absolute right-4 top-2 font-zuume text-[5rem] leading-none text-secondary/10 transition duration-500 group-hover:scale-110 md:text-[6rem]">
                      {subject.letter}
                    </span>

                    <div className="relative z-10">
                      <div className="text-secondary">{subject.icon}</div>

                      <h2 className="mt-5 font-zuume text-2xl leading-tight text-secondary">
                        {subject.title}
                      </h2>

                      <div className="mt-4 h-px w-full bg-slate-200" />

                      <p className="mt-4 font-poppins text-sm leading-7 text-slate-600 md:text-[15px]">
                        {subject.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
}