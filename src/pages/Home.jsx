import React from 'react'
import Hero from '../components/Hero'
import AnimatedSection from '../components/AnimatedSection'
import SubjectCard from '../components/SubjectCard'
import InstructorCard from '../components/InstructorCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { Link } from 'react-router-dom'
import whoImg from '../assets/hero-2.jpg'
import { useState, useEffect } from 'react'

export default function Home(){


  
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

      <AnimatedSection className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-6 md:p-10">
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:w-6/12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 serif-heading">Who We Are</h2>
              <p className="mt-4 text-slate-700 leading-relaxed font-sans">We combine focused lessons, regular assessments, and mentorship so learners get the support and structure they need to improve their results. Our experienced tutors focus on practical exam technique, personalised learning plans and building confidence.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 font-sans">Small, focused classes</div>
                    <div className="text-sm text-slate-600 font-sans">Individual attention and tailored pacing for each learner.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 font-sans">Exam-focused teaching</div>
                    <div className="text-sm text-slate-600 font-sans">Mock exams, past-paper practice and exam strategy.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 font-sans">Holistic support</div>
                    <div className="text-sm text-slate-600 font-sans">Mentoring, counselling and life skills for sustained success.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-indigo-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18M12 3v18" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 font-sans">Proven results</div>
                    <div className="text-sm text-slate-600 font-sans">Consistent improvements and strong pass rates among learners.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/admissions" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700">Apply Now</Link>
                <Link to="/about" className="inline-flex items-center px-5 py-3 border border-indigo-200 text-indigo-600 rounded-md hover:bg-indigo-50">Learn more</Link>
              </div>
            </div>

            <div className="md:w-6/12 mt-6 md:mt-0">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={whoImg}
                  alt="Students in class"
                  className="w-full h-80 md:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

    
      

    

    <section className="bg-secondaryColor py-10">
          <AnimatedSection>
            <h2 className="text-center font-zuume text-5xl font-extrabold text-white mx-auto px-10 pb-10 md:text-6xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl  bg-secondaryColor text-white font-poppins font-bold mx-5 border-t-[0.1px] border-[#8A8A8A4D] text-sm md:max-w-[900px] md:mx-auto ">
            {faqs.map((faq, index) => (
              <AnimatedSection>
                <div
                  key={index}
                  className="border-b-[0.1px] border-[#8A8A8A4D] py-4 px-3 w-[95%] md:w-full flex justify-between items-center"
                >
                  <div>
                    <button
                      className="w-full text-left py-3 focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                    </button>
                    {openIndex === index && (
                      <p className="py-2 text-[#DDDCFF] font-light">
                        {faq.answer}
                      </p>
                    )}
                  </div>

                  <div
                    className="font-poppins font-light rounded-full bg-white cursor-pointer text-secondaryColor  flex items-center justify-center size-4 flex-grow-0 flex-shrink-0"
                    onClick={() => toggleFAQ(index)}
                  >
                    <p className="text-xs">
                      {openIndex === null && index === 0
                        ? "+"
                        : openIndex === index
                        ? "-"
                        : "+"}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

    </div>
  )
}
