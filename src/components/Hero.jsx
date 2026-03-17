import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import hero4 from '../assets/hero-4.jpg'
import hero5 from '../assets/hero-5.jpg'
import site_logo from "../assets/site_logo.png"

export default function Hero() {
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
  }

  const next = () => {
    setCurrent((c) => (c + 1) % slides.length)
    setIsPlaying(false)
  }

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        />
      ))}

      {/* dimming overlay (above images, below content/banner) */}
      <div className="absolute inset-0 bg-black/40 z-10" aria-hidden="true" />

      {/* Top overlay header */}
      <div className="bg-white/80 absolute top-0 left-0 px-4 py-4 md:py-6 w-full z-30">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
          <div className="md:w-1/3">
            <p className="text-xs text-neutral-600 uppercase tracking-wider">Welcome to</p>
            <h1 className="text-lg md:text-2xl font-extrabold text-slate-900">NKOMAZI FINISHING SCHOOL</h1>
            <p className="mt-2 text-sm text-slate-600">Empowering learners to reach their full potential.</p>

            <div className="mt-3 space-y-2 text-sm text-slate-700">
             
             
            </div>
          </div>

         

          <div className="md:w-1/3 flex items-center justify-end gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={site_logo} alt="Site logo" className="w-20 h-auto md:w-24 object-contain" />
            </Link>

           
          </div>
        </div>
      </div>

      {/* Center content */}
      {/* <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white drop-shadow-lg">
            <h2 className="text-3xl md:text-5xl font-extrabold">Quality learning. Better futures.</h2>
            <p className="mt-4 text-sm md:text-base text-white/90">Small classes, personalised attention and exam-focused coaching.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/admissions" className="px-5 py-3 bg-blue-600 text-white rounded-md">Apply Now</Link>
              <Link to="/contact" className="px-4 py-3 border border-white/30 text-white rounded-md">Contact Us</Link>
            </div>
          </div>
        </div>
      </div> */}

      

      {/* Controls: prev/next and dots */}
      <div className="absolute inset-0 flex items-end justify-center pb-6 z-20 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* <button onClick={prev} className="p-2 bg-white/80 rounded-full shadow-md">
            ‹
          </button> */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
          {/* <button onClick={next} className="p-2 bg-white/80 rounded-full shadow-md">
            ›
          </button> */}
        </div>
      </div>
    </section>
  )
}
