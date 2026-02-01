import React from 'react'
import AnimatedSection from '../components/AnimatedSection'

export default function About(){
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-3xl font-bold text-blue-800">About Buhle Learning Center</h1>
        <p className="mt-4 text-slate-600 max-w-3xl">Our mission is to provide supportive, disciplined learning environments for learners who need a second chance to complete their matric. We combine academic rigor with pastoral care.</p>
      </AnimatedSection>

      <AnimatedSection className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-700">Vision</h2>
        <p className="mt-2 text-slate-600">To see every learner achieve their matric and unlock future opportunities.</p>
      </AnimatedSection>
    </div>
  )
}
