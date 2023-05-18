import React from "react";
import "../utils/avatar.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ServiceCard } from "./ServiceCard";

import weclDoc from "../images/newStock.png";

export const DashBoard = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container flex">
          <div className="w-[90%] lg:w-2/3">
            <div className="text-5xl font-bold">Welcome to SmartODP</div>
          </div>
          <div className="w-[90%] lg:w-1/3 bg-pink-200 rounded">
            <img src={weclDoc} />
          </div>
        </div>
        <div className="text-5xl font-bold text-center pt-10">
          We are coming Soon
        </div>
        <ServiceCard />
        <Footer />
      </div>
    </>
  );
};
