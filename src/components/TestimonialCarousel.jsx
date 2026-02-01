import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TestimonialCarousel({ items = [], interval = 4000 }){
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!items || items.length === 0) return
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), interval)
    return () => clearInterval(t)
  }, [items, interval])

  if (!items || items.length === 0) return null

  return (
    <div className="relative">
      <AnimatePresence initial={false} mode="wait">
        <motion.blockquote
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.45 }}
          className="bg-white p-6 rounded-xl shadow"
        >
          <div className="italic text-slate-700">“{items[index].quote}”</div>
          <div className="mt-3 font-semibold text-slate-900">{items[index].name}</div>
          <div className="text-sm text-slate-500">{items[index].role}</div>
        </motion.blockquote>
      </AnimatePresence>

      <div className="mt-4 flex justify-center gap-2">
        {items.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Show testimonial ${i+1}`} className={`w-2 h-2 rounded-full ${i===index? 'bg-indigo-600' : 'bg-slate-300'}`}></button>
        ))}
      </div>
    </div>
  )
}
