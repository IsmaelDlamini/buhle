import React from 'react'
import AnimatedSection from '../components/AnimatedSection'

const subjects = [
  { title: 'Mathematics' },
  { title: 'Physical Sciences' },
  { title: 'Life Sciences' },
  { title: 'English' },
  { title: 'Geography' },
  { title: 'Accounting' }
]

export default function Subjects(){
  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-2xl font-semibold text-blue-800">Subjects</h1>
        <p className="mt-2 text-slate-600">We offer focused tuition in the subjects below with practical exam preparation support.</p>
      </AnimatedSection>

      <AnimatedSection className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {subjects.map(s => (
          <div key={s.title} className="p-6 bg-white rounded-lg shadow hover:scale-105 transform transition">
            <h3 className="text-lg font-medium text-slate-800">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">Targeted lessons, practice exams and one-on-one support.</p>
          </div>
        ))}
      </AnimatedSection>
    </div>
  )
}
