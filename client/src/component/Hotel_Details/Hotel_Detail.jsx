import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";

const Hotel_Detail = () => {
  return (
    <div className="outer_container px-[90px] py-[130px] flex flex-col">
      <div className="heading_part flex flex-col items-start gap-4">
        <div className="flex flex-row gap-[10px] items-center">
          <h1 className="text-3xl font-semibold">The Emberwood Inn</h1>
          <sub>(single bed)</sub>
          <div className="bg-black text-white text-[12px] p-[10px] rounded-2xl">
            20% off
          </div>
        </div>
        <div className="flex flex-row items-center gap-[15px]">
          <img
            src="https://www.clipartmax.com/png/small/324-3245937_motorhomes-in-greece-orange-5-star-png.png"
            alt="Motorhomes In Greece - Orange 5 Star Png @clipartmax.com"
            className="h-[20px] w-[100px]"
          ></img>
          <p className="text-[15px]">0 reviews</p>
        </div>
        <div className="flex flex-row justify-start items-center pl-3 pr-3 gap-0.5">
          <FaLocationDot className="inline-block mr-2 text-gray-400" />
          <span className="text-gray-500 text-center">Delhi, India</span>
        </div>
        <div className="w-[85%] h-[300px] gap-4 grid grid-cols-4 grid-rows-2 m-auto">
          <div className="flex items-center justify-center border-1 border-black rounded-[15px] row-span-2 col-span-2">
            <img src="./room_1.jpg" alt="Error" className="h-[100%] w-[100%] rounded-[15px]"/>
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img src="./room_2.jpg" alt="Error" className="h-[100%] w-[100%] rounded-[15px]"/>
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img src="./room3.webp" alt="Error" className="h-[100%] w-[100%] rounded-[15px]"/>
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img src="./room_4.jpg" alt="Error" className="h-[100%] w-[100%] rounded-[15px]"/>
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img src="./room_5.webp" alt="Error" className="h-[100%] w-[100%] rounded-[15px]"/>
          </div>
        </div>
        <div className="w-[90%] flex flex-row justify-between items-center m-auto">
          <div className="flex flex-col gap-[25px]">
            <h1 className="text-3xl">Experience Luxury like never before.</h1>
            <div className="flex flex-row gap-2 justify-center items-center">
              <div className="p-[10px] border-1 border-black flex justify-center items-center gap-[10px] rounded-2xl" style={{
                backgroundColor:"rgb(203, 210, 223)"
              }}>
               <FaWifi/>
               <p>Free Breakfast</p>
              </div>
              <div className="p-[10px] border-1 border-black flex justify-center items-center gap-[10px] rounded-2xl" style={{
                backgroundColor:"rgb(203, 210, 223)"
              }}>
               <MdFreeBreakfast/>
               <p>Free Wifi</p>
              </div>
              <div className="p-[10px] border-1 border-black flex justify-center items-center gap-[10px] rounded-2xl" style={{
                backgroundColor:"rgb(203, 210, 223)"
              }}>
               <MdOutlineCleaningServices/>
               <p>Free Room Services</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">3000/Night</h1>
          </div>
        </div>
        <hr className="text-grey w-[90%] h-[10px] my-[20px] mx-auto"/>
      </div>
      <div className="middle_part flex flex-col items-center gap-5">
        <div className="check w-[90%] h-[100px] border-1 border-gray-500 rounded-2xl p-[30px] flex justify-between items-center" style={{
          boxShadow:"5px 0px 15px gray"
        }}>
         <div className="flex flex-row gap-6 justify-center items-center">
            <div className="flex flex-col gap-1 items-center border-r-2 border-gray-500 px-[20px]">
              <p className="text-17px">Check In :</p>
              <p className="text-gray-500 text-[13px]">Add Date</p>
            </div>
            <div className="flex flex-col gap-1 items-center border-r-2 border-gray-500 px-[20px]">
              <p className="text-17px">Check Out :</p>
              <p className="text-gray-500 text-[13px]">Add Date</p>
            </div>
            <div className="flex flex-col gap-1 items-center px-[20px]">
              <p className="text-17px">Guests</p>
              <p className="text-gray-500 text-[13px]">0 guests</p>
            </div>
         </div>
         <div>
          <button className="h-[50px] w-[300px] rounded-2xl bg-black text-white">Check For Availability</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel_Detail;
