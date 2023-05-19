import React, { useContext, useEffect, useState } from "react";
import "../utils/avatar.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ServiceCard } from "./ServiceCard";

import weclDoc from "../images/newStock.png";
import { Particle } from "./Particles";
import { createUser } from "../auth/authActions";
import { MainContext } from "../context/ContextProvider";

export const DashBoard = () => {
  // const userDataFuc = async () => {
  //   const result = await createUser();
  //   console.log(result);
  // };

  const { user } = useContext(MainContext);
  return (
    <>
      <Navbar />
      <Particle />
      <div>
        <div className="container flex flex-wrap justify-center ">
          <div className="w-[90%] lg:w-2/3">
            <div className="text-3xl lg:text-5xl font-bold py-10 ">
              Welcome to SmartODP {user && user.firstName}
            </div>
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
