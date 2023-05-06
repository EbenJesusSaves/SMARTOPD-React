import React from "react";
import { Button } from "../utils/Button";

export const LandingPage = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex  justify-center align-middle  mainPage">
        <div className="container flex justify-start  mx-6 w-2/3 lg:h-[48rem]  pt-[10rem] text-white">
          <div>
            <h1 className=" lg:text-6xl font-bold md:text-2xl ">
              The digital health consultation platform just for you{" "}
            </h1>
            <p className="font-semibold text-xl my-10">
              Skip the waiting room and instantly connect with verified medical
              <br />
              practitioners for quality 24/7.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="container flex justify-start align-middle mx-6 w-1/2 text-white"></div>
      </div>
      <div className="container"></div>
    </div>
  );
};
