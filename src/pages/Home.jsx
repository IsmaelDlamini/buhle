import React from 'react'
import Hero from '../components/Hero'
import AnimatedSection from '../components/AnimatedSection'
import SubjectCard from '../components/SubjectCard'
import InstructorCard from '../components/InstructorCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      {/* Hero wrapper: overflow-hidden to clip the circle; Hero kept above via z-10 */}
      <div className="relative overflow-hidden">
        {/* decorative circle partially outside top-right, placed behind Hero */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full overflow-hidden pointer-events-none sm:-top-32 sm:-right-32 sm:w-96 sm:h-96 opacity-100 mix-blend-normal bg-transparent animate-none"
          style={{ animation: 'none', zIndex: 30 }}
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
            alt=""
            loading="lazy"
            draggable="false"
            className="w-full h-full object-cover brightness-100 contrast-100 saturate-100 filter-none animate-none"
            style={{ animation: 'none' }}
          />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <AnimatedSection className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">Our Approach</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">We combine focused lessons, regular assessments, and mentorship so learners get the support and structure they need to improve their results.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex gap-4 items-start">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold">Small Classes</div>
              <p className="mt-2 text-slate-500 text-sm">Individual attention and tailored pacing for each learner.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex gap-4 items-start">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m2 0h-8" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold">Exam Preparation</div>
              <p className="mt-2 text-slate-500 text-sm">Mock exams, past-paper practice and exam technique coaching.</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 flex gap-4 items-start">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 8a6 6 0 00-12 0v6a6 6 0 0012 0V8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v.01" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold">Support Services</div>
              <p className="mt-2 text-slate-500 text-sm">Counselling, mentoring and life skills to support learners holistically.</p>
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

      <AnimatedSection className="container mx-auto px-4 py-12">
        <div className="bg-indigo-600 text-white rounded-2xl p-8 text-center shadow-lg">
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
