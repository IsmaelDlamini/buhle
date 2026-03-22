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
  className="relative bg-fixed bg-center bg-cover"
  style={{ backgroundImage: `url(${aboutustile9})` }}
>
  {/* BLUE OVERLAY */}
  <div className="absolute inset-0 bg-[#0f3d5c]/70"></div>

  {/* CONTENT */}
  <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center text-white">
    <AnimatedSection>
      <p className="font-poppins uppercase tracking-[0.3em] text-xs md:text-sm text-white/80 mb-4">
        Welcome to Buhle Learning Center
      </p>

      <h1 className="raleway-black text-4xl sm:text-5xl md:text-6xl tracking-wide leading-tight">
        ABOUT US
      </h1>

      <p className="mt-6 font-poppins text-sm sm:text-base md:text-lg leading-7 md:leading-8 max-w-3xl mx-auto text-white/90">
        At Buhle Learning Center, we aim to create a supportive and
        disciplined learning environment where learners can grow
        academically, rebuild confidence, and work toward a stronger
        future.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/contact"
          className="rounded-full bg-white text-secondary px-7 py-3 font-poppins text-sm md:text-base hover:bg-secondary hover:text-white duration-300 shadow-md"
        >
          Get Started
        </Link>

        <a
          href="#mission"
          className="rounded-full border border-white/40 px-7 py-3 font-poppins text-sm md:text-base hover:bg-white hover:text-secondary duration-300"
        >
          Learn More
        </a>
      </div>
    </AnimatedSection>
  </div>
</section>

        {/* INTRO + SLIDER + GALLERY */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8">
                  <p className="font-poppins text-base md:text-lg leading-8 text-secondary/90">
                    We combine structured teaching with genuine care so every
                    learner feels seen, supported, and encouraged to succeed.
                    Our goal is not only to help students improve marks, but
                    also to build confidence, discipline, and a stronger mindset
                    for long-term growth.
                  </p>
                </div>

                <div
                  className="relative bg-white border border-slate-200 rounded-3xl shadow-sm p-6 md:p-8 min-h-[250px] md:min-h-[280px] overflow-hidden"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#9DCAEB]/20 rounded-full blur-2xl" />

                  {reasons.map((reason, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-center transition-all duration-700 ${
                        index === currentReasonIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <div className="flex items-start gap-5 md:gap-6">
                        <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-md">
                          <span className="raleway-black text-2xl md:text-3xl tracking-wider">
                            {index < 9 ? "0" : ""}
                            {index + 1}
                          </span>
                        </div>

                        <div className="pt-1">
                          <h2 className="text-lg md:text-xl font-semibold font-poppins">
                            {reason.title}
                          </h2>
                          <p className="text-sm md:text-base text-secondary/80 font-poppins mt-3 leading-6 md:leading-7 max-w-md">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <ul className="flex items-center justify-center gap-2 mt-8">
                {reasons.map((_, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setCurrentReasonIndex(index);
                      startAutoSlide();
                    }}
                    className={`h-2 rounded-full cursor-pointer duration-300 ${
                      index === currentReasonIndex
                        ? "w-10 bg-secondary"
                        : "w-6 bg-secondary/20 hover:bg-secondary/40"
                    }`}
                    role="button"
                    tabIndex="0"
                  />
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
  {galleryData.map((item) => (
    <div
      key={item.id}
      className="relative rounded-2xl overflow-hidden shadow-md group"
    >
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-[260px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4 text-white">
        <p className="font-poppins text-[10px] uppercase tracking-[0.25em] text-white/80 mb-1">
          {item.tag}
        </p>

        <h3 className="font-semibold text-sm md:text-base">
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
          className="bg-white py-16 md:py-24 px-5 md:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbfd] via-white to-[#eef6fb]" />
          <div className="relative max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <p className="font-poppins uppercase tracking-[0.3em] text-xs md:text-sm text-secondary/70 mb-4">
                Our Purpose
              </p>
              <h1 className="text-secondary raleway-black text-4xl md:text-6xl tracking-wider">
                OUR MISSION
              </h1>
            </AnimatedSection>

            <AnimatedSection>
              <div className="mt-8 md:mt-12 bg-secondary text-white rounded-[2rem] px-7 py-10 md:px-14 md:py-14 shadow-xl relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-white/10" />

                <p className="relative font-poppins text-sm md:text-lg leading-7 md:leading-9 max-w-3xl mx-auto">
                  Our mission is to provide supportive, disciplined learning
                  environments for learners who need academic guidance, renewed
                  confidence, and a clear path toward better results. Through
                  structured teaching, encouragement, and personal attention, we
                  aim to help every learner unlock their potential.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <p className="font-poppins uppercase tracking-[0.3em] text-xs md:text-sm text-secondary/70 mb-4">
                  The People Behind the Vision
                </p>
                <h1 className="text-secondary raleway-black text-4xl md:text-6xl tracking-wider">
                  MEET OUR TEAM
                </h1>
                <p className="mt-5 font-poppins text-sm md:text-lg leading-7 text-secondary/85">
                  At Buhle Learning Center, we are committed to creating a
                  learning space where students feel supported, challenged, and
                  encouraged to reach their goals.
                </p>
              </div>
            </AnimatedSection>


<div className="grid md:grid-cols-3 gap-8 mt-12 md:mt-16">
  {tutors.map((tutor, index) => (
    <AnimatedSection key={index}>
      <div className="group bg-white rounded-[28px] p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] duration-500">
        <div className="relative overflow-hidden rounded-[22px]">
          <img
            src={tutor.image}
            alt={tutor.name}
            className="w-full h-[340px] object-cover group-hover:scale-[1.04] duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </div>

        <div className="pt-6 pb-2 text-center">
          <div className="w-12 h-[3px] bg-secondary/80 mx-auto rounded-full mb-4 group-hover:w-16 duration-300"></div>

          <h3 className="font-poppins font-semibold text-xl text-secondary tracking-tight">
            {tutor.name}
          </h3>

          <p className="font-poppins text-sm text-secondary/65 mt-2 tracking-wide">
            {tutor.role}
          </p>

          <p className="font-poppins text-sm leading-6 text-slate-500 mt-4 px-2">
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
        <section className="bg-white py-16 md:py-24 px-5 md:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-8 md:mb-12">
                <p className="font-poppins uppercase tracking-[0.3em] text-xs md:text-sm text-secondary/70 mb-4">
                  Visit Us
                </p>
                <h1 className="text-secondary raleway-black text-4xl md:text-6xl tracking-wider">
                  <a
                    href={directionLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-80 duration-300"
                  >
                    GET DIRECTION
                  </a>
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="rounded-[2rem] overflow-hidden shadow-lg border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233507.58717233775!2d18.3186299!3d-33.9142682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c0f6b4f8b47%3A0x1234567890abcdef!2sCape%20Town!5e0!3m2!1sen!2sza!4v1741689448996!5m2!1sen!2sza"
                  className="w-full h-[420px] md:h-[520px]"
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