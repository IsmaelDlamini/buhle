import React from 'react'
import Hero from '../components/Hero'
import AnimatedSection from '../components/AnimatedSection'
import SubjectCard from '../components/SubjectCard'
import InstructorCard from '../components/InstructorCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { Link } from 'react-router-dom'
import whoImg from '../assets/hero-2.jpg'
import { useState, useEffect, useRef } from 'react'
import cert_image from "../assets/cert-image.jpg";
import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import hero4 from '../assets/hero-4.jpg'
import hero5 from '../assets/hero-5.jpg'
import activities from '../assets/activities.jpg'
import notice from '../assets/notice.jpg'
import bgImage2 from '../assets/bgImage2.jpg'

export default function Home(){

const [studentStories] = useState([
  {
    image: cert_image,
    name: "Student 1",
    text: "Good Afternoon ma'am. Thank you so much for helping me achieve my goal. I was able to move from 40% to 51% in Mathematics in a very short period. I did not think I was going to make it because Maths is not really my strong suit, but you made it easy for me to understand the topics and that helped me during practice and in the exam. You sharpened my mind and gave me confidence. No words can truly express my gratitude.",
  },
  {
    image: cert_image,
    name: "Student 2",
    text: "Nkomazi Finishing School helped me become more confident in Mathematics. The lessons were clear, supportive, and focused on helping me improve step by step.",
  },
  {
    image: cert_image,
    name: "Student 3",
    text: "The extra support and guidance made a real difference in my studies. I became more disciplined and started seeing better results.",
  },
]);

const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  
  const faqs = [
    {
      question: "How do your students generally perform at Nkomazi Finishing School?",
      answer:
        "Our students who commit themselves not only in the extra lessons but also with the homework given generally perform well. For your child to perform well at Nkomazi Finishing School, they have to commit to coming to the lessons and practicing at home with the resources given. ",
    },
    {
      question: "What age groups or grades does Nkomazi Finishing School cater for?",
      answer:
        "We cater for students in matric with math and physics holiday lessons.",
    },
    {
      question: "Does Nkomazi Finishing School conduct 1-on-1 lessons?",
      answer:
        "We generally work in groups but upon identifying kids who struggle to keep up with the group, we offer additional 1-on-1 sessions for maths on weekends or early hours before school.",
    },

    {
      question: "How soon will I see improvement in my child’s marks?",
      answer:
        "The improvement of learners largely depends on the skill level of the child put together with how many hours they devote to the extra classes as well as additional practicing. Some improve after 1 term, whilst some may take longer.",
    },

    {
      question:
        "What makes Nkomazi Finishing School different from other tutoring services?",
      answer:
        "We go above and beyond by working overtime for our students. at no extra costs. This means that we let our students call should they need additional explaining or assistance with their work. We are passionate about knowing our scholars on a personal level in order to better understand how they can be helped. We spend time teaching our students to be disciplined  not only when dealing with Math but also when dealing with life and growth.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [navBarOpen, setNavBarOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(
    sessionStorage.getItem("loadedNkomazi Finishing School") == null ? true : false
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("loadedNkomazi Finishing School", "loaded");
    }, 6000);
  }, []);



  function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const startValue = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const currentValue = Math.floor(progress * (end - startValue) + startValue);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


 const stats = [
    {
      value: 500,
      suffix: "+",
      label: "Students Supported",
    },
    {
      value: 90,
      suffix: "%",
      label: "Pass Rate",
    },
    {
      value: 12,
      prefix: "Grade ",
      label: "Academic Support",
      noCountSuffix: "",
    },
    {
      value: 10,
      suffix: "+",
      label: "Years Experience",
    },
  ];


  return (
    <div>
      {/* Hero wrapper: overflow-hidden so the right-side image is clipped; Hero content stays above */}
      <div className="relative overflow-hidden">
        {/* right-side image: full hero height, positioned above background but below hero content */}
        <div
          className="absolute top-0 right-0 h-full w-1/2 max-w-[560px] pointer-events-none overflow-hidden animate-none"
          style={{ zIndex: 9, animation: 'none' }}
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80"
            alt=""
            loading="lazy"
            draggable="false"
            className="w-full h-full object-cover"
            style={{ animation: 'none' }}
          />
        </div>

        <div className="relative z-10">
          <Hero />
        </div>
      </div>


<section className="relative -mt-10 md:-mt-14 z-20 px-4">
  <div className="container mx-auto">
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              group relative p-5 md:p-6 text-center transition-all duration-300
              hover:bg-slate-50 hover:-translate-y-1
              ${index < stats.length - 1 ? "border-b lg:border-b-0" : ""}
              ${index % 2 === 0 ? "border-r border-slate-100 lg:border-r" : ""}
              ${index < 2 ? "lg:border-b-0" : ""}
              ${index !== stats.length - 1 ? "border-slate-100" : ""}
            `}
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="font-raleway text-[1.9rem] leading-none tracking-tight text-secondary md:text-[2.2rem]">
              {stat.prefix ? stat.prefix : ""}
              <CountUp
                end={stat.value}
                suffix={stat.suffix || stat.noCountSuffix || ""}
              />
            </div>

            <p className="mt-3 font-poppins text-sm text-slate-600 md:text-[15px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

<section className="relative overflow-hidden bg-white py-20 md:py-28">
  <div className="absolute left-[-80px] top-[60px] h-56 w-56 rounded-full bg-secondary/5 blur-3xl" />
  <div className="absolute right-[-80px] bottom-[40px] h-64 w-64 rounded-full bg-[#9DCAEB]/20 blur-3xl" />

  <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
    <AnimatedSection>
      <div className="max-w-xl">
        <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-secondary/70">
          About Us
        </p>

        <h2 className="mt-3 font-zuume text-[2.8rem] leading-[0.95] text-secondary md:text-[4.5rem]">
          Building Confidence.
          <br />
          Improving Results.
        </h2>

        <p className="mt-6 max-w-lg font-poppins text-sm leading-7 text-slate-600 md:text-base md:leading-8">
          At Buhle Learning Center, our mission is to create a supportive and
          disciplined learning environment where learners can grow academically,
          rebuild confidence, and work toward a stronger future. We combine
          structured teaching with genuine care so every learner feels seen,
          supported, and encouraged to succeed.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/registration"
            className="inline-flex items-center justify-center rounded-xl bg-secondary px-6 py-3 font-poppins text-sm font-medium text-white transition hover:opacity-90"
          >
            Apply Now
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-poppins text-sm font-medium text-secondary transition hover:border-secondary hover:bg-secondary hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </AnimatedSection>

    <AnimatedSection>
      <div className="relative mx-auto w-full max-w-[560px]">
        <div className="absolute -left-4 -top-4 h-full w-full rounded-[28px] border border-slate-200 bg-slate-50" />

        <img
          src={whoImg}
          alt="Learners in class"
          className="relative z-10 h-[420px] w-full rounded-[28px] object-cover shadow-[0_20px_60px_rgba(15,14,53,0.10)]"
        />

        <div className="absolute inset-0 z-20 rounded-[28px] bg-gradient-to-t from-black/15 to-transparent" />

        <div className="absolute bottom-5 left-5 z-30 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm">
          <p className="font-zuume text-2xl leading-none text-secondary">Supportive Learning</p>
          <p className="mt-1 font-poppins text-xs text-slate-600">
            Focused guidance in a disciplined environment
          </p>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>



<section className="bg-grey py-20 md:py-24">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <AnimatedSection>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-poppins text-sm uppercase tracking-[0.2em] text-secondary/70">
          Our Educational Services
        </p>

        <h2 className="mt-3 font-zuume text-4xl text-secondary md:text-5xl">
          What We Offer
        </h2>

        <p className="mt-4 font-poppins text-sm leading-relaxed text-slate-600 md:text-base">
          Explore our academic programmes, student activities, and school
          updates designed to support growth, discipline, and well-rounded
          development.
        </p>
      </div>
    </AnimatedSection>

    {/* Layout */}
    <div className="mt-14 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
      {/* LEFT */}
      <AnimatedSection>
        <div className="grid gap-5">
          {[
            {
              number: "01",
              title: "Academic Programmes",
              image: hero2,
              button: "Explore Programmes",
              href: "/academic-programs",
            },
            {
              number: "02",
              title: "Sports And Extracurricular Activities",
              image: activities,
              button: "View Activities",
              href: "/sports-and-extracurricular",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative h-[300px] overflow-hidden rounded-[22px] bg-black shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.16)] md:h-[320px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                <span className="absolute left-6 top-5 font-raleway text-5xl font-bold leading-none text-white/40 transition-all duration-500 group-hover:text-white/20 md:text-6xl">
                  {card.number}
                </span>

                <h3 className="max-w-[260px] font-zuume text-3xl leading-tight text-white md:text-[2.1rem]">
                  {card.title}
                </h3>

                <a
                  href={card.href}
                  className="mt-5 inline-flex w-fit items-center rounded-full border border-white/20 bg-white px-5 py-2.5 font-poppins text-sm font-medium text-secondary shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-secondary hover:text-white"
                >
                  {card.button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* RIGHT */}
      <AnimatedSection>
        <div className="relative h-[625px] overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)] md:h-[645px]">
          {/* Top content */}
          <div className="relative z-20 flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-5 md:px-6">
            <div>
              <div className="inline-flex items-center rounded-full bg-secondary px-4 py-2 shadow-sm">
                <span className="font-poppins text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  Notice Board
                </span>
              </div>

              <h3 className="mt-4 font-zuume text-3xl leading-tight text-secondary md:text-[2.4rem]">
                Latest Notices
                <br />
                & Updates
              </h3>

              <p className="mt-3 max-w-md font-poppins text-sm leading-relaxed text-slate-600 md:text-[15px]">
                Stay informed with the latest school announcements, important
                dates, and official updates for students and parents.
              </p>
            </div>

            <div className="shrink-0 rounded-full bg-red-500 px-3 py-1 shadow-sm">
              <span className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-white">
                New
              </span>
            </div>
          </div>

          {/* Poster / image */}
          <div className="relative z-10 px-5 pb-24 pt-5 md:px-6">
            <div className="h-[420px] overflow-hidden rounded-[18px] bg-slate-100 ring-1 ring-slate-200 md:h-[440px]">
              <img
                src={notice}
                alt="School notice board poster"
                className="h-full w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Bottom action */}
          <div className="absolute bottom-5 left-5 z-20 md:left-6">
            <a
              href="/notices"
              className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 font-poppins text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-secondary/90"
            >
              View All Notices
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>

<section className="bg-white py-20 md:py-24">
  <div className="container mx-auto px-4">
    <AnimatedSection>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-secondary/70">
          Success Stories
        </p>

        <h2 className="mt-3 font-zuume text-4xl text-secondary md:text-6xl">
          Our Student Stories
        </h2>

        <p className="mt-4 font-poppins text-sm leading-relaxed text-slate-600 md:text-base">
          Real experiences from learners who have grown in confidence, improved
          their understanding, and achieved better academic results with
          Nkomazi Finishing School.
        </p>
      </div>
    </AnimatedSection>

    <div className="mx-auto mt-14 max-w-6xl">
      <AnimatedSection>
        <div className="grid items-stretch gap-6 overflow-hidden rounded-[30px] border border-slate-200 bg-slate-50 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:grid-cols-[0.95fr_1.05fr] md:p-6">
          {/* Image side */}
          <div className="relative overflow-hidden rounded-[24px] bg-white">
            <img
              src={studentStories[currentStoryIndex].image}
              alt={studentStories[currentStoryIndex].name}
              className="h-[320px] w-full object-cover md:h-full md:min-h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 shadow-md backdrop-blur-sm">
              <span className="font-poppins text-xs font-medium text-secondary">
                Student Journey
              </span>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-between rounded-[24px] bg-white p-6 shadow-sm md:p-10">
            <div>
              <span className="inline-flex rounded-full bg-secondary/8 px-4 py-1.5 font-poppins text-xs font-medium text-secondary">
                Student Testimonial
              </span>

              <div className="mt-6">
                <span className="font-zuume text-6xl leading-none text-secondary/15">
                  “
                </span>

                <p className="-mt-3 font-poppins text-[15px] leading-8 text-slate-600 md:text-[17px]">
                  {studentStories[currentStoryIndex].text}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="font-poppins text-lg font-semibold text-secondary">
                {studentStories[currentStoryIndex].name}
              </h3>
              <p className="mt-1 font-poppins text-sm text-slate-500">
                Nkomazi Finishing School Student
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {studentStories.map((story, index) => {
            const isActive = index === currentStoryIndex

            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentStoryIndex(index)}
                className={`rounded-full px-4 py-2 font-poppins text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-secondary text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-secondary/30 hover:text-secondary'
                }`}
                aria-label={`Show story from ${story.name}`}
              >
                {story.name}
              </button>
            )
          })}
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>






<section className="relative overflow-hidden bg-secondary py-20 text-white md:py-24">
  {/* background accents */}
  <div className="absolute left-[-60px] top-[-40px] h-48 w-48 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute right-[-80px] bottom-[-50px] h-64 w-64 rounded-full bg-white/10 blur-3xl" />

  <div className="container relative z-10 mx-auto px-4">
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 font-poppins text-[11px] uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm md:text-xs">
        Admissions Open
      </span>

      <h2 className="mt-5 font-zuume text-[2.8rem] leading-[0.95] text-white md:text-[4.5rem]">
        Ready to Help Your
        <br />
        Child Succeed?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl font-poppins text-sm leading-7 text-white/80 md:text-base md:leading-8">
        Join Nkomazi Finishing School Academy today and give your child the
        academic support, structure, and encouragement they deserve.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          to="/registration"
          className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 font-poppins text-sm font-medium text-secondary shadow-lg transition duration-300 hover:scale-[1.02] hover:opacity-95 md:text-base"
        >
          Apply Now
        </Link>
      </div>

      <p className="mt-4 font-poppins text-xs text-white/65 md:text-sm">
        Start your admission enquiry and learn more about our academic support programmes.
      </p>
    </div>
  </div>
</section>




<section
  className="relative py-24 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url(${bgImage2})` }}
