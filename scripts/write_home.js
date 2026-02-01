import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const content = `import React from 'react'
import Hero from '../components/Hero'
import AnimatedSection from '../components/AnimatedSection'

export default function Home(){
  return (
    <div>
      <Hero />

      <AnimatedSection className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-blue-800">Our Approach</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">We focus on small classes, regular testing, and exam preparation to give learners a real second chance to succeed.</p>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-blue-700">Popular Subjects</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {['Mathematics','Physical Sciences','Life Sciences','English','Geography','Accounting'].map((s) => (
            <div key={s} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition text-center">
              <div className="text-sm font-medium text-slate-700">{s}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
`

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const target = path.resolve(__dirname, '..', 'src', 'pages', 'Home.jsx')
fs.writeFileSync(target, content, 'utf8')
console.log('WROTE', target)
