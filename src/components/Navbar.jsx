import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-blue-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold text-blue-700">Buhle Learning Center</Link>
        <nav className="space-x-4 hidden md:block">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-blue-700 font-medium' : 'text-slate-700'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-700 font-medium' : 'text-slate-700'}>About</NavLink>
          <NavLink to="/subjects" className={({isActive}) => isActive ? 'text-blue-700 font-medium' : 'text-slate-700'}>Subjects</NavLink>
          <NavLink to="/programme" className={({isActive}) => isActive ? 'text-blue-700 font-medium' : 'text-slate-700'}>Programme</NavLink>
          <NavLink to="/admissions" className={({isActive}) => isActive ? 'text-blue-700 font-medium' : 'text-slate-700'}>Admissions</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-700 font-medium' : 'text-slate-700'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
