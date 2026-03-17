import React from 'react'
import site_logo from "../assets/site_logo.png";
import { Link } from 'react-router-dom';
import phone_icon from "../assets/icons/phone-icon.png";
import email_icon from "../assets/icons/email-icon.png";
import location_icon from "../assets/icons/location-icon.png";

export default function Footer(){


   const directionLink = "https://www.google.com/maps/dir/-25.443947,30.9628904/emasa/@-25.4593794,30.9512708,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1ee84bca7beb83cf:0x2522498576ddb2d3!2m2!1d30.9780883!2d-25.4730239?entry=ttu"

  return (
    <footer className="w-full bg-grey flex flex-col py-5 px-5 md:px-20 md:py-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start  md:space-y-0">
            <div className=" md:w-1/3">
              <Link to={"/"}><img src={site_logo} alt="site logo" className="w-20" /></Link>

              <p className=" text-[#303030] font-poppins text-sm mt-5 md:leading-6">
                {" "}
                We aim to help scholars improve their math and/or science. First
                we evaluate each new scholar and look at their past and current
                marks and then we formulate a lesson plan best suit for the
                scholar.{" "}
              </p>
            </div>

            <div className=" font-poppins mt-10 md:w-fit">
              <h3 className="text-secondaryColor font-bold">Quick Links</h3>

              <ul className=" text-[#303030] mt-6 space-y-2 text-sm md:space-y-5">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link> Us</li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link> Us</li>
              </ul>
            </div>
            <div className=" font-poppins mt-10 md:w-1/3">
              <h3 className="text-secondaryColor font-bold">Support</h3>

              <ul className=" text-[#303030] mt-6 space-y-5 text-sm md:space-y-5">
                <li className="flex items-center gap-x-3">
                  <img src={phone_icon} alt="phone-icon" className="size-4"/> 078 826 3936
                </li>
                <li className="flex items-center gap-x-3">
                  <img src={email_icon} alt="email-icon" className="size-4"/> <a href="mailto:admin@e-masa.co.za">admin@e-masa.co.za</a>
                </li>
                <li className="flex items-center gap-x-3">
                  <img src={location_icon} alt="location-icon" className="size-4"/><a href={directionLink}>32 Bell Street, Caltex
                  Building, First Floor Office 126 Nelspruit Central Mbombela
                  Mpumalanga</a> 
                </li>
              </ul>
            </div>

            
          </div>

          <div>
              <p className="text-[#303030] font-poppins text-sm mt-10 text-center border-borderColor1 border-t-2 pt-7">
                © 2025 Eben Mathematics & Science Academy | A Plus Systems
              </p>
            </div>
          
        </footer>
  )
}
