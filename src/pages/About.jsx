import React from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import whoImg from "../assets/hero-2.jpg";

export default function About() {
  const values = [
    {
      title: "Focused Academic Support",
      description:
        "We provide structured lessons that help learners strengthen their understanding, improve their confidence, and perform better in class and exams.",
    },
    {
      title: "Personal Attention",
      description:
        "Our smaller learning environment allows us to better understand each learner’s needs and give support that feels personal and effective.",
    },
    {
      title: "Growth Beyond the Classroom",
      description:
        "We believe education is not only about marks, but also about discipline, confidence, consistency, and preparing learners for the future.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-grey py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <AnimatedSection>
            <div className="max-w-xl">
              <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-secondary/70">
                About Us
              </p>

              <h1 className="mt-3 font-zuume text-5xl md:text-6xl text-secondary leading-none">
                Building Confidence.
                <br />
                Improving Results.
              </h1>

              <p className="mt-6 font-poppins text-sm leading-7 text-slate-600 md:text-base">
                At Buhle Learning Center, our mission is to create a supportive
                and disciplined learning environment where learners can grow
                academically, rebuild confidence, and work toward a stronger
                future. We combine structured teaching with genuine care so
                every learner feels seen, supported, and encouraged to succeed.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-poppins text-sm font-medium text-white transition hover:opacity-90"
                >
                  Apply Now
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-secondary px-6 py-3 font-poppins text-sm font-medium text-secondary transition hover:bg-secondary hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              <img
                src={whoImg}
                alt="Learners in class"
                className="h-[420px] w-full rounded-[28px] object-cover shadow-[0_20px_60px_rgba(15,14,53,0.10)]"
              />
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/15 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-2xl border border-border bg-white p-8 shadow-sm">
                <p className="font-poppins text-sm font-medium uppercase tracking-[0.18em] text-secondary/70">
                  Our Mission
                </p>
                <h2 className="mt-3 font-zuume text-4xl text-secondary">
                  Purpose-Driven Learning
                </h2>
                <p className="mt-4 font-poppins text-sm leading-7 text-slate-600 md:text-base">
                  Our mission is to provide supportive, disciplined learning
                  environments for learners who need a second chance to complete
                  their matric and move forward with confidence. We combine
                  academic structure with encouragement, mentorship, and care.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="h-full rounded-2xl border border-border bg-grey p-8 shadow-sm">
                <p className="font-poppins text-sm font-medium uppercase tracking-[0.18em] text-secondary/70">
                  Our Vision
                </p>
                <h2 className="mt-3 font-zuume text-4xl text-secondary">
                  Opening Future Opportunities
                </h2>
                <p className="mt-4 font-poppins text-sm leading-7 text-slate-600 md:text-base">
                  We want to see every learner achieve their matric, unlock
                  meaningful opportunities, and grow into a confident, capable
                  individual who is ready for the next stage of life.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What defines us */}
      <section className="bg-grey py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-secondary/70">
                What Defines Us
              </p>
              <h2 className="mt-3 font-zuume text-5xl text-secondary md:text-6xl">
                A Learning Space With Purpose
              </h2>
              <p className="mt-4 font-poppins text-sm text-slate-600 md:text-base">
                Everything we do is guided by a commitment to academic growth,
                discipline, and helping learners believe in their own potential.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={index}>
                <div className="group h-full rounded-2xl border border-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="font-zuume text-4xl text-secondary/20">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 font-poppins text-lg font-semibold text-secondary">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-poppins text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="rounded-[28px] bg-secondary px-6 py-14 text-center md:px-12">
              <h2 className="font-zuume text-4xl text-white md:text-5xl">
                Ready to Take the Next Step?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl font-poppins text-sm text-white/80 md:text-base">
                Join a learning environment that values discipline, support, and
                academic progress. Let’s help your child move forward with
                confidence.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/admissions"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-poppins text-sm font-medium text-secondary transition hover:opacity-90"
                >
                  Start Your Application
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-poppins text-sm font-medium text-white transition hover:bg-white hover:text-secondary"
                >
                  Speak To Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}