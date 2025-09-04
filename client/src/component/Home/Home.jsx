import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div
      className="w-full h-[750px] bg-cover"
      style={{
        backgroundImage: "url('./heroImage.png')",
      }}
    >
      <div className="innercontainer w-full h-[100%] flex flex-col justify-center p-[140px] gap-[30px]">
        <div
          className="h-[35px] w-[250px] pl-[11px] pt-[5px] bg-opacity-50 rounded-2xl"
          style={{
            backgroundColor: "rgba(123, 179, 238, 0.74)",
          }}
        >
          <p className="text-white">The Ultimate hotel experience</p>
        </div>
        <div className="w-[500px]">
          <h1 className="text-5xl text-white font-bold leading-13">
            Discover Your Perfect Gateway Destination
          </h1>
        </div>
        <div className="w-[500px]">
          <p className="text-white text-[15px]">
            Unparalleled luxury and comfort await at the world's most exclusive
            hotels and resorts. Start your journey today.
          </p>
        </div>
        <div className="w-[800px] h-[60px] bg-white rounded-2xl flex items-center justify-evenly p-4 gap-[50px]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-1">
              <FaLocationDot className="inline-block mr-2 text-gray-400" />
              <span className="text-gray-500 text-center">Location</span>
            </div>
            <p className="text-gray-600">Delhi</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-1">
              <MdDateRange className="inline-block mr-2 text-gray-400" />
              <span className="text-gray-500 text-center">Check In</span>
            </div>
            <p className="text-gray-600">15-03-2025</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-1">
              <MdDateRange className="inline-block mr-2 text-gray-400" />
              <span className="text-gray-500 text-center">Check Out</span>
            </div>
            <p className="text-gray-600">20-03-2025</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-1">
              <MdDateRange className="inline-block mr-2 text-gray-400" />
              <span className="text-gray-500 text-center">Guests</span>
            </div>
            <p className="text-gray-600">2</p>
          </div>
          <button className="h-[40px] w-[120px] bg-black text-white rounded-[10px] flex flex-row justify-center items-center">
            <FaSearch className="text-white"/>
            <span className="ml-2">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
