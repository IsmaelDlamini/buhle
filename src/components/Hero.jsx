import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import hero4 from '../assets/hero-4.jpg'
import hero5 from '../assets/hero-5.jpg'
import site_logo from "../assets/site_logo.png";

export default function Hero(){
  const slides = [hero1, hero2, hero3, hero4, hero5]
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!isPlaying) return
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000)
    return () => clearInterval(timerRef.current)
  }, [isPlaying, slides.length])

  const goTo = (i) => {
    setCurrent(i)
    setIsPlaying(false)
  }

  const prev = () => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
    setIsPlaying(false)
        <div className="bg-white/95 absolute top-0 left-0 px-4 py-4 md:py-6 w-full z-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4">

            {/* Left: School name and contact */}
            <div className="md:w-1/3">
              <p className="text-xs text-neutral-600 uppercase tracking-wider">Welcome to</p>
              <h1 className="text-lg md:text-2xl font-extrabold text-slate-900">NKOMAZI FINISHING SCHOOL</h1>
              <p className="mt-2 text-sm text-slate-600">Empowering learners to reach their full potential.</p>

              <div className="mt-3 space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1118 0z"/></svg>
                  <span>123 Example Rd, Nkomazi</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.12 1.01.35 2.01.68 2.95a2 2 0 01-.45 2.11L9.91 9.91a16 16 0 006 6l1.13-1.13a2 2 0 012.11-.45c.94.33 1.94.56 2.95.68A2 2 0 0122 16.92z"/></svg>
                  <a href="tel:+271234567890" className="hover:underline">(+27) 123 456 7890</a>
                </div>
              </div>
            </div>

            {/* Center: optional short highlights (hidden on small) */}
            <div className="hidden md:block md:w-1/3 text-center">
              <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Term-based support · Small classes · Exam prep
              </div>
            </div>

            {/* Right: Logo and CTAs */}
            <div className="md:w-1/3 flex items-center justify-end gap-4">
              <Link to="/" className="flex items-center gap-3">
                <img src={site_logo} alt="Site logo" className="w-20 h-auto md:w-24 object-contain" />
              </Link>

              <div className="flex items-center gap-2">
                <Link to="/admissions" className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">Apply</Link>
                <Link to="/contact" className="px-3 py-2 border border-slate-200 text-slate-700 rounded-md text-sm hover:bg-slate-50">Contact</Link>
              </div>
            </div>
          </div>
        </div>
                        <p className="mt-2 text-sm text-slate-600">Empowering learners to reach their full potential.</p>

                        <div className="mt-3 space-y-2 text-sm text-slate-700">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 1118 0z"/></svg>
                            <span>123 Example Rd, Nkomazi</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.12 1.01.35 2.01.68 2.95a2 2 0 01-.45 2.11L9.91 9.91a16 16 0 006 6l1.13-1.13a2 2 0 012.11-.45c.94.33 1.94.56 2.95.68A2 2 0 0122 16.92z"/></svg>
                            <a href="tel:+271234567890" className="hover:underline">(+27) 123 456 7890</a>
                          </div>
                        </div>
                      </div>

                      {/* Center: optional short highlights (hidden on small) */}
                      <div className="hidden md:block md:w-1/3 text-center">
                        <div className="inline-flex items-center bg-indigo-50 text-indigo-700 px-3 py-2 rounded-full text-sm font-medium">
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          Term-based support · Small classes · Exam prep
                        </div>
                      </div>

                      {/* Right: Logo and CTAs */}
                      <div className="md:w-1/3 flex items-center justify-end gap-4">
                        <Link to="/" className="flex items-center gap-3">
                          <img src={site_logo} alt="Site logo" className="w-20 h-auto md:w-24 object-contain" />
                        </Link>

                        <div className="flex items-center gap-2">
                          <Link to="/admissions" className="hidden md:inline-block px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700">Apply</Link>
                          <Link to="/contact" className="px-3 py-2 border border-slate-200 text-slate-700 rounded-md text-sm hover:bg-slate-50">Contact</Link>
                        </div>
                      </div>
                    </div>
                  </div>
