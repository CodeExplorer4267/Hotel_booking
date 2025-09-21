import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { MdFreeBreakfast } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import HotelMap from "../Map/Map";
const Hotel_Detail = () => {
  const hotelLat = 34.0522;
  const hotelLng = -118.2437;

  

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
            <img
              src="./room_1.jpg"
              alt="Error"
              className="h-[100%] w-[100%] rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img
              src="./room_2.jpg"
              alt="Error"
              className="h-[100%] w-[100%] rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img
              src="./room3.webp"
              alt="Error"
              className="h-[100%] w-[100%] rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img
              src="./room_4.jpg"
              alt="Error"
              className="h-[100%] w-[100%] rounded-[15px]"
            />
          </div>
          <div className="flex items-center justify-center border-1 border-black rounded-[15px]">
            <img
              src="./room_5.webp"
              alt="Error"
              className="h-[100%] w-[100%] rounded-[15px]"
            />
          </div>
        </div>
        <div className="w-[90%] flex flex-row justify-between items-center m-auto">
          <div className="flex flex-col gap-[25px]">
            <h1 className="text-3xl">Experience Luxury like never before.</h1>
            <div className="flex flex-row gap-2 justify-center items-center">
              <div
                className="p-[10px] border-1 border-black flex justify-center items-center gap-[10px] rounded-2xl"
                style={{
                  backgroundColor: "rgb(203, 210, 223)",
                }}
              >
                <FaWifi />
                <p>Free Breakfast</p>
              </div>
              <div
                className="p-[10px] border-1 border-black flex justify-center items-center gap-[10px] rounded-2xl"
                style={{
                  backgroundColor: "rgb(203, 210, 223)",
                }}
              >
                <MdFreeBreakfast />
                <p>Free Wifi</p>
              </div>
              <div
                className="p-[10px] border-1 border-black flex justify-center items-center gap-[10px] rounded-2xl"
                style={{
                  backgroundColor: "rgb(203, 210, 223)",
                }}
              >
                <MdOutlineCleaningServices />
                <p>Free Room Services</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold">3000/Night</h1>
          </div>
        </div>
        <hr className="text-grey w-[90%] h-[10px] my-[20px] mx-auto" />
      </div>
      <div className="middle_part flex flex-col items-center gap-7">
        <div
          className="check w-[90%] h-[100px] border-1 border-gray-500 rounded-2xl p-[30px] flex justify-between items-center"
          style={{
            boxShadow: "5px 0px 15px gray",
          }}
        >
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
            <button className="h-[50px] w-[300px] rounded-2xl bg-black text-white">
              Check For Availability
            </button>
          </div>
        </div>
        <div className="properties w-[100%] h-[400px] px-[70px] py-[70px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 items-center">
              <FaHome size={20} />
              <div className="flex flex-col gap-0.1">
                <p className="text-[17px] font-semibold">Clean Room</p>
                <p className="text-[14px] text-gray-500 font-semibold">
                  You will have the clean room for you.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <FaCheckCircle size={20} />
              <div className="flex flex-col gap-0.1">
                <p className="text-[17px] font-semibold">Enhanced Clean</p>
                <p className="text-[14px] text-gray-500 font-semibold">
                  This host is committed to Staybnb's cleaning process.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <IoLocation size={20} />
              <div className="flex flex-col gap-0.1">
                <p className="text-[17px] font-semibold">Great Location</p>
                <p className="text-[14px] text-gray-500 font-semibold">
                  90% of the recent guests gave the location a 5 star rating.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <FaHeart size={20} />
              <div className="flex flex-col gap-0.1">
                <p className="text-[17px] font-semibold">
                  Great check-in experience
                </p>
                <p className="text-[14px] text-gray-500 font-semibold">
                  100% of our recent guests gave the checking process a 5 star
                  rating.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-gray-500 w-[90%] h-[10px] mx-auto" />
        <div className="w-[90%]">
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
        </div>
        <hr className="text-gray-500 w-[90%] h-[10px] mx-auto" />
      </div>
      <div className="location_review_part flex flex-col mt-[12px]">
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-black font-bold text-3xl">
            Hotel Location
          </h2>
          <HotelMap
            lat={hotelLat}
            lng={hotelLng}
            hotelName="The Emberwood Inn."
          />
          <div className="flex flex-row justify-center items-center pl-3 pr-3 gap-0.5 w-[100%]">
            <FaLocationDot
              className="inline-block mr-2 text-gray-400"
              size={20}
            />
            <span className="text-gray-500 text-[20px]">Delhi, India</span>
          </div>
          <p className="text-center text-gray-500 font-bold">
            It's like a home away from home.
          </p>
        </div>
        <div className="flex flex-row w-[100%] h-[400px] border-1 justify-center items-center p-[20px] mt-[15px]">
          <div className="h-[25%] w-[50%] border-2 flex flex-row items-center gap-4 p-[10px] rounded-[16px]">
            <img
              src="./client_2.jpeg"
              alt="Error"
              className="h-[50px] w-[40px] rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h1>Hosted By Emma</h1>
              <div className="flex flex-row justify-evenly items-center gap-5">
                <p>200+ Reviews</p>
                <p>Response Rate:100%</p>
                <p>Response Time:30min</p>
              </div>
            </div>
            <button className="h-[30px] w-[120px] bg-black text-white p-[3px] rounded-2xl">Contact Now</button>
          </div>
          <div className="h-[100%] w-[50%] flex flex-col gap-4 justify-end items-center">
             <div className="review_area fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
               <form className="flex flex-col gap-4 items-center border-1 rounded-2xl p-[10px] absolute top-[285%] left-[40%] w-[300px] h-[300px] bg-white">
                <h1>Write a Comment :</h1>
                   <textarea className="border-1 p-2 rounded resize-none w-[100%] h-[60%]"
                   rows={3}
                   placeholder="Enter your review"
                   
                   >
                   </textarea>
                   <button className="h-[30px] w-[120px] bg-black rounded-2xl p-[3px] text-white">Create</button>
               </form> 
             </div>
             <div>
              <button className="h-[30px] w-[140px] bg-black rounded-2xl p-[3px] text-white" >Create a review</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel_Detail;
