import React from 'react'
import Hero from '../components/Hero'
import AnimatedSection from '../components/AnimatedSection'
import SubjectCard from '../components/SubjectCard'
import InstructorCard from '../components/InstructorCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { Link } from 'react-router-dom'
import whoImg from '../assets/hero-2.jpg'

export default function Home(){
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

      <AnimatedSection className="container mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-slate-900">Popular Subjects</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {name:'Mathematics',desc:'Algebra, calculus and exam practice.'},
            {name:'Physical Sciences',desc:'Mechanics, chemistry and labs.'},
            {name:'Life Sciences',desc:'Biology with experiments and theory.'},
            {name:'English',desc:'Comprehension, literature and writing.'},
            {name:'Geography',desc:'Physical & human geography modules.'},
            {name:'Accounting',desc:'Fundamentals and past-paper practice.'}
          ].map((s) => (
            <SubjectCard key={s.name} name={s.name} description={s.desc} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-white to-slate-50 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">By the numbers</h3>
          <p className="mt-2 text-slate-600">A snapshot of our impact and outcomes.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow">
              <div className="text-3xl font-bold text-indigo-600">95%</div>
              <div className="mt-1 text-sm text-slate-500">Pass rate among supported learners</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow">
              <div className="text-3xl font-bold text-indigo-600">12:1</div>
              <div className="mt-1 text-sm text-slate-500">Average class size</div>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow">
              <div className="text-3xl font-bold text-indigo-600">1,200+</div>
              <div className="mt-1 text-sm text-slate-500">Learners coached since 2018</div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold text-slate-900">What parents and learners say</h3>
        <div className="mt-6 md:max-w-3xl">
          <TestimonialCarousel items={[
            { quote: 'The focused classes and mentoring changed everything for my daughter.', name: 'Mrs. N. Dlamini', role: 'Parent' },
            { quote: 'I improved my marks and finally passed with confidence.', name: 'Sibusiso M', role: 'Learner' },
            { quote: 'Supportive staff and great exam preparation — highly recommend.', name: 'Thandi M', role: 'Parent' }
          ]} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold text-slate-900">Meet our instructors</h3>
        <p className="mt-2 text-slate-600">Experienced educators focused on results and student growth.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {name:'Ms. Patel',role:'Senior Maths Tutor'},
            {name:'Mr. Khumalo',role:'Science Lead'},
            {name:'Mrs. van der Merwe',role:'English Coordinator'},
            {name:'Mr. Nkosi',role:'Accounting Specialist'}
          ].map((i) => (
            <InstructorCard key={i.name} name={i.name} role={i.role} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 py-12 z-20">
        <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center shadow-lg z-20">
          <h3 className="text-2xl font-semibold">Ready to take the next step?</h3>
          <p className="mt-2 max-w-2xl mx-auto">Apply now for the upcoming intake or contact us for more information — our team will support your application.</p>
          <div className="mt-6 flex justify-center gap-4">
            <Link to="/admissions" className="px-6 py-3 bg-white text-indigo-600 rounded-md font-medium">Apply Now</Link>
            <Link to="/contact" className="px-6 py-3 border border-white/30 text-white rounded-md">Contact Us</Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
