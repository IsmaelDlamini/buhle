import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import site_logo from "../assets/site_logo_3.png";

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
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"
          : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={site_logo}
            alt="Nkomazi Finishing School"
            className="h-auto max-h-16 w-20 object-contain md:w-24"
          />
        </Link>

        <nav className="hidden items-center gap-8 font-poppins text-sm md:flex">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end>
              {({ isActive }) => (
                <span
                  className={`relative pb-1 transition ${
                    isActive
                      ? "font-semibold text-secondary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-secondary"
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
            to="/registration"
            className="rounded-md bg-secondary px-5 py-2 font-poppins text-sm text-white transition hover:opacity-90"
          >
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="p-2 md:hidden"
          aria-label="Open navigation menu"
        >
          <svg
            className="h-6 w-6 text-slate-800"
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
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] flex min-h-screen flex-col bg-white md:hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-5">
              <img
                src={site_logo}
                className="h-auto w-20 object-contain"
                alt="Nkomazi Finishing School"
              />

              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="text-3xl text-slate-700"
              >
                ✕
              </button>
            </div>

            {/* Centered nav */}
            <div className="flex flex-1 items-center justify-center">
              <nav className="flex flex-col items-center gap-6 text-center font-poppins">
                {navItems.map((n, index) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 24 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.35 }}
                  >
                    <NavLink
                      to={n.to}
                      end
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-3xl transition ${
                          isActive
                            ? "font-semibold text-secondary"
                            : "text-slate-800 hover:text-secondary"
                        }`
                      }
                    >
                      {n.label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ delay: 0.45, duration: 0.35 }}
                  className="pt-4"
                >
                  <Link
                    to="/registration"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 font-poppins text-base font-medium text-white transition hover:opacity-90"
                  >
                    Apply Now
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
