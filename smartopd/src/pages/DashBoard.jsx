import React from "react";
import "../utils/avatar.css";
import { Navbar } from "../components/Navbar";
export const DashBoard = () => {
  return (
    <>
      <Navbar />
      <div className="container flex">
        <div className="w-[90%] lg:w-2/3 bg-green-600"></div>
        <div className="w-[90%] lg:w-1/3 bg-violet-700">he</div>
      </div>
    </>
  );
};
