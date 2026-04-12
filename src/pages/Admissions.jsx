import React, { useState, useMemo } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const initial = { name: '', email: '', phone: '', subjects: [] }

const phoneValid = (v) => /^(?:\+27|0)\d{9}$/.test(v)
const emailValid = (v) => /^\S+@\S+\.\S+$/.test(v)

export default function Admissions(){
  const [form, setForm] = useState(initial)
  const [touched, setTouched] = useState({})

  const errors = useMemo(() => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!emailValid(form.email)) e.email = 'Enter a valid email.'
    if (!phoneValid(form.phone)) e.phone = 'Enter a South African phone number.'
    if (!form.subjects.length) e.subjects = 'Select at least one subject.'
    return e
  }, [form])

  const valid = Object.keys(errors).length === 0

  function handleChange(e){
    const { name, value, type, checked } = e.target
    if (type === 'checkbox'){
      setForm(prev => {
        const s = new Set(prev.subjects)
        if (checked) s.add(value)
        else s.delete(value)
        return { ...prev, subjects: Array.from(s) }
      })
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  function handleBlur(e){ setTouched(t => ({ ...t, [e.target.name]: true })) }

  function handleSubmit(e){
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, subjects: true })
    if (!valid) return
    // In a real app submit to server here.
    alert('Application submitted — we will contact you soon.')
    setForm(initial)
    setTouched({})
  }

  const subjectList = [
    'Mathematics',
    'Physical Sciences',
    'Life Sciences',
    'English',
    'Geography',
    'Accounting',
    'Siswati',
    'Agricultural Sciences',
    'Business Studies',
    'Economics',
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-2xl font-semibold text-blue-800">Admissions — Apply Now</h1>
        <p className="mt-2 text-slate-600">Complete the form below to start your application for the one-year rewrite programme.</p>
        <a
          href="/registration%20form.pdf"
          download
          className="mt-4 inline-block rounded bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
        >
          Download Registration Form
        </a>
      </AnimatedSection>

      <AnimatedSection className="mt-6">
        <form onSubmit={handleSubmit} noValidate className="max-w-xl bg-white p-6 rounded-lg shadow">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Full Name</span>
            <input name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border rounded px-3 py-2" />
            {touched.name && errors.name && <div className="mt-1 text-sm text-red-600">{errors.name}</div>}
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border rounded px-3 py-2" />
            {touched.email && errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-slate-700">Phone Number</span>
            <input name="phone" value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+27 or 0" className="mt-1 block w-full border rounded px-3 py-2" />
            {touched.phone && errors.phone && <div className="mt-1 text-sm text-red-600">{errors.phone}</div>}
          </label>

          <fieldset className="mt-4">
            <legend className="text-sm font-medium text-slate-700">Subjects to Rewrite</legend>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {subjectList.map(s => (
                <label key={s} className="flex items-center gap-2">
                  <input type="checkbox" name="subjects" value={s} checked={form.subjects.includes(s)} onChange={handleChange} />
                  <span className="text-sm text-slate-700">{s}</span>
                </label>
              ))}
            </div>
            {touched.subjects && errors.subjects && <div className="mt-1 text-sm text-red-600">{errors.subjects}</div>}
          </fieldset>

          <div className="mt-6 flex justify-end">
            <button type="submit" disabled={!valid} className={`px-5 py-2 rounded ${valid ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-400'}`}>Submit Application</button>
          </div>
        </form>
      </AnimatedSection>
    </div>
  )
}
