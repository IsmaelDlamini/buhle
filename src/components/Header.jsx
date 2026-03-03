import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import site_logo from "../assets/site_logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

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

      <div className="w-full py-4 mx-auto px-4 flex items-center justify-center bg-neutral-100  gap-4 text-sm text-slate-700">
        <div className="container flex justify-between">
          <p className=" ">Nkomazi Finishing School</p>

          <p className="flex items-center gap-2">
            <FaLocationDot /> Kamhlushwa, Mbombela, South Africa
          </p>

          <p className="flex items-center gap-2">
            <FaPhoneAlt /> 066 499 1034
          </p>
        </div>
      </div>

      <div className="w-full shadow-sm py-4 mx-auto px-4 flex items-center justify-center bg-neutral-50  gap-4 text-sm text-slate-700">
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end>
              {({ isActive }) => (
                <div className="relative group">
                  <span
                    className={`transition-colors px-2 py-1 ${isActive ? "text-blue-700 font-semibold" : "text-slate-700 hover:text-blue-700"}`}
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
