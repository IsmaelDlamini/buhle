import React from 'react'

export default function InstructorCard({ name, role = 'Tutor' }){
  const initials = name.split(' ').slice(-1)[0][0]
  return (
    <div className="bg-white p-5 rounded-lg text-center shadow-sm hover:shadow-md transition">
      <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-blue-400 flex items-center justify-center text-white text-xl font-bold">{initials}</div>
      <div className="mt-3 font-semibold text-slate-900">{name}</div>
      <div className="text-sm text-slate-500 mt-1">{role}</div>
    </div>
  )
}
