import React, { useState } from "react";
import logo from "../images/logo.webp";
import {Link} from 'react-router-dom'

 const Nav = ({ onClose }) => {
  return (
    <div className="fixed  top-0 right-20  h-96 text-center w-3/4 bg-white z-30 p-8">
     
      <ul className="flex flex-col mt-10 gap-5 text-lg font-normal">
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <Link to="/CardMaker">Browse Card</Link>
        </li>
        <li>
          <a href="/">Plans</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">User Portal</a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    <>
      <header className="py-3">
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-5">
          <span className="w-48 cursor-pointer">
            <img src={logo} alt="Logo" className="w-40" />
          </span>

          <div className="hidden md:flex w-1/2">
          <ul className="flex items-center justify-between text-lg text-gray-500 font-normal">
  <li className="relative group px-7">
    <a href="/" className="relative">
      About Us
    </a>
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  </li>

  <li className="relative group px-7">
                <Link to="/cardMaker" className="relative">
                  Browse Card
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </li>


  <li className="relative group px-7">
    <a href="/" className="relative">
      Plans
    </a>
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  </li>

  <li className="relative group px-7">
    <a href="/" className="relative">
      Blog
    </a>
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  </li>

  <li className="relative group px-7">
    <a href="/" className="relative">
      User Portal
    </a>
    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  </li>
</ul>

          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-red-500 text-2xl"
            >
              {isNavOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {isNavOpen && <Nav onClose={() => setIsNavOpen(false)} />}
    </>
  );
};

export default Navbar;
