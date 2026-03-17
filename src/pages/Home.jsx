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
    text: "EMASA helped me become more confident in Mathematics. The lessons were clear, supportive, and focused on helping me improve step by step.",
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
      question: "How do your students generally perform at EMASA?",
      answer:
        "Our students who commit themselves not only in the extra lessons but also with the homework given generally perform well. For your child to perform well at EMASA, they have to commit to coming to the lessons and practicing at home with the resources given. ",
    },
    {
      question: "What age groups or grades does EMASA cater for?",
      answer:
        "We cater for students from grade 1 until matric as well as first and second year tertiary students with math and physics holiday lessons.",
    },
    {
      question: "Does EMASA conduct 1-on-1 lessons?",
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
        "What makes EMASA Academy different from other tutoring services?",
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
    sessionStorage.getItem("loadedEmasa") == null ? true : false
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("loadedEmasa", "loaded");
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
          Grade 1–12
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



<AnimatedSection className="container mx-auto px-4 py-20">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="font-zuume text-4xl md:text-5xl text-secondary mb-6">
        Who We Are
      </h2>

      <p className="font-poppins text-slate-600 leading-relaxed mb-8">
        EMASA Academy provides structured academic support designed to help
        learners build confidence, improve their understanding, and achieve
        better results in Mathematics and other key subjects. Our approach
        combines focused lessons, consistent assessments, and mentorship so
        every learner receives the attention they need to grow academically.
      </p>

      {/* FEATURES */}
      <div className="grid sm:grid-cols-2 gap-6">

        <div className="border border-border rounded-xl p-5 hover:shadow-md transition">
          <h3 className="font-semibold font-poppins text-secondary mb-1">
            Small Focused Classes
          </h3>
          <p className="text-sm text-slate-500">
            Smaller groups allow our tutors to give each learner the attention
            they deserve.
          </p>
        </div>

        <div className="border border-border rounded-xl p-5 hover:shadow-md transition">
          <h3 className="font-semibold font-poppins text-secondary mb-1">
            Exam Preparation
          </h3>
          <p className="text-sm text-slate-500">
            Learners practice with past papers and exam strategies that build
            confidence.
          </p>
        </div>

        <div className="border border-border rounded-xl p-5 hover:shadow-md transition">
          <h3 className="font-semibold font-poppins text-secondary mb-1">
            Personal Mentorship
          </h3>
          <p className="text-sm text-slate-500">
            We guide learners beyond academics by building discipline and
            motivation.
          </p>
        </div>

        <div className="border border-border rounded-xl p-5 hover:shadow-md transition">
          <h3 className="font-semibold font-poppins text-secondary mb-1">
            Proven Results
          </h3>
          <p className="text-sm text-slate-500">
            Many learners improve their marks significantly after joining our
            programme.
          </p>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/admissions"
          className="bg-secondary text-white px-6 py-3 rounded-lg font-poppins hover:opacity-90 transition"
        >
          Apply Now
        </Link>

        <Link
          to="/about"
          className="border border-secondary text-secondary px-6 py-3 rounded-lg font-poppins hover:bg-secondary hover:text-white transition"
        >
          Learn More
        </Link>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative">
      <img
        src={whoImg}
        alt="Students learning"
        className="rounded-2xl object-cover w-full h-[420px]"
        loading="lazy"
      />

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
    </div>

  </div>
</AnimatedSection>






    
 <section className="py-24 bg-grey">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto">
      <p className="font-poppins text-sm uppercase tracking-[0.2em] text-secondary/70">
        Our Programmes
      </p>

      <h2 className="mt-3 font-zuume text-4xl md:text-5xl text-secondary">
        What We Offer
      </h2>

      <p className="mt-4 text-slate-600 font-poppins text-sm md:text-base">
        Structured academic support designed to help learners build confidence,
        improve results, and succeed in their studies.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-6 mt-14 md:grid-cols-3">

      {/* Card 1 */}
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition" />

        <h3 className="font-poppins text-lg font-semibold text-secondary">
          Mathematics
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Build strong foundations, improve problem-solving skills, and prepare
          effectively for exams with structured lessons.
        </p>

        <div className="mt-6 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition">
          Learn more →
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition" />

        <h3 className="font-poppins text-lg font-semibold text-secondary">
          Physical Sciences
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Simplify complex concepts and develop a clear understanding through
          practical learning and exam-focused preparation.
        </p>

        <div className="mt-6 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition">
          Learn more →
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition" />

        <h3 className="font-poppins text-lg font-semibold text-secondary">
          Primary Support
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Help younger learners build confidence and strong academic habits
          early in their education journey.
        </p>

        <div className="mt-6 text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition">
          Learn more →
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
          their understanding, and achieved better academic results with EMASA.
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
                EMASA Student
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
      Join EMASA Academy today and give your child the academic support they deserve.
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



<section className="py-20 bg-grey">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8 text-center">

      <div>
        <h3 className="font-semibold text-secondary">Personal Attention</h3>
        <p className="text-sm text-slate-600 mt-2">
          Every learner gets focused support.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-secondary">Exam Results</h3>
        <p className="text-sm text-slate-600 mt-2">
          Proven improvement in marks.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-secondary">Dedicated Mentorship</h3>
        <p className="text-sm text-slate-600 mt-2">
          We support learners beyond academics.
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
          Everything you may want to know about our lessons, support, and how learners grow with EMASA Academy.
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
