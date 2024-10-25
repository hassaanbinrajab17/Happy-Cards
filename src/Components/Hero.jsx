import React from "react";
import bg from "../images/landing-main.webp";
import pic1 from "../images/pic1.webp";

// import student1 from "../images/student1.webp";
// import student2 from "../images/student2.webp";
// import student3 from "../images/student3.webp";

// import img1 from '../images/img1.webp'
// import img2 from '../images/img2.webp'
// import img3 from '../images/img3.webp'
// import img4 from '../images/img4.webp'
// import img5 from '../images/img5.webp'
// import img6 from '../images/img6.webp'
// import img7 from '../images/img7.webp'
// import img8 from '../images/img8.webp'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/style.css'

import Navbar from "../Components/Navbar";
import { Data } from "../Data";
import { DataCard } from "../Data";
import { TestimonialsData } from "../Data";
const Hero = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="relative flex flex-col h-[80vh] justify-center">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 flex flex-col items-center  mx-auto h-1/2 w-4/5">
            <h1 className="text-white text-6xl md:6xl sm:9xl text-center ">
              Heartfelt MOMENTS MADE EASY
            </h1>
            <p className="mt-10 text-2xl text-white">
              AI Powered Greeting Cards With A Human Touch
            </p>
            <div className="mt-10 flex justify-between gap-44">
              <button className="text-white text-xl bg-red-400 rounded-md py-2 font-semibold px-12 hover:bg-white hover:text-red-400 transition-all duration-200">
                Subscribe
              </button>
              <button className="text-red-400 border border-red-400 text-xl font-semibold bg-white rounded-md py-2 px-12 hover:bg-red-400 hover:text-white transition-all duration-200">
                Generate Card
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // How it Works */}
      <section>
        <div className="flex items-center h-auto my-16 md-16 md:my-28 px-4 md:px-0">
          <div className="max-w-screen text-center w-full">
            <h2 className="text-4xl md:text-5xl font-semibold mb-5">
              How it Works
            </h2>
            <hr className="h-[3px] w-[10%] md:w-[10%] mx-auto rounded-lg bg-red-400" />
            <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-2 md:gap-8 mt-12 md:mt-20">
              {Data.map((item, index) => (
                <div
                  key={index}
                  className="mx-auto w-4/5 sm:w-full p-3 md:p-5 cursor-default h-68 sm:h-76"
                >
                  <div className="mx-auto p-0 md:p-5 w-fit rounded-full text-gray-500">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold h-10 sm:h-12 mt-4 text-gray-500">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* {Real Greeting Cards} */}
      <section className="flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center sm:flex-row justify-center gap-0 md:w-full">
          <article className="w-full border">
            <span>
              <img
                src={pic1}
                alt=""
                className="h-[80vh] md:h-[60vh] w-full object-cover"
              />
            </span>
          </article>

          <article className="w-full px-2 py-10 sm:py-0 sm:pb-10">
            <div className="flex flex-col gap-5 sm:gap-10">
              <span>
                <h2 className="text-3xl md:text-5xl font-semibold mb-2 sm:mb-5">
                  {" "}
                  Real Greeting Cards
                </h2>
                <hr className="h-[3px] w-[20%] rounded-lg bg-red-400" />
              </span>
              <p className="text-base md:text-lg ">An Amazing collection</p>
              <p className="text-red-400 text-lg md:text-2xl font-normal ">
                Get our special offer -30% off
              </p>
              <button className="w-fit md:w-[80%] lg:w-[40%] hover:bg-red-400 hover:text-white font-semibold rounded-full py-3 px-7 border-2 bg-transparent text-red-400 transition-all duration-200">
                Get Started Today
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* {What do you get?} */}
      <section className="flex items-center justify-center h-auto my-16 md:my-12">
        <div className="max-w-screen-xl text-center w-full">
          <span>
            <h2 className="text-4xl md:text-5xl pb-5 font-semibold ">
              What Do You Get?
            </h2>
            <hr className="h-[3px] w-[10%] md:w-[15%] mx-auto rounded-lg bg-red-400" />
          </span>
          <article className="flex flex-col sm:flex-row items-center g-12 sm:gap-10 mt-10 md:mt-20">
            {DataCard.map((item, index) => (
              <div
                key={index}
                className="flex w-4/5 sm:w-full items-center flex-col gap-12 sm:gap-5 md:gap-10 md:mt-20"
              >
                <div className="mx-auto p-0 md:p-5 w-fit rounded-full text-gray-600">
                  {item.icon}
                </div>
                <h3 className=" text-xl md:text-2xl font-semibold mb-2 text-gray-600">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* {Testimonials} */}
      <section className="flex items-center justify-center bg-slate-50">
        <div className="flex items-center justify-center flex-col gap-12 sm:gap-20 max-w-screen-xl text-center w-full py-16 md:py-20">
          <span className="w-full">
            <h2 className="text-4xl md:text-5xl font-semibold mb-0 sm:mb-5">
              Testimonials
            </h2>
            <hr className="h-[3px] w-[10%] mx-auto rounded-lg bg-red-400" />
          </span>
          <article className="hidden sm:flex items-center sm:items-stretch justify-center gap-16 sm:gap-5 md:gap-10 p-5 w-full">
            {TestimonialsData.map((item, index) => (
              <div
                key={index}
                className="height-here text-center w-4/5 sm:w-1/2 md:w-2/5 py-10 bg-white px-5 hover:shadow-md cursor-default hover:rounded-md hover:shadow-gray-300 hover:border-gray-300 border border-transparent">
                <div className="rounded-full relative">
                  <img
                    className="absolute top-16 left-[28%] md:top-20 sm:left-[1/4] md:left-1/3 rounded-full w-32 sm:w-24 md:w-28 h-32 sm:h-24 md:h-28 "
                    src={item.student}
                    alt=""
                  />
                </div>
                <article>
                  <span className="flex justify-center text-red-400">{item.icon}</span>
                  <p className="text-base sm:text-sm md:text-base my-4 ">
                    {item.desc}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mb-0 sm:mb-2 mt-5 sm:mt-10">
                    {item.title}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-normal">{item.title2}</h4>
                </article>
              </div>
            ))}
          </article>
        </div>
      </section>

{/* {Trending Cards} */}
<section className="flex items-center justify-center">
  <div className="flex items-center justify-center flex-col gap-16 sm:gap-20 max-w-screen-2xl text-center w-full py-20 px-5">
    <span className="w-full">
      <h2 className="text-4xl md:text-5xl font-semibold mb-5 ">Trending Cards</h2>
      <hr className="h-[3px] w-[10%] mx-auto rounded-lg bg-red-400"/>
    </span>
    <article className="w-11/12">
    {/* <Carousel  */}
    {/* responsive={responsive}
    inifnite={true}
    partialVisible={false}
    dosListClass='custom-dot-list-style'>
{[img1, img2, img3, img4, img5, img6, img7, img8,].map((imageUrl, index)=> {
  return(
    <div className="shadow-md shadow-gray-300 border mx-5 my-0 sm:my-4 py-5 " key={index}>
      <img src={imageUrl} alt="movie" className="w-full rounded-md"/>
    </div>
  )
})} */}
    {/* </Carousel> */}
    </article>
     </div>

</section>



{/* {FAQ Section} */}
<section className="bg-gray-900">
  <div className="container px-6 py-12 mx-auto">
    <h1 className="text-2xl font-semibold lg:text-3xl text-white">Frequently asked questions</h1>
    <div className="mt-8 space-y-8 lg:mt-12">
      <div className="p-8 rounded-lg bg-gray-800 cursor-pointer" onClick={() => dispatchEvent({type: 'Toggle-Text1'})}>
        <button className="flex items-center justify-between w-full">
          <h1 className="font-semibold text-white text-start ">How i can pay for my appointment?</h1>
          <span className="text-gray-200">
            {/* {state.textShown1? 
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
</svg>
          </span>  
          :
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M19 12.998H5v-2h14z" />
</svg>
          </span>
} */}
          </span>
        </button>
      </div>
    </div>
  </div>
</section>


    </>
  );
};
export default Hero;
