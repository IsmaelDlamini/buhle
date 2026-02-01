import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-50 via-white to-slate-50 py-16"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="md:flex md:items-center md:gap-10">
          <div className="md:flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Rewrite your matric — reclaim your future</h1>
            <p className="mt-4 text-slate-600 max-w-2xl">A focused, one-year programme with small classes, exam preparation, and individual support to help learners succeed.</p>

            <div className="mt-6 flex flex-col sm:flex-row sm:justify-start gap-3 sm:gap-4">
              <Link to="/admissions" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-indigo-500">Apply Now</Link>
              <Link to="/programme" className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-slate-800 rounded-lg hover:bg-slate-50">View Programme</Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-white p-3 rounded-lg shadow-sm">Small classes<span className="block text-slate-500">Personal attention</span></div>
              <div className="bg-white p-3 rounded-lg shadow-sm">Exam-focused<span className="block text-slate-500">Proven curriculum</span></div>
              <div className="bg-white p-3 rounded-lg shadow-sm">Support services<span className="block text-slate-500">Counselling & mentoring</span></div>
            </div>
          </div>

          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-sm text-slate-500">Upcoming intake</div>
              <div className="mt-2 text-xl font-semibold text-slate-900">Feb 2026 — Limited spaces</div>
              <p className="mt-3 text-slate-600 text-sm">Secure your spot early — applications reviewed on a rolling basis.</p>
              <div className="mt-4">
                <Link to="/admissions" className="w-full inline-block text-center px-4 py-2 bg-indigo-600 text-white rounded-md">Apply</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
