import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import site_logo from "../assets/site_logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaSchool, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/subjects", label: "Subjects" },
    { to: "/programme", label: "Programme" },
    { to: "/admissions", label: "Admissions" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-250 bg-white ${scrolled ? "backdrop-blur bg-white/95 shadow-md border-b border-slate-200" : "bg-white/80"} `}
    >

      <div className="w-full bg-neutral-100">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center md:items-center justify-between gap-3 text-sm text-slate-700 font-sans">
          <div className="flex items-center gap-3">
            <FaSchool className="text-blue-700 w-5 h-5" />
            <div>
              <div className="text-slate-900 font-semibold">Nkomazi Finishing School</div>
              
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-700">
              <FaLocationDot className="w-4 h-4 text-slate-700" />
              <span className="text-xs md:text-sm">Kamhlushwa, Mbombela, South Africa</span>
            </a>

            <a href="tel:+27664991034" className="flex items-center gap-2 hover:text-blue-700">
              <FaPhoneAlt className="w-4 h-4 text-slate-700" />
              <span className="text-xs md:text-sm">(+27) 66 499 1034</span>
            </a>

            <div className="hidden sm:flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-600 hover:text-blue-700">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-600 hover:text-pink-600">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-slate-600 hover:text-sky-500">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://wa.me/27664991034" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-slate-600 hover:text-green-600">
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full shadow-sm py-3 mx-auto px-4 bg-neutral-50">
        <div className="container mx-auto flex items-center justify-center relative">
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} end>
                {({ isActive }) => (
                  <div className="relative group">
                    <span
                      className={`transition-colors px-3 py-2 ${isActive ? "text-blue-700 font-nav" : "text-slate-700 hover:text-blue-700 font-nav"}`}
                    >
                      {n.label}
                    </span>
                    {isActive ? (
                      <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-6 h-0.5 bg-blue-700 rounded" />
                    ) : (
                      <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-0 h-0.5 bg-blue-700 rounded group-hover:w-6 transition-all duration-200" />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded bg-white/60 border border-slate-100 absolute right-4"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: "10%" }}
              animate={{ y: 0 }}
              exit={{ y: "10%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-x-4 top-14 bg-white rounded-2xl shadow-2xl p-5 mx-3 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-4">
                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3"
                >
                  <img
                    src={site_logo}
                    alt="Ubuhle"
                    className="w-20 h-auto md:w-24 object-contain"
                  />
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded text-slate-600"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-3">
                {navItems.map((n) => (
                  <NavLink key={n.to} to={n.to} onClick={() => setOpen(false)}>
                    {({ isActive }) => (
                      <div
                        className={`w-full text-lg px-4 py-3 rounded-lg ${isActive ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-700 hover:bg-slate-50"}`}
                      >
                        {n.label}
                      </div>
                    )}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 block text-center bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
