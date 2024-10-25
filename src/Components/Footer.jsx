import React from "react";
import bglogo from "../images/bg-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 flex items-center justify-center">
        <article className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 max-w-screen-xl w-full py-24 px-10">
          <div className="w-fit">
            <span className="cursor-pointer">
              <img src={bglogo} alt="" className="w-32 md:w-60 mb-10" />
            </span>
            <button className="w-full bg-red-400 text-white font-semibold rounded-full py-3 px-3 text-sm md:text-base border-red-400 border-2 hover:bg-white hover:text-red-400 hover:-text-red-400 transition-all duration-200 uppercase">
              Contact Us
            </button>
            <span className="flex items-center justify-center mt-6 gap-5">
              <span className="cursor-pointer text-white hover:scale-110 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                  />
                </svg>
              </span>
              <span className="cursor-pointer text-white hover:scale-110 transition-all ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m3 21l7.548-7.548M21 3l-7.548 7.548m0 0L8 3H3l7.548 10.452m2.904-2.904L21 21h-5l-5.452-7.548"
                    color="currentColor"
                  />
                </svg>
              </span>
              <span className="cursor-pointer text-white hover:scale-110 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    color="currentColor"
                  >
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                    <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
                  </g>
                </svg>
              </span>
            </span>
          </div>
          <div>
            <ul className="text-base text-white md:text-lg text-grey-300 font-normal mt-10 sm:mt-0">
                <li className="mb-4"><a href="/" className="hover:underline">About Us</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">Browse Cards</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">Plans</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">Blog</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">User Portal</a></li>
            </ul>
          </div>
          <div>
            <ul className="text-base text-white md:text-lg text-grey-300 font-normal">
                <li className="mb-4"><a href="/" className="hover:underline">(555) 555-5555</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">example@gamil.com</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">Street Address</a></li>
                <li className="mb-4"><a href="/" className="hover:underline">Zip code, City</a></li>
            </ul>
          </div>

          <div>
            <span className="text-white flex items-center gap-3 md:gap-5 mb-7 cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
</svg>
<p>Whats App</p>
            </span>
<span className="text-white flex items-center gap-3 md:gap-5 cursor-pointer group">
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 26 26">
	<path fill="currentColor" fill-rule="evenodd" d="M24.123 9.753v6.281c0 .886-.71 1.608-1.583 1.608s-1.579-.722-1.579-1.608V9.753c0-.886.705-1.605 1.579-1.605s1.583.719 1.583 1.605M3.456 8.147c-.872 0-1.579.72-1.579 1.605v6.281c0 .886.707 1.608 1.579 1.608c.878 0 1.583-.722 1.583-1.608v-6.28c0-.886-.705-1.606-1.583-1.606m2.537 11.519c0 .683.553 1.233 1.234 1.233h1.41v3.495c0 .886.71 1.605 1.583 1.605s1.581-.719 1.581-1.605V20.9h2.46v3.495c0 .886.712 1.605 1.583 1.605c.874 0 1.583-.719 1.583-1.605V20.9h1.407c.683 0 1.236-.55 1.236-1.233V8.196H5.993zM20.036 7.175H5.961c.184-2.134 1.634-3.961 3.703-4.922L8.363.363c-.077-.111-.06-.258.041-.328c.101-.068.246-.034.326.077l1.349 1.962c.891-.35 1.878-.548 2.921-.548s2.028.198 2.921.548L17.27.112c.08-.111.225-.145.326-.077c.101.07.118.217.041.328l-1.301 1.89c2.068.961 3.519 2.788 3.7 4.922m-9.225-2.728a.78.78 0 1 0-1.562.004a.78.78 0 0 0 1.562-.004m6.034 0a.777.777 0 0 0-.78-.777a.778.778 0 1 0 .78.777" clip-rule="evenodd" />
</svg>
<p className="text-base md:text-lg flex-shrink-0 font-semibold text-grey-300 ">Andriod</p>
</span>

<span className="text-white flex items-center gap-3 md:gap-5 mt-5 cursor-pointer group">
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M1.1 6.05c-.614 0-1.1.48-1.1 1.08a1.08 1.08 0 0 0 1.1 1.08c.62 0 1.11-.48 1.11-1.08S1.72 6.05 1.1 6.05m7.61.02c-3.36 0-5.46 2.29-5.46 5.93c0 3.67 2.1 5.95 5.46 5.95c3.34 0 5.45-2.28 5.45-5.95c0-3.64-2.11-5.93-5.45-5.93m10.84 0c-2.5 0-4.28 1.38-4.28 3.43c0 1.63 1.01 2.65 3.13 3.14l1.49.36c1.45.33 2.04.81 2.04 1.64c0 .96-.97 1.64-2.35 1.64c-1.41 0-2.47-.69-2.58-1.75h-2c.08 2.12 1.82 3.42 4.46 3.42c2.79 0 4.54-1.37 4.54-3.55c0-1.71-1-2.68-3.32-3.21l-1.33-.3c-1.41-.34-1.99-.79-1.99-1.55c0-.96.88-1.6 2.18-1.6c1.31 0 2.21.65 2.31 1.72h1.96c-.05-2.02-1.72-3.39-4.26-3.39M8.71 7.82c2.04 0 3.35 1.63 3.35 4.18c0 2.57-1.31 4.2-3.35 4.2c-2.06 0-3.36-1.63-3.36-4.2c0-2.55 1.3-4.18 3.36-4.18M.111 9.31v8.45H2.1V9.31z" />
</svg>
<p className="text-base md:text-lg flex-shrink-0 font-semibold text-grey-300">IOS</p>
</span>
          </div>
        </article>
      </footer>
    </>
  );
};

export default Footer;
