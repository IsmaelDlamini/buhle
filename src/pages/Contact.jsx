import React, { useState, useMemo } from 'react'
import AnimatedSection from '../components/AnimatedSection'

const emailValid = (v) => /^\S+@\S+\.\S+$/.test(v)

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})

  const errors = useMemo(() => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name required.'
    if (!emailValid(form.email)) e.email = 'Valid email required.'
    if (!form.message.trim()) e.message = 'Message required.'
    return e
  }, [form])

  const valid = Object.keys(errors).length === 0

  function handleChange(e){ setForm(prev => ({ ...prev, [e.target.name]: e.target.value })) }
  function handleBlur(e){ setTouched(t => ({ ...t, [e.target.name]: true })) }

  function handleSubmit(e){
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!valid) return
    alert('Thanks — we will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
    setTouched({})
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <AnimatedSection>
        <h1 className="text-2xl font-semibold text-blue-800">Contact Us</h1>
        <p className="mt-2 text-slate-600">Phone: +27 60 123 4567 • Email: info@buhlelearning.co.za</p>
      </AnimatedSection>

      <AnimatedSection className="mt-6">
        <form onSubmit={handleSubmit} className="max-w-lg bg-white p-6 rounded shadow">
          <label className="block">
            <span className="text-sm text-slate-700">Name</span>
            <input name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border rounded px-3 py-2" />
            {touched.name && errors.name && <div className="mt-1 text-sm text-red-600">{errors.name}</div>}
          </label>

          <label className="block mt-4">
            <span className="text-sm text-slate-700">Email</span>
            <input name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} className="mt-1 block w-full border rounded px-3 py-2" />
            {touched.email && errors.email && <div className="mt-1 text-sm text-red-600">{errors.email}</div>}
          </label>

          <label className="block mt-4">
            <span className="text-sm text-slate-700">Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} onBlur={handleBlur} rows="4" className="mt-1 block w-full border rounded px-3 py-2" />
            {touched.message && errors.message && <div className="mt-1 text-sm text-red-600">{errors.message}</div>}
          </label>

          <div className="mt-4 flex justify-end">
            <button type="submit" disabled={!valid} className={`px-4 py-2 rounded ${valid ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-400'}`}>Send Message</button>
          </div>
        </form>
      </AnimatedSection>
    </div>
  )
}
