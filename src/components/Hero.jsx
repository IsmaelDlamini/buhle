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
  <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">

    {/* Slides */}
    {slides.map((src, i) => (
      <img
        key={i}
        src={src}
        alt={`slide-${i}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity object-top duration-1000 ${
          i === current ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    ))}

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50 z-10" />

    {/* Top navigation area */}
    <div className="absolute top-0 left-0 w-full z-30">
      {/* <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={site_logo}
            alt="Site logo"
            className="w-20 md:w-24 object-contain"
          />
        </Link>

        <Link
          to="/admissions"
          className="hidden md:inline-flex bg-white text-secondary px-5 py-2 rounded-md font-poppins text-sm hover:opacity-90 transition"
        >
          Apply Now
        </Link>
      </div> */}
    </div>

    {/* Hero content */}
    <div className="relative z-20 h-full flex items-center">
      <div className="container mx-auto px-4 text-center max-w-3xl">

        <h1 className="font-zuume text-4xl md:text-6xl text-white leading-tight">
          Empowering Learners <br /> To Reach Their Potential
        </h1>

        <p className="mt-6 text-white/90 font-poppins text-sm md:text-lg">
          Structured academic support, experienced tutors, and focused exam
          preparation designed to help students succeed in Mathematics and
          other key subjects.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/admissions"
            className="bg-secondary px-7 py-3 text-white rounded-lg font-poppins hover:opacity-90 transition"
          >
            Apply Now
          </Link>

          <Link
            to="/about"
            className="border border-white text-white px-7 py-3 rounded-lg font-poppins hover:bg-white hover:text-secondary transition"
          >
            Learn More
          </Link>

        </div>
      </div>
    </div>

    {/* Slider dots */}
    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className={`w-3 h-3 rounded-full transition ${
            i === current ? "bg-white" : "bg-white/40"
          }`}
        />
      ))}
    </div>

  </section>
)
}
