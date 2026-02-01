import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Subjects from './pages/Subjects'
import Programme from './pages/Programme'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-white text-slate-800">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/subjects" element={<Subjects />} />
                        <Route path="/programme" element={<Programme />} />
                        <Route path="/admissions" element={<Admissions />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <WhatsAppButton phone="27601234567" />
            </div>
        </Router>
    )
}

export default App
