import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const subjects = [
  {
    title: "Mathematics",
    letter: "M",
    desc: "From foundational concepts to advanced problem-solving, we help learners build confidence, accuracy, and strong exam technique in Mathematics.",
    bg: "bg-[#F8FAFC]",
    text: "text-[#0C102A]",
    subtext: "text-[#3A5683]",
    iconColor: "text-[#3A5683]",
    border: "border-[#0C102A]/10",
    offset: "",
    dark: false,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    bg: "bg-[#3A5683]/5",
    text: "text-[#0C102A]",
    subtext: "text-[#3A5683]",
    iconColor: "text-[#3A5683]",
    border: "border-[#0C102A]/10",
    offset: "lg:mt-16",
    dark: false,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    bg: "bg-[#0C102A]",
    text: "text-white",
    subtext: "text-[#8AA4C8]",
    iconColor: "text-[#8AA4C8]",
    border: "border-white/10",
    offset: "lg:mt-32",
    dark: true,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    bg: "bg-[#F8FAFC]",
    text: "text-[#0C102A]",
    subtext: "text-[#3A5683]",
    iconColor: "text-[#3A5683]",
    border: "border-[#0C102A]/10",
    offset: "",
    dark: false,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    bg: "bg-[#3A5683]/5",
    text: "text-[#0C102A]",
    subtext: "text-[#3A5683]",
    iconColor: "text-[#3A5683]",
    border: "border-[#0C102A]/10",
    offset: "lg:mt-16",
    dark: false,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    bg: "bg-[#0C102A]",
    text: "text-white",
    subtext: "text-[#8AA4C8]",
    iconColor: "text-[#8AA4C8]",
    border: "border-white/10",
    offset: "lg:mt-32",
    dark: true,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="inline-block text-sm uppercase tracking-[0.2em] text-[#3A5683] raleway-semibold mb-4">
              Our Subjects
            </span>

            <h1 className="text-4xl md:text-5xl raleway-bold text-[#0C102A] leading-tight">
              Focused Subject Support
              <span className="block text-[#3A5683] mt-2">Designed For Real Results</span>
            </h1>

            <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed">
              We offer structured academic support across key school subjects,
              helping learners strengthen their understanding, improve confidence,
              and prepare effectively for exams.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col lg:flex-row gap-6 md:gap-8 flex-wrap">
          {subjects.map((subject) => (
            <div
              key={subject.title}
              className={`w-full lg:w-[31%] ${subject.bg} ${subject.offset} p-8 md:p-12 relative overflow-hidden group transition-transform duration-500 hover:-translate-y-2`}
            >
              <span
                className={`absolute -right-4 md:-right-8 -top-4 md:-top-8 text-[8rem] md:text-[12rem] font-black ${
                  subject.dark ? "text-white/5" : "text-[#0C102A]/5"
                } group-hover:scale-110 transition-transform duration-700 select-none`}
              >
                {subject.letter}
              </span>

              <div className="relative z-10">
                <div className={`${subject.iconColor} mb-4`}>{subject.icon}</div>

                <h3
                  className={`text-xl md:text-2xl raleway-bold ${subject.text} mb-4 md:mb-6 border-b ${subject.border} pb-4`}
                >
                  {subject.title}
                </h3>

                <p
                  className={`${subject.subtext} leading-relaxed text-sm md:text-base`}
                >
                  {subject.desc}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}