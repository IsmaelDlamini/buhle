import React from 'react'
import Hero from '../components/Hero'
import AnimatedSection from '../components/AnimatedSection'
import SubjectCard from '../components/SubjectCard'
import InstructorCard from '../components/InstructorCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { Link } from 'react-router-dom'
import whoImg from '../assets/hero-2.jpg'
import { useState, useEffect } from 'react'
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
    name: "Rethabile Bohlale",
    text: "Good Afternoon ma'am. Thank you so much for helping me achieve my goal. I was able to move from 40% to 51% in Mathematics in a very short period. I did not think I was going to make it because Maths is not really my strong suit, but you made it easy for me to understand the topics and that helped me during practice and in the exam. You sharpened my mind and gave me confidence. No words can truly express my gratitude.",
  },
  {
    image: cert_image,
    name: "John Doe",
    text: "Nkomazi Finishing School helped me become more confident in Mathematics. The lessons were clear, supportive, and focused on helping me improve step by step.",
  },
  {
    image: cert_image,
    name: "Jane Doe",
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



      <section className="relative -mt-16 z-20 px-4">
  <div className="container mx-auto">
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 overflow-hidden">

      <div className="p-6 text-center border-b md:border-b-0 md:border-r border-slate-100">
        <div className="text-3xl md:text-4xl font-bold text-secondary font-zuume">
          500+
        </div>
        <p className="text-sm text-slate-600 font-poppins mt-1">
          Students Supported
        </p>
      </div>

      <div className="p-6 text-center border-b md:border-b-0 md:border-r border-slate-100">
        <div className="text-3xl md:text-4xl font-bold text-secondary font-zuume">
          90%
        </div>
        <p className="text-sm text-slate-600 font-poppins mt-1">
          Pass Rate
        </p>
      </div>

      <div className="p-6 text-center md:border-r border-slate-100">
        <div className="text-3xl md:text-4xl font-bold text-secondary font-zuume">
          Grade 12
        </div>
        <p className="text-sm text-slate-600 font-poppins mt-1">
          Academic Support
        </p>
      </div>

      <div className="p-6 text-center">
        <div className="text-3xl md:text-4xl font-bold text-secondary font-zuume">
          10+
        </div>
        <p className="text-sm text-slate-600 font-poppins mt-1">
          Years Experience
        </p>
      </div>

    </div>
  </div>
</section>


 <section className="relative overflow-hidden bg-white py-20 md:py-28">
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




<section className="py-24 bg-grey">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">
      <p className="font-poppins text-sm uppercase tracking-[0.2em] text-secondary/70">
        Our Educational Services
      </p>

      <h2 className="mt-3 font-zuume text-4xl md:text-5xl text-secondary">
        What We Offer
      </h2>

      <p className="mt-4 text-slate-600 font-poppins text-sm md:text-base leading-relaxed">
        Discover our range of educational services designed to foster learning,
        spirituality, and personal growth.
      </p>
    </div>

    {/* Layout */}
    <div className="mt-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      {/* LEFT (smaller) */}
      <div className="grid gap-5">
        {[
          {
            number: "01",
            title: "Academic Programs",
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
            className="group relative h-[320px] overflow-hidden rounded-[20px] bg-black shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl"
          >
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
              <span className="stroke-white-40 group-hover:stroke-white-70 absolute left-6 top-6 text-5xl font-bold text-transparent transition-all duration-500 md:text-6xl">
                {card.number}
              </span>

              <h3 className="max-w-[220px] font-zuume text-3xl leading-tight text-white">
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

      {/* RIGHT (Notice Board) */}
      <div className="relative h-[660px] overflow-hidden rounded-[20px] border border-border bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl">
        {/* Notice board banner */}
        <div className="absolute left-5 top-5 z-20 inline-flex items-center rounded-full bg-secondary px-4 py-2 shadow-lg">
          <span className="font-poppins text-xs font-semibold uppercase tracking-[0.18em] text-white">
            Notice Board
          </span>
        </div>

        {/* Optional pinned badge */}
        <div className="absolute right-5 top-5 z-20 rounded-full bg-red-500 px-3 py-1 shadow-md">
          <span className="font-poppins text-[10px] font-semibold uppercase tracking-wider text-white">
            New
          </span>
        </div>

        {/* Poster / notice image */}
        <div className="relative flex h-full items-center justify-center bg-slate-100 p-5 md:p-6">
          <img
            src={notice}
            alt="School Notice Board Poster"
            className="h-full w-full rounded-[14px] object-contain transition-all duration-700 ease-out hover:scale-[1.01]"
          />
        </div>

        {/* Bottom action area */}
        <div className="absolute bottom-5 left-5 z-20">
          <a
            href="/notices"
            className="inline-flex items-center rounded-full bg-secondary px-5 py-2.5 font-poppins text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:bg-secondary/90"
          >
            View All Notices
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="bg-white py-24">
  <div className="container mx-auto px-4">
    <AnimatedSection>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-secondary/70">
          Success Stories
        </p>
        <h2 className="mt-3 font-zuume text-5xl md:text-6xl text-secondary">
          Our Student Stories
        </h2>
        <p className="mt-4 font-poppins text-sm md:text-base text-slate-600">
          Real experiences from learners who have grown in confidence, improved
          their understanding, and achieved better academic results with Nkomazi Finishing School.
        </p>
      </div>
    </AnimatedSection>

    <div className="mx-auto mt-14 max-w-6xl">
      <AnimatedSection>
        <div className="grid items-stretch gap-8 overflow-hidden rounded-[28px] border border-border bg-grey/40 p-4 md:grid-cols-[0.95fr_1.05fr] md:p-6">
          <div className="overflow-hidden rounded-2xl bg-white">
            <img
              src={studentStories[currentStoryIndex].image}
              alt={studentStories[currentStoryIndex].name}
              className="h-[320px] w-full object-cover md:h-full md:min-h-[500px]"
            />
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-white p-6 md:p-10 shadow-sm">
            <div>
              <span className="inline-flex rounded-full bg-secondary/8 px-4 py-1.5 font-poppins text-xs font-medium text-secondary">
                Student Testimonial
              </span>

              <p className="mt-6 font-poppins text-sm leading-7 text-slate-600 md:text-[15px] md:leading-8">
                “{studentStories[currentStoryIndex].text}”
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
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
            const isActive = index === currentStoryIndex;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentStoryIndex(index)}
                className={`rounded-full px-4 py-2 font-poppins text-sm transition ${
                  isActive
                    ? "bg-secondary text-white shadow-sm"
                    : "bg-white text-slate-600 border border-border hover:border-secondary/30 hover:text-secondary"
                }`}
                aria-label={`Show story from ${story.name}`}
              >
                {story.name}
              </button>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  </div>
</section>









<section className="py-20 bg-secondary text-white text-center">
  <div className="container mx-auto px-4 max-w-2xl">
    <h2 className="font-zuume text-4xl md:text-5xl">
      Ready to Help Your Child Succeed?
    </h2>

    <p className="mt-4 font-poppins text-white/80">
      Join Nkomazi Finishing School Academy today and give your child the academic support they deserve.
    </p>

    <div className="mt-8">
      <Link
        to="/admissions"
        className="bg-white text-secondary px-8 py-3 rounded-lg font-poppins hover:opacity-90 transition"
      >
        Apply Now
      </Link>
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

        <h3 className="mb-3 font-poppins text-lg font-bold text-secondary">
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


    

   <section className="bg-secondary py-20">
  <div className="container mx-auto px-4">
    <AnimatedSection>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-white/70">
          Need Help?
        </p>
        <h2 className="mt-3 font-zuume text-5xl md:text-6xl text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 font-poppins text-sm md:text-base text-white/75">
          Everything you may want to know about our lessons, support, and how learners grow with Nkomazi Finishing School Academy.
        </p>
      </div>
    </AnimatedSection>

    <div className="mx-auto mt-12 max-w-4xl space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <AnimatedSection key={index}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition duration-300 hover:bg-white/10">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                aria-expanded={isOpen}
              >
                <span className="font-poppins text-sm md:text-base font-semibold text-white pr-4">
                  {faq.question}
                </span>

                <span
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white text-xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 md:px-6 md:pb-6">
                    <p className="font-poppins text-sm md:text-[15px] leading-7 text-white/75">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  </div>
</section>

    </div>
  )
}
