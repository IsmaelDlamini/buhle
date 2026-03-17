import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import site_logo from "../assets/site_logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/subjects", label: "Subjects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm border-b border-slate-200"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container mx-auto px-4 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={site_logo}
            alt="Nkomazi Finishing School"
            className="w-20 md:w-24 h-auto max-h-16 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-poppins text-sm">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end>
              {({ isActive }) => (
                <span
                  className={`relative pb-1 transition ${
                    isActive
                      ? "text-secondary font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-secondary"
                      : "text-slate-700 hover:text-secondary"
                  }`}
                >
                  {n.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            to="/admissions"
            className="bg-secondary text-white px-5 py-2 rounded-md font-poppins text-sm hover:opacity-90 transition"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2"
          aria-label="Open navigation menu"
        >
          <svg
            className="w-6 h-6 text-slate-800"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute right-0 top-0 h-full w-[280px] sm:w-[320px] bg-white shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <img
                  src={site_logo}
                  className="w-20 h-auto object-contain"
                  alt="Nkomazi Finishing School"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="text-2xl text-slate-700"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-4 font-poppins">
                {navItems.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    end
                    onClick={() => setOpen(false)}
                  >
                    {({ isActive }) => (
                      <span
                        className={`block text-lg ${
                          isActive
                            ? "text-secondary font-semibold"
                            : "text-slate-700"
                        }`}
                      >
                        {n.label}
                      </span>
                    )}
                  </NavLink>
                ))}

                <Link
                  to="/admissions"
                  onClick={() => setOpen(false)}
                  className="mt-6 text-center bg-secondary text-white py-2 rounded-md"
                >
                  Apply Now
                </Link>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}