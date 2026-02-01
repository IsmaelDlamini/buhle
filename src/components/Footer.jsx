import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <div className="font-semibold">Buhle Learning Center</div>
            <div className="text-sm text-slate-400">© {new Date().getFullYear()} — All rights reserved.</div>
          </div>

          <div className="text-sm text-slate-400">Contact: +27 60 123 4567 • info@buhlelearning.co.za</div>
        </div>
      </div>
    </footer>
  )
}
