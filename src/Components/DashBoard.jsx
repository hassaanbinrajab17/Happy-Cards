import React, { useState } from "react";
import logo from "../images/logo.webp";
import { Link, Route, Routes, Outlet  } from "react-router-dom";
import CardMaker from "../Components/CardMaker";

export default  function DashBoard  ()  {
  const items = [
    {
      text: "My Cards",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 25h2M11 3h10a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"
          />
        </svg>
      ),
      navigate: "Generate Cards",
    },
    {
      text: "Generate Cards",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" />
            <path
              stroke-linecap="round"
              d="M10 16.5H6m2-3H6M2 10h20"
              opacity="0.5"
            />
            <path
              d="M14 15c0-.943 0-1.414.293-1.707S15.057 13 16 13s1.414 0 1.707.293S18 14.057 18 15s0 1.414-.293 1.707S16.943 17 16 17s-1.414 0-1.707-.293S14 15.943 14 15Z"
              opacity="0.5"
            />
          </g>
        </svg>
      ),
    },
    {
      text: "Address Book",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 21 21"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3.5 2.5h5v5" />
            <path d="M8.5 2.5q-5 4.255-5 8.5t3 7.5m11 0h-5v-5" />
            <path d="M12.5 18.5q5-4.255 5-8.5t-3-7.5" />
          </g>
        </svg>
      ),
    },
    {
      text: "Calender",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.5 4h-3V2.5a.5.5 0 0 0-1 0V4h-7V2.5a.5.5 0 0 0-1 0V4h-3A2.503 2.503 0 0 0 2 6.5v13A2.503 2.503 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 4M21 19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5V11h18zm0-9.5H3V6.5C3 5.672 3.67 5 4.5 5h3v1.5a.5.5 0 0 0 1 0V5h7v1.5a.5.5 0 0 0 1 0V5h3A1.5 1.5 0 0 1 21 6.5z"
          />
        </svg>
      ),
    },
    {
      text: "Drafts & Favorites",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor">
            <path d="M19.5 11c0 5.018-5.488 8.403-7.075 9.276a.87.87 0 0 1-.85 0C9.988 19.403 4.5 16.018 4.5 11c0-4.5 3.634-7.5 7.5-7.5c4 0 7.5 3 7.5 7.5Z" />
            <path d="m8.286 11.786l3.457 3.457c.121.121.182.182.257.182s.136-.06.257-.182l3.457-3.457c.748-.748.864-1.92.277-2.8c-.915-1.371-2.954-1.301-3.772.13l-.141.248a.09.09 0 0 1-.156 0l-.141-.247c-.818-1.432-2.857-1.502-3.772-.13c-.587.88-.47 2.051.277 2.799Z" />
          </g>
        </svg>
      ),
    },
    {
      text: "Subscription Plans",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 2048 2048"
        >
          <path
            fill="currentColor"
            d="M1920 1276q1 2 1 29t1 69t0 97t0 111t-1 114t0 102t-1 79t0 43H0v-121q0-47-1-103t0-113t-1-112t0-96t0-70t2-29L383 128h385v128H475L134 1280h418l128 256h560l128-256h418L1445 256h-293V128h385zm-128 132h-344l-128 256H600l-128-256H128v384h1664zM896 933V0h128v933l294-293l90 90l-448 448l-448-448l90-90z"
          />
        </svg>
      ),
    },
  ];

  const [sidebarShown, setSidebarShown] = useState(false);

  const handleSidebar = () => {
    setSidebarShown(!sidebarShown);
  };

  return (
    <>
      <main>
        <header className="border-b">
          <nav className="flex items-center justify-between w-full max-w-screen-2xl px-6 mx-auto py-1">
            <div className="block md:hidden" onClick={handleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </div>

            <Link to={"./"}>
              {" "}
              <img src={logo} alt="Logo" className="w-40 h-16 mx-auto" />
            </Link>
            <div className="flex items-center gap-5">
              <span className="cursor-pointer text-grey-500 hover:text-semibold transition-all ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z"
                  />
                </svg>
              </span>
              <span className="cursor-pointer text-grey-500 hover:font-semibold transition-all ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor" fill-rule="evenodd" clipRule="evenodd">
                    <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                    <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                  </g>
                </svg>
              </span>
            </div>
          </nav>
        </header>

        {/* {Dashboard Content} */}
        <section className="flex relative justify-center w-full gap-4 max-w-screen-2xl mx-auto">
          <aside
            className={`absolute h-full w-80 md:w-[22%] md:h-auto border border-gray-200 border-t-0 bg-gray-50 ${
              sidebarShown ? "left-0" : "-left-96"
            } md:relative md:left-0 transition-all duration-300`}
          >
            <div className="pt-4">
              <ul className="space-y-4 mb-8 mt-4 text-lg">
                {items.map((item, index) => (
                  <Link
                    to={`/Dashboard/${item.navigate}`}
                    key={index}
                    className="cursor-pointer relative w-full flex items-center gap-2 py-5 hover:text-red-400 hover:bg-gray-200 transition-all duration-200 z-1000 "
                  >
                    <div className="z-10 pl-6">{item.svg}</div>
                    {item.text}
                  </Link>
                ))}
              </ul>
            </div>
          </aside>
          {/* {Nested Routes} */}
          <RouteDash/>
        </section>
      </main>
    </>
  );
};

export const RouteDash = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CardMaker/>} />
      </Routes>
      <Outlet />
    </>
  );
};
