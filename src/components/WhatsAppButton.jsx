import React from 'react'

export default function WhatsAppButton({ phone = '27601234567', message = "Hi, I'd like to enquire about the matric rewrite programme." }){
  const encoded = encodeURIComponent(message)
  const href = `https://wa.me/${phone}?text=${encoded}`

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-6 z-50">
      <div className="w-14 h-14 rounded-full bg-green-500 shadow-lg flex items-center justify-center transform hover:scale-105 transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 text-white">
          <path fill="currentColor" d="M20.52 3.48A11.88 11.88 0 0012.01.5C6.07.5 1.12 5.48 1.12 11.26c0 1.98.52 3.86 1.5 5.56L.5 23l6.43-1.68a11.7 11.7 0 005.07 1.11h.01c5.95 0 10.9-4.98 10.9-10.76 0-2.88-1.12-5.51-3.39-7.19zM12.02 20.2c-1.6 0-3.16-.41-4.54-1.18l-.33-.19-3.83 1.01 1.05-3.68-.21-.37a7.28 7.28 0 01-1.15-3.7c0-4.06 3.3-7.36 7.36-7.36 1.96 0 3.8.76 5.18 2.14a7.27 7.27 0 012.14 5.16c0 4.06-3.3 7.36-7.36 7.36z"/>
        </svg>
      </div>
    </a>
  )
}
