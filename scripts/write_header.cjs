// const fs = require('fs')
// const path = require('path')
// const content = `import React, { useState, useEffect } from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import site_logo from '../assets/site_logo.png'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function Header() {
//   const [open, setOpen] = useState(false)

//   useEffect(() => {
//     if (open) document.body.style.overflow = 'hidden'
//     else document.body.style.overflow = ''
//     return () => { document.body.style.overflow = '' }
//   }, [open])

//   const navItems = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About Us' },
//     { to: '/subjects', label: 'Subjects' },
//     { to: '/programme', label: 'Programme' },
//     { to: '/admissions', label: 'Admissions' },
//     { to: '/contact', label: 'Contact Us' }
//   ]

//   return (
//     <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="flex items-center">
//           <img src={site_logo} alt="Buhle Learning Center" className="w-20 h-auto" />
//         </Link>

//         <nav className="hidden md:flex items-center space-x-6">
//           {navItems.map((n) => (
//             <NavLink key={n.to} to={n.to} className={({ isActive }) => isActive ? 'text-blue-700 font-semibold' : 'text-slate-700 hover:text-blue-700'}>
//               {n.label}
//             </NavLink>
//           ))}
//         </nav>

//         <div className="flex items-center gap-4">
//           <Link to="/contact" className="hidden md:inline-block bg-blue-700 text-white px-4 py-2 rounded-full text-sm">Get Started</Link>

//           <button
//             aria-label="Toggle menu"
//             aria-expanded={open}
//             onClick={() => setOpen((s) => !s)}
//             className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
//           >
//             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               {open ? <><path d="M6 18L18 6M6 6l12 12" /></> : <><path d="M3 12h18M3 6h18M3 18h18" /></>}
//             </svg>
//           </button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, y: -8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.18 }}
//             className="md:hidden"
//           >
//             <div className="bg-white border-t border-slate-100 shadow-sm">
//               <div className="px-4 py-4 space-y-2">
//                 {navItems.map((n) => (
//                   <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)} className={({ isActive }) => `block px-3 py-2 rounded ${isActive ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'}`}>
//                     {n.label}
//                   </NavLink>
//                 ))}
//                 <div className="pt-2">
//                   <Link to="/contact" onClick={() => setOpen(false)} className="block text-center bg-blue-700 text-white px-4 py-2 rounded">Get Started</Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   )
// }
// `

// const target = path.join(__dirname, '..', 'src', 'components', 'Header.jsx')
// fs.writeFileSync(target, content, 'utf8')
// console.log('WROTE', target)
