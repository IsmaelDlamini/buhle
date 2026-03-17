import React from "react";
import { Link } from "react-router-dom";
import site_logo from "../assets/site_logo.png";

export default function Footer() {
  const directionLink =
    "https://www.google.com/maps/dir/-25.443947,30.9628904/emasa/@-25.4593794,30.9512708,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1ee84bca7beb83cf:0x2522498576ddb2d3!2m2!1d30.9780883!2d-25.4730239?entry=ttu";

  return (
    <footer className="bg-grey border-t border-border">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="inline-block">
              <img
                src={site_logo}
                alt="EMASA Academy logo"
                className="w-20 md:w-24 object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md font-poppins text-sm leading-7 text-slate-600">
              We help learners strengthen their understanding of Mathematics
              and Science through structured support, personalised guidance,
              and focused academic development.
            </p>
          </div>

          <div>
            <h3 className="font-poppins text-base font-semibold text-secondary">
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
                <Link to="/contact" className="transition hover:text-secondary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins text-base font-semibold text-secondary">
              Contact
            </h3>

            <ul className="mt-5 space-y-4 font-poppins text-sm text-slate-600">
              <li>
                <a href="tel:+27788263936" className="transition hover:text-secondary">
                  078 826 3936
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@e-masa.co.za"
                  className="transition hover:text-secondary"
                >
                  admin@e-masa.co.za
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
                  Nelspruit Central, Mbombela, Mpumalanga
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center font-poppins text-sm text-slate-500">
            © 2026 Eben Mathematics &amp; Science Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}