import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import roomImg1 from "../../assets/roomImg1.png";
import roomImg2 from "../../assets/roomImg2.png";
import roomImg3 from "../../assets/roomImg3.png";
import roomImg4 from "../../assets/roomImg4.png";
import { assets } from "../../assets/assets";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Home = () => {
  return (
    <>
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
              Unparalleled luxury and comfort await at the world's most
              exclusive hotels and resorts. Start your journey today.
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
              <FaSearch className="text-white" />
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="featuredHotel p-10 flex flex-col gap-6 w-[100%]"
        style={{
          backgroundColor: "rgb(223, 255, 254)",
        }}
      >
        <h1 className="font-bold text-3xl text-black text-center">
          Featured Hotels
        </h1>
        <p className="text-[15px] text-center">
          Explore our handpicked selection of luxury hotels and resorts.
        </p>
        <div className="flex flex-row gap-8 justify-center items-center">
          <div className="h-[300px] w-[270px] border-black border-2 rounded-[20px] flex flex-col">
            <img
              src={roomImg1}
              alt=""
              className="h-[55%] w-[100%] rounded-tl-[20px] rounded-tr-[20px]"
            />
            <div className="flex flex-row justify-between p-3">
              <h2 className="text-[17px]">The Emberwood Inn</h2>
              <div className="flex flex-row gap-1 items-center">
                <img src={assets.starIconFilled} alt="" />
                <span className="font-bold">4.6</span>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center pl-3 pr-3 gap-0.5">
               <FaLocationDot className="inline-block mr-2 text-gray-400" />
               <span className="text-gray-500 text-center">Delhi, India</span>
            </div>
            <div className="flex flex-row justify-between items-center p-3">
              <div className="flex flex-row gap-1 items-center">
                <FaIndianRupeeSign className="inline-block" />
                <span className="font-bold">3500</span>
                <span className="text-gray-500">/night</span>
              </div>
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">View Details</button>
            </div>
          </div>
          <div className="h-[300px] w-[270px] border-black border-2 rounded-[20px] flex flex-col">
            <img
              src={roomImg2}
              alt=""
              className="h-[55%] w-[100%] rounded-tl-[20px] rounded-tr-[20px]"
            />
            <div className="flex flex-row justify-between p-3">
              <h2 className="text-[17px]">The Veridian Suite</h2>
              <div className="flex flex-row gap-1 items-center">
                <img src={assets.starIconFilled} alt="" />
                <span className="font-bold">4.5</span>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center pl-3 pr-3 gap-0.5">
               <FaLocationDot className="inline-block mr-2 text-gray-400" />
               <span className="text-gray-500 text-center">Kolkata, India</span>
            </div>
            <div className="flex flex-row justify-between items-center p-3">
              <div className="flex flex-row gap-1 items-center">
                <FaIndianRupeeSign className="inline-block" />
                <span className="font-bold">3000</span>
                <span className="text-gray-500">/night</span>
              </div>
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">View Details</button>
            </div>
          </div>
          <div className="h-[300px] w-[270px] border-black border-2 rounded-[20px] flex flex-col">
            <img
              src={roomImg3}
              alt=""
              className="h-[55%] w-[100%] rounded-tl-[20px] rounded-tr-[20px]"
            />
            <div className="flex flex-row justify-between p-3">
              <h2 className="text-[17px]">Aura Grand Hotel</h2>
              <div className="flex flex-row gap-1 items-center">
                <img src={assets.starIconFilled} alt="" />
                <span className="font-bold">4.9</span>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center pl-3 pr-3 gap-0.5">
               <FaLocationDot className="inline-block mr-2 text-gray-400" />
               <span className="text-gray-500 text-center">Pune, India</span>
            </div>
            <div className="flex flex-row justify-between items-center p-3">
              <div className="flex flex-row gap-1 items-center">
                <FaIndianRupeeSign className="inline-block" />
                <span className="font-bold">4000</span>
                <span className="text-gray-500">/night</span>
              </div>
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">View Details</button>
            </div>
          </div>
          <div className="h-[300px] w-[270px] border-black border-2 rounded-[20px] flex flex-col">
            <img
              src={roomImg4}
              alt=""
              className="h-[55%] w-[100%] rounded-tl-[20px] rounded-tr-[20px]"
            />
            <div className="flex flex-row justify-between p-3">
              <h2 className="text-[17px]">The Meridian Lodge</h2>
              <div className="flex flex-row gap-1 items-center">
                <img src={assets.starIconFilled} alt="" />
                <span className="font-bold">4.7</span>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center pl-3 pr-3 gap-0.5">
               <FaLocationDot className="inline-block mr-2 text-gray-400" />
               <span className="text-gray-500 text-center">Hyderabad, India</span>
            </div>
            <div className="flex flex-row justify-between items-center p-3">
              <div className="flex flex-row gap-1 items-center">
                <FaIndianRupeeSign className="inline-block" />
                <span className="font-bold">3700</span>
                <span className="text-gray-500">/night</span>
              </div>
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
