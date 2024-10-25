import React from "react";
const CardMaker = () => {
  return (
    <>
      <div className="mx-auto gap-6 pr-5 w-11/12 md:w-[75%] pt-3 mb-10">
        <section className="flex items-center flex-col gap-5">
          <div className="flex items-center justify-center flex-col gap-4 w-full">
            <h1 className="text-gray-700 text-2xl self-start font-bold font-text-shadow-italic">
              Tell us about them
            </h1>
            <div className="flex-col border py-5 px-6 sm:flex items-center sm:items-start gap-4 justify-between w-full bg-gray-100 border-gray-700 rounded-md">
              <div className="flex items-center justify-center border text-gray-700 border-gray-400 h-36 w-36 rounded-md bg-white cursor-pointer hover:opacity-70 font-text-shadow-italic text-xl">
                Upload Photo
              </div>
              <div className="flex items-start justify-center gap-10">
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-500 bg-transparent border-b border-gray-500 font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Birthday"
                    className="border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-500 bg-transparent border-b border-gray-500 font-semibold"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Relationship"
                    className="border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-500 bg-transparent border-b border-gray-500 placeholder:font-text-shadow-italic font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>

          <main className="flex items-center justify-center flex-col w-full gap-14">
            <div className="w-full flex items-center justify-between mt-5">
              <button className="w-fit md:w-[30%] bg-white border-red-300 border text-red-400 rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-red-400 hover:text-white transition-all duration-200 font-semibold">
                Male
              </button>
              <button className="w-fit md:w-[30%] bg-white border-red-300 border text-red-400 rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-red-400 hover:text-white transition-all duration-200 font-semibold">
                Female
              </button>
            </div>

            <div className="flex flex-col self-start w-full gap-4">
              <h1 className="text-grey-700 text-2xl font-bold">
                Character Traits
              </h1>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kind",
                  "Loving",
                  "Generous",
                  "Funny",
                  "Adventurous",
                  "Compassionate",
                  "Spontaneous",
                  "Patient",
                  "Gentle",
                ].map((item, index) => (
                  <button
                    className="flex items-center justify-center w-[15%]  rounded-md text-red-400 gap-1 py-2 px-3 hover:bg-pink-opacity hover:border-red-400 transition-all duration-150 border border-pink-utility mb-1 font-text-shadow-italic text-xl font-semibold"
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between border py-4 px-6  w-full bg-gray-100 border-gray-700 rounded-md">
              <h1 className="text-gray-700 text-2xl font-bold">
                Occasion
              </h1>
            </div>

            <div className="flex flex-col self-start w-full gap-4">
              <h1 className="text-gray-700 text-2xl font-bold">Address</h1>
              <div className="flex items-center justify-between flex-col border py-4 px-6 w-full bg-gray-100 border-gray-700 rounded-md g8">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Street Address"
                    className=" border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-full placeholder:font-text-shadow-italic font-semibold"
                  />
                </div>
                <div className="flex items-center gap-4 justify-between w-full">
                  <input
                    type="text"
                    placeholder="City"
                    className="border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-[25%] placeholder:font-text-shadow-italic font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-[25%] placeholder:font-text-shadow-italic font-semibold"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="border-0 outline-none py-1 px-1 placeholder:text-xl placeholder:text-gray-700 bg-transparent border-b border-gray-700 w-[25%] placeholder:font-text-shadow-italic font-semibold"
                  />
                </div>
              </div>
<div className="w-full flex items-center justify-between mt-5 ">
  <button className="w-fit md:w-[30%] border bg-white border-red-400 text-red-400 rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-red-400 hover:text-white transition-all duration-200 font-semibold">Save</button>
  <button className="w-fit md:w-[30%] border bg-white border-red-400 text-red-400 rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-red-400 hover:text-white transition-all duration-200 font-semibold">Cancel</button>
  <button className="w-fit md:w-[30%] border bg-white border-red-400 text-red-400 rounded-md py-2 px-4 md:px-2 text-lg md:text-xl hover:bg-red-400 hover:text-white transition-all duration-200 font-semibold">Save & Generate</button>
</div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default CardMaker;
