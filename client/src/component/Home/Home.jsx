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
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const navigate = useNavigate();
  const handleButtonAllHotel = () => {
    navigate("/hotels");
  };
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
        className="featuredHotel p-10 flex flex-col gap-8 w-[100%]"
        style={{
          backgroundColor: "white",
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
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">
                View Details
              </button>
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
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">
                View Details
              </button>
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
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">
                View Details
              </button>
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
              <span className="text-gray-500 text-center">
                Hyderabad, India
              </span>
            </div>
            <div className="flex flex-row justify-between items-center p-3">
              <div className="flex flex-row gap-1 items-center">
                <FaIndianRupeeSign className="inline-block" />
                <span className="font-bold">3700</span>
                <span className="text-gray-500">/night</span>
              </div>
              <button className="bg-black text-white rounded-[10px] w-[105px] text-[14px] px-[7px] py-[3px]">
                View Details
              </button>
            </div>
          </div>
        </div>
        <button
          className="h-[40px] w-[180px] bg-black text-white rounded-[16px]"
          style={{
            alignSelf: "center",
          }}
          onClick={handleButtonAllHotel}
        >
          View all Hotels
        </button>
      </div>
      <hr className="border-gray-500 w-[80%] mx-auto"/>
      <div className="exclusive_offer h-[600px] w-[100%] flex flex-col pt-20 pb-20 px-35 gap-[20px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">Exclusive Offers</h1>
          <button className="bg-black text-white rounded-[10px] w-[150px] h-[30px] text-[14px] px-[7px] py-[3px]">
            <div className="flex flex-row justify-evenly items-center gap-2">
              <p className="text-white">View All Offers</p>
              <FaArrowRightLong className="text-white" />
            </div>
          </button>
        </div>
        <p className="text-gray-500">
          Take advantage of our limited time offers and special packages to
          enhance your <br /> stay and create unforgettable memories.
        </p>
        <div className="flex flex-row gap-[60px]">
          <div
            className="h-[250px] w-[300px] rounded-[20px] p-[15px] flex flex-col gap-4"
            style={{
              backgroundImage: "url('./exclusiveOfferCardImg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-[30px] w-[90px] rounded-2xl bg-white pl-[10px] pt-[3px] font-bold">
              <p>25 % off</p>
            </div>
            <h2 className="text-white text-lg font-bold">
              Summer Escape Package
            </h2>
            <p className="text-white text-[14px]">
              Enjoy a complimentary night and daily breakfast{" "}
            </p>
            <p className="text-white">Expires in Aug 31</p>
            <button className="bg-white rounded-[10px] w-[150px] h-[30px] text-[14px] px-[7px] py-[3px]">
              <div className="flex flex-row justify-evenly items-center gap-2">
                <p className="text-black">View All Offers</p>
                <FaArrowRightLong className="text-black" />
              </div>
            </button>
          </div>
          <div
            className="h-[250px] w-[300px] rounded-[20px] p-[15px] flex flex-col gap-4"
            style={{
              backgroundImage: "url('./exclusiveOfferCardImg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-[30px] w-[90px] rounded-2xl bg-white pl-[10px] pt-[3px] font-bold">
              <p>20 % off</p>
            </div>
            <h2 className="text-white text-lg font-bold">Romantic Gateway</h2>
            <p className="text-white text-[14px]">
              Special Couples package including spa treatment{" "}
            </p>
            <p className="text-white">Expires in Sept 20</p>
            <button className="bg-white rounded-[10px] w-[150px] h-[30px] text-[14px] px-[7px] py-[3px]">
              <div className="flex flex-row justify-evenly items-center gap-2">
                <p className="text-black">View All Offers</p>
                <FaArrowRightLong className="text-black" />
              </div>
            </button>
          </div>
          <div
            className="h-[250px] w-[300px] rounded-[20px] p-[15px] flex flex-col gap-3"
            style={{
              backgroundImage: "url('./exclusiveOfferCardImg1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-[30px] w-[90px] rounded-2xl bg-white pl-[10px] pt-[3px] font-bold">
              <p>30 % off</p>
            </div>
            <h2 className="text-white text-lg font-bold">Early Bird Special</h2>
            <p className="text-white text-[14px]">
              Book 60 day in advance and save on your stay at any of our luxury
              properties worldwide
            </p>
            <p className="text-white">Expires in Oct 2</p>
            <button className="bg-white rounded-[10px] w-[150px] h-[30px] text-[14px] px-[7px] py-[3px]">
              <div className="flex flex-row justify-evenly items-center gap-2">
                <p className="text-black">View All Offers</p>
                <FaArrowRightLong className="text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 w-[80%] mx-auto"/>
      <div className="guest_say flex flex-col items-center pt-20 pb-20 px-35 gap-[30px] h-[500px] w-[100%]">
        <h1 className="text-black text-3xl font-bold">What Our Guests Say</h1>
        <p className="text-gray-500">
          Discover why discerning travelers choose QuickStay for their luxury
          accommodations around the world.
        </p>
        <div className="flex flex-row gap-[20px]">
          <div className="h-[200px] w-[300px] rounded-2xl p-[15px] flex flex-col gap-2 border-1 border-gray-500">
            <div className="flex flex-row gap-2">
              <img
                src="./client_1.jpeg"
                alt=""
                className="rounded-full h-[50px] w-[60px]"
              />
              <div className="flex flex-col">
                <p className="text-black font-bold">Abhishek Kumar</p>
                <p className="text-gray-500">Delhi,India</p>
              </div>
            </div>
            <img src="https://www.clipartmax.com/png/small/324-3245937_motorhomes-in-greece-orange-5-star-png.png" alt="Motorhomes In Greece - Orange 5 Star Png @clipartmax.com" className="h-[20px] w-[100px]"></img>
            <p className="text-[14px] text-gray-500 font-bold">"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay  provides."</p>
          </div>
          <div className="h-[200px] w-[300px] rounded-2xl p-[15px] flex flex-col gap-2 border-1 border-gray-500">
            <div className="flex flex-row gap-2">
              <img
                src="./client_2.jpeg"
                alt=""
                className="rounded-full h-[50px] w-[50px]"
              />
              <div className="flex flex-col">
                <p className="text-black font-bold">Sneha Das</p>
                <p className="text-gray-500">Kolkata, West Bengal, India</p>
              </div>
            </div>
            <img src="https://www.clipartmax.com/png/small/324-3245937_motorhomes-in-greece-orange-5-star-png.png" alt="Motorhomes In Greece - Orange 5 Star Png @clipartmax.com" className="h-[20px] w-[100px]"></img>
            <p className="text-[13px] text-gray-500 font-bold">“Great experience! The location was perfect, and the service exceeded my expectations. Easy check-in, cozy atmosphere, and great value for money. Will definitely book again.”</p>
          </div>
          <div className="h-[200px] w-[300px] rounded-2xl p-[15px] flex flex-col gap-2 border-1 border-gray-500">
            <div className="flex flex-row gap-2">
              <img
                src="./client_3.jpeg"
                alt=""
                className="rounded-full h-[50px] w-[60px]"
              />
              <div className="flex flex-col">
                <p className="text-black font-bold">Disha Patel</p>
                <p className="text-gray-500">Pune,India</p>
              </div>
            </div>
            <img src="https://www.clipartmax.com/png/small/324-3245937_motorhomes-in-greece-orange-5-star-png.png" alt="Motorhomes In Greece - Orange 5 Star Png @clipartmax.com" className="h-[20px] w-[100px]"></img>
            <p className="text-[14px] text-gray-500 font-bold">“Had a wonderful stay! The rooms were clean and spacious, and the staff was very friendly. Booking was smooth and hassle-free."</p>
          </div>
          <div className="h-[200px] w-[300px] rounded-2xl p-[15px] flex flex-col gap-2 border-1 border-gray-500">
            <div className="flex flex-row gap-2">
              <img
                src="./client_4.jpeg"
                alt=""
                className="rounded-full h-[50px] w-[60px]"
              />
              <div className="flex flex-col">
                <p className="text-black font-bold">Raj Singh</p>
                <p className="text-gray-500">Hyderabad,India</p>
              </div>
            </div>
            <img src="https://www.clipartmax.com/png/small/324-3245937_motorhomes-in-greece-orange-5-star-png.png" alt="Motorhomes In Greece - Orange 5 Star Png @clipartmax.com" className="h-[20px] w-[100px]"></img>
            <p className="text-[14px] text-gray-500 font-bold">“Absolutely loved my stay! The check-in was quick, the rooms were spotless, and the staff went above and beyond to make me feel comfortable.</p>
          </div>
        </div>
      </div>
      <hr className="border-gray-500 w-[80%] mx-auto" />
      <div className="subscribe p-[60px] ">
          <div className="flex flex-col items-center h-[450px] w-[80%] rounded-2xl mx-auto gap-5 p-[30px]" style={{backgroundColor:"#111827"}}>
              <h1 className="text-white text-[30px] font-bold">Stay Inspired</h1>
              <p className="text-gray-500 text-center">Join our newsletter and be the first to discover new destinations, exclusive offers, and <br /> travel inspiration</p>
              <input type="text" placeholder="Enter Name"  className="h-[40px] w-[300px] border 1 border-white text-white p-[10px] rounded-[10px]"/>
              <input type="text" placeholder="Enter Email"  className="h-[40px] w-[300px] border 1 border-white text-white p-[10px] rounded-[10px]"/>
              <input type="text" placeholder="Enter Phone"  className="h-[40px] w-[300px] border 1 border-white text-white p-[10px] rounded-[10px]"/>
              <button className="bg-black rounded-[10px] w-[150px] h-[30px] text-[14px] px-[7px] py-[3px]">
              <div className="flex flex-row justify-evenly items-center gap-2">
                <p className="text-white">Subscribe</p>
                <FaArrowRightLong className="text-white" />
              </div>
            </button>
            <p className="text-gray-500 text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
          </div>
      </div>
      <footer className="bg-gray-50 text-gray-700 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand + About */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center text-white font-bold">
              Q
            </div>
            <span className="text-xl font-semibold">QuickStay</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Discover the world’s most extraordinary places to stay — 
            from boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-500">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Company
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Support
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Information</a></li>
            <li><a href="#">Cancellation Options</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm">
            Subscribe to our newsletter for travel inspiration and special offers.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 bg-black text-white rounded-r-lg">
              →
            </button>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6">
        <p>© 2025 QuickStay. All rights reserved.</p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
