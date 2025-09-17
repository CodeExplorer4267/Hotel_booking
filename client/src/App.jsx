import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import Home from "./component/Home/Home";
import { Route, Routes } from "react-router-dom";
import Hotels from "./component/hotelspage/Hotels";
import Hotel_Detail from "./component/Hotel_Details/Hotel_Detail";
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} /> */}
        <Route path="/" element={<Hotel_Detail/>}/>
      </Routes>
    </div>
  );
};

export default App;
