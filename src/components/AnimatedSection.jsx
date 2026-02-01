import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
}

export default function AnimatedSection({ children, className = '' }){
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.section>
  )
}