>
  {/* Blue overlay */}
  <div className="absolute inset-0 bg-[#0d3b66]/70" />

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4">
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-white/80">
        Why Choose Us
      </p>

      <h2 className="mt-3 font-zuume text-4xl text-white md:text-5xl">
        What Sets Us Apart
      </h2>

      <p className="mt-4 font-poppins text-sm text-white/85 md:text-base">
        We create a focused learning environment that helps learners grow in
        confidence, improve their understanding, and achieve better results.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="border border-white/15 bg-white/95 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="mb-6 flex h-12 w-12 items-center justify-center bg-secondary/10 text-secondary">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <h3 className="mb-3 font-poppins text-lg font-bold text-secondary">
          Personal Attention
        </h3>

        <p className="font-poppins text-sm leading-relaxed text-slate-600">
          Every learner receives focused support and guidance based on their
          individual academic needs.
        </p>
      </div>

      <div className="border border-white/15 bg-white/95 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="mb-6 flex h-12 w-12 items-center justify-center bg-secondary/10 text-secondary">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>

        <h3 className="mb-3 font-poppins.v text-lg font-bold text-secondary">
          Exam Results
        </h3>

        <p className="font-poppins text-sm leading-relaxed text-slate-600">
          Our learners build stronger understanding, improve their marks, and
          approach exams with greater confidence.
        </p>
      </div>

      <div className="border border-white/15 bg-white/95 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="mb-6 flex h-12 w-12 items-center justify-center bg-secondary/10 text-secondary">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
            />
          </svg>
        </div>

        <h3 className="mb-3 font-poppins text-lg font-bold text-secondary">
          Dedicated Mentorship
        </h3>

        <p className="font-poppins text-sm leading-relaxed text-slate-600">
          We support learners beyond academics by encouraging discipline,
          consistency, and long-term growth.
        </p>
      </div>
    </div>
  </div>
