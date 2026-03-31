import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Subjects from './pages/Subjects'
import Programme from './pages/Programme'
import Contact from './pages/Contact'
import Registration from './pages/registration'
import Gallery from './pages/gallery'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, [pathname])

    return null
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-white text-slate-800">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/subjects" element={<Subjects />} />
                        <Route path="/programme" element={<Programme />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/admissions" element={<Registration />} />
                        <Route path="/registration" element={<Registration />} />
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
