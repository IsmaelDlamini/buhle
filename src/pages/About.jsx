import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import whoImg from "../assets/hero-2.jpg";
import team1 from "../assets/hero-2.jpg";
import team2 from "../assets/hero-2.jpg";
import team3 from "../assets/hero-2.jpg";
import aboutustile9 from "../assets/about-us-tile-9.jpg";
import aboutustile1 from "../assets/about-us-tile-1.jpg";
import aboutustile3 from "../assets/about-us-tile-3.jpg";
import aboutustile5 from "../assets/about-us-tile-5.jpg";
import tutor1 from "../assets/tutor-1.jpg";
import tutor2 from "../assets/tutor-2.jpg";
import tutor3 from "../assets/tutor-3.jpg";

export default function About() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const reasons = [
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
    {
      title: "Supportive Learning Environment",
      description:
        "We aim to create a space where learners feel encouraged, respected, and motivated to keep improving every step of the way.",
    },
  ];

  const tutors = [
    {
      name: "Your Tutor Name",
      role: "Academic Support Tutor",
      image: tutor1,
    },
    {
      name: "Your Tutor Name",
      role: "Subject Specialist",
      image: tutor2,
    },
    {
      name: "Your Tutor Name",
      role: "Learner Support Tutor",
      image: tutor3,
    },
  ];

  const galleryData = [
  {
    id: 1,
    image: aboutustile1,
    alt: "Learners in class",
    tag: "Buhle Learning Center",
    title: "A Space for Growth and Learning",
  },
  {
    id: 2,
    image: aboutustile3,
    alt: "Students receiving academic support",
    tag: "Support & Guidance",
    title: "Focused Learning Support",
  },
  {
    id: 3,
    image: aboutustile5,
    alt: "Students studying together",
    tag: "Collaborative Learning",
    title: "Building Confidence Together",
  },
];

  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current && containerRef.current.children.length > 1) {
      const middleElement = containerRef.current.children[1];
      containerRef.current.scrollLeft =
        middleElement.offsetLeft -
        containerRef.current.offsetWidth / 2 +
        middleElement.offsetWidth / 2;
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentReasonIndex((prevIndex) =>
        prevIndex === reasons.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    setSwipeDistance(startX - currentX);
  };

  const handleTouchEnd = () => {
    if (swipeDistance > 50) {
      setCurrentReasonIndex((prevIndex) =>
        prevIndex === reasons.length - 1 ? 0 : prevIndex + 1
      );
    } else if (swipeDistance < -50) {
      setCurrentReasonIndex((prevIndex) =>
        prevIndex === 0 ? reasons.length - 1 : prevIndex - 1
      );
    }

    setSwipeDistance(0);
    setIsSwiping(false);
    startAutoSlide();
  };

  const directionLink = "https://maps.google.com";

  return (
    <div className="bg-grey text-secondary">
      <main>
      {/* HERO */}
<section
  className="relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${aboutustile9})` }}
>
  <div className="absolute inset-0 bg-[#0f3d5c]/75" />

  {/* content */}
  <div className="relative mx-auto max-w-3xl px-5 pt-24 pb-14 text-center text-white md:pt-28 md:pb-16">
    <AnimatedSection>
      <p className="font-poppins text-[11px] uppercase tracking-[0.25em] text-white/70">
        About Us
      </p>

      <h1 className="mt-3 font-zuume text-3xl leading-tight md:text-4xl">
        Building Confidence. Improving Results.
      </h1>
    </AnimatedSection>
  </div>
</section>

        {/* INTRO + SLIDER + GALLERY */}
  <section className="py-10 md:py-14">
  <div className="mx-auto max-w-6xl px-5 md:px-8">
    <AnimatedSection>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-zuume text-3xl text-secondary md:text-4xl">
          A Learning Space Built On Support
        </h2>

        <p className="mt-4 font-poppins text-sm leading-7 text-secondary/85 md:text-base">
          We combine structured teaching with genuine care so every learner
          feels seen, supported, and encouraged to succeed.
        </p>
      </div>
    </AnimatedSection>



  <AnimatedSection>
  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {reasons.slice(0, 4).map((reason, index) => (
      <div
        key={index}
        className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
      >
        <span className="font-zuume text-3xl leading-none text-secondary/20">
          {index < 9 ? "0" : ""}
          {index + 1}
        </span>

        <h3 className="mt-3 font-poppins text-sm font-semibold text-secondary md:text-base">
          {reason.title}
        </h3>

        <p className="mt-2 font-poppins text-sm leading-6 text-secondary/75">
          {reason.description}
        </p>
      </div>
    ))}
  </div>
</AnimatedSection>



    <AnimatedSection>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-[20px] shadow-sm"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="mb-1 font-poppins text-[10px] uppercase tracking-[0.22em] text-white/75">
                {item.tag}
              </p>

              <h3 className="font-poppins text-sm font-medium md:text-base">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </div>
</section>

        {/* MISSION */}
         <section
          id="mission"
          className="relative overflow-hidden bg-white px-5 py-16 md:px-8 md:py-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbfd] via-white to-[#eef6fb]" />

          <div className="relative mx-auto max-w-5xl text-center">
            <AnimatedSection>
              <p className="mb-4 font-poppins text-xs uppercase tracking-[0.3em] text-secondary/70 md:text-sm">
                Our Purpose
              </p>

              <h2 className="font-zuume text-4xl text-secondary md:text-6xl">
                Our Mission
              </h2>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative mt-8 overflow-hidden rounded-[32px] bg-secondary px-7 py-10 text-white shadow-[0_20px_60px_rgba(15,14,53,0.14)] md:mt-12 md:px-14 md:py-14">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-white/10" />

                <p className="relative mx-auto max-w-3xl font-poppins text-sm leading-7 text-white/90 md:text-lg md:leading-9">
                  Our mission is to provide a supportive and disciplined
                  learning environment for learners who need academic guidance,
                  renewed confidence, and a clear path toward better results.
                  Through structured teaching, encouragement, and personal
                  attention, we help every learner unlock their potential.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* TEAM */}
               <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4 font-poppins text-xs uppercase tracking-[0.3em] text-secondary/70 md:text-sm">
                  The People Behind The Vision
                </p>

                <h2 className="font-zuume text-4xl text-secondary md:text-6xl">
                  Meet Our Team
                </h2>

                <p className="mt-5 font-poppins text-sm leading-7 text-secondary/85 md:text-lg">
                  At Buhle Learning Center, we are committed to creating a
                  learning space where students feel supported, challenged, and
                  encouraged to reach their goals.
                </p>
              </div>
            </AnimatedSection>

            <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3">
              {tutors.map((tutor, index) => (
                <AnimatedSection key={index}>
                  <div className="group rounded-[28px] border border-slate-100 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:p-5">
                    <div className="relative overflow-hidden rounded-[22px]">
                      <img
                        src={tutor.image}
                        alt={tutor.name}
                        className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                    </div>

                    <div className="pb-2 pt-6 text-center">
                      <div className="mx-auto mb-4 h-[3px] w-12 rounded-full bg-secondary/80 transition duration-300 group-hover:w-16" />

                      <h3 className="font-poppins text-xl font-semibold tracking-tight text-secondary">
                        {tutor.name}
                      </h3>

                      <p className="mt-2 font-poppins text-sm tracking-wide text-secondary/65">
                        {tutor.role}
                      </p>

                      <p className="mt-4 px-2 font-poppins text-sm leading-6 text-slate-500">
                        Dedicated to supporting learners with focused guidance,
                        encouragement, and a commitment to academic growth.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
   <section className="px-5 md:px-8 pb-12 md:pb-16">
  <AnimatedSection>
    <div className="max-w-3xl mx-auto relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0b2c3d] via-[#0f3d5c] to-[#184f73] px-5 py-10 md:px-10 md:py-12 text-center shadow-[0_12px_40px_rgba(11,44,61,0.25)]">
      
      {/* soft accents (reduced) */}
      <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-14 -right-6 w-36 h-36 rounded-full bg-[#9DCAEB]/20 blur-2xl" />

      {/* subtle border */}
      <div className="absolute inset-0 rounded-[26px] border border-white/10 pointer-events-none" />

      <div className="relative z-10">
        <p className="font-poppins text-[10px] uppercase tracking-[0.3em] text-white/60 mb-3">
          Start the Journey
        </p>

        <h2 className="raleway-black text-2xl md:text-3xl tracking-wide text-white leading-tight">
          Let’s Build Confidence Together
        </h2>

        <p className="mt-4 font-poppins text-xs md:text-sm leading-6 text-white/80 max-w-xl mx-auto">
          Join a learning environment that values discipline, encouragement,
          and academic progress.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white text-secondary px-6 py-2.5 text-sm font-poppins font-medium hover:bg-[#9DCAEB] duration-300 shadow-md"
          >
            GET STARTED
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-2.5 text-sm font-poppins font-medium hover:bg-white/10 duration-300"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  </AnimatedSection>
</section>

        {/* MAP */}
     <section className="bg-white px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mb-8 text-center md:mb-12">
                <p className="mb-4 font-poppins text-xs uppercase tracking-[0.3em] text-secondary/70 md:text-sm">
                  Visit Us
                </p>

                <h2 className="font-zuume text-4xl text-secondary md:text-6xl">
                  Find Us
                </h2>

                <p className="mx-auto mt-4 max-w-2xl font-poppins text-sm leading-7 text-slate-600 md:text-base">
                  Visit our learning centre and get directions to our location.
                </p>

                <a
                  href={directionLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-secondary px-6 py-2.5 font-poppins text-sm font-medium text-white transition hover:opacity-90"
                >
                  Get Directions
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="overflow-hidden rounded-[30px] border border-slate-200 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
                <iframe
                  src="https://maps.google.com/maps?q=Kamhlushwa&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="h-[420px] w-full md:h-[520px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
}