</section>


    

 <section className="relative overflow-hidden bg-secondary py-20 md:py-24">
  {/* background accents */}
  <div className="absolute left-[-70px] top-[30px] h-52 w-52 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute right-[-80px] bottom-[20px] h-64 w-64 rounded-full bg-white/10 blur-3xl" />

  <div className="container relative z-10 mx-auto px-4">
    <AnimatedSection>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-white/70">
          Need Help?
        </p>

        <h2 className="mt-3 font-zuume text-4xl text-white md:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 font-poppins text-sm leading-relaxed text-white/75 md:text-base">
          Everything you may want to know about our lessons, support, and how
          learners grow with Nkomazi Finishing School Academy.
        </p>
      </div>
    </AnimatedSection>

    <div className="mx-auto mt-12 max-w-4xl space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index

        return (
          <AnimatedSection key={index}>
            <div className="overflow-hidden rounded-[22px] border border-white/12 bg-white/6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-sm transition duration-300 hover:bg-white/10">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                aria-expanded={isOpen}
              >
                <span className="pr-4 font-poppins text-sm font-semibold text-white md:text-base">
                  {faq.question}
                </span>

                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg leading-none text-white transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-5 pb-5 pt-4 md:px-6 md:pb-6">
                    <p className="font-poppins text-sm leading-7 text-white/75 md:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )
      })}
    </div>
  </div>
</section>

    </div>
  )
}
