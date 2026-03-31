import React from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero-1.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-[760px] md:min-h-[860px] overflow-hidden">
      {/* Background image */}
      <img
        src={hero1}
        alt="Students learning in a supportive academic environment"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/55 via-black/45 to-black/65" />

      {/* Soft glow accents */}
      <div className="absolute left-1/2 top-[18%] z-10 h-40 w-40 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[18%] left-1/2 z-10 h-52 w-52 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-20 flex min-h-[760px] items-center justify-center px-4 pb-32 pt-28 md:min-h-[860px] md:pb-40 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 font-poppins text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm md:text-xs">
            Academic Support • Mathematics • Exam Preparation
          </span>

          <h1 className="mt-5 font-zuume text-[2.8rem] leading-[0.9] text-white sm:text-[3.4rem] md:text-[4.8rem]">
            Empowering Learners
            <br />
            To Reach Their Potential
          </h1>

          <p className="mx-auto mt-5 max-w-2xl font-poppins text-sm leading-7 text-white/85 md:text-base md:leading-8">
            Structured academic support, experienced tutors, and focused exam
            preparation designed to help students succeed in Mathematics and
            other key subjects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/registration"
              className="inline-flex min-w-[150px] items-center justify-center rounded-xl bg-secondary px-6 py-3 font-poppins text-sm text-white transition hover:opacity-90 md:text-base"
            >
              Apply Now
            </Link>

            <Link
              to="/about"
              className="inline-flex min-w-[150px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-poppins text-sm text-white backdrop-blur-sm transition hover:bg-white hover:text-secondary md:text-base"
            >
              Learn More
            </Link>
          </div>

          {/* Smaller centered trust points */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <p className="font-poppins text-xs text-white/85 md:text-sm">
                Experienced Tutors
              </p>
            </div>

            <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <p className="font-poppins text-xs text-white/85 md:text-sm">
                Structured Academic Support
              </p>
            </div>

            <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <p className="font-poppins text-xs text-white/85 md:text-sm">
                Focused Exam Preparation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/35 to-transparent" />
    </section>
  )
}
