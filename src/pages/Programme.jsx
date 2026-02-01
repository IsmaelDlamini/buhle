import React from 'react'
import AnimatedSection from '../components/AnimatedSection'

export default function Programme(){
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-2xl font-semibold text-blue-800">One-year Full-Time Programme</h1>
        <p className="mt-3 text-slate-600">Small classes, continuous assessment, exam-focused revision and strong pastoral support. Ideal for learners seeking a structured, intensive rewrite year.</p>
      </AnimatedSection>

      <AnimatedSection className="mt-6">
        <ul className="list-disc ml-6 text-slate-600">
          <li>Weekly tests and progress tracking</li>
          <li>Exam technique workshops</li>
          <li>Pastoral counselling and discipline</li>
          <li>Individualised subject support</li>
        </ul>
      </AnimatedSection>
    </div>
  )
}
