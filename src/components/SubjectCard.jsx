import React from 'react'

export default function SubjectCard({ name, description }){
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9-5-9-5-9 5 9 5z" opacity="0.4" />
          </svg>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="text-base font-medium text-slate-800">{name}</div>
            <div className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">Popular</div>
          </div>
          <p className="mt-2 text-slate-500 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
