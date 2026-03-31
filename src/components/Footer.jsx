import React from "react";
import { Link } from "react-router-dom";
import site_logo from "../assets/site_logo.png";

export default function Footer() {
  const directionLink =
    "https://www.google.com/maps/dir/-25.443947,30.9628904/emasa/@-25.4593794,30.9512708,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1ee84bca7beb83cf:0x2522498576ddb2d3!2m2!1d30.9780883!2d-25.4730239?entry=ttu";

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-grey">
      {/* soft background accents */}
      <div className="absolute left-[-80px] top-[-20px] h-56 w-56 rounded-full bg-secondary/5 blur-3xl" />
      <div className="absolute right-[-100px] bottom-[-40px] h-64 w-64 rounded-full bg-[#9DCAEB]/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={site_logo}
                alt="Nkomazi Finishing School logo"
                className="w-20 object-contain md:w-24"
              />
            </Link>

            <p className="mt-5 max-w-md font-poppins text-sm leading-7 text-slate-600">
              We help learners strengthen their understanding of Mathematics and
              Science through structured support, personalised guidance, and
              focused academic development.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <span className="font-poppins text-xs text-slate-600">
                Academic Support • Mathematics • Science
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 font-poppins text-sm text-slate-600">
              <li>
                <Link to="/" className="transition hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/subjects" className="transition hover:text-secondary">
                  Subjects
                </Link>
              </li>
              <li>
                <Link to="/programme" className="transition hover:text-secondary">
                  Programme
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="transition hover:text-secondary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/registration" className="transition hover:text-secondary">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
              Contact
            </h3>

            <ul className="mt-5 space-y-4 font-poppins text-sm text-slate-600">
              <li>
                <a
                  href="tel:+27788263936"
                  className="transition hover:text-secondary"
                >
                  078 826 3936
                </a>
              </li>

              <li>
                <a
                  href="mailto:admin@nkomazi-finishing-school.co.za"
                  className="break-words transition hover:text-secondary"
                >
                  admin@nkomazi-finishing-school.co.za
                </a>
              </li>

              <li>
                <a
                  href={directionLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-secondary"
                >
                  32 Bell Street, Caltex Building, First Floor Office 126,
                  Kamhlushwa 1350
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="font-poppins text-sm text-slate-500">
              © 2026 Nkomazi Finishing School. All rights reserved.
            </p>

            <p className="font-poppins text-xs text-slate-400">
              Built to support learner growth and academic excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
