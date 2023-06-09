import React, { useRef, useEffect, useContext } from "react";
import { Button } from "../utils/Button";
import doctorImg from "../images/ddd.png";
import doctorPatient from "../images/one.jpg";
import doctorOne from "../images/call.jpg";
import pharmacy from "../images/two.jpg";
import downloadApp from "../images/download-on-the-app-store-badge_us.svg";
import downloadSpp from "../images/google-play-badge-logo-svgrepo-com(1).svg";

import { motion, useInView, useAnimate } from "framer-motion";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import { Particle } from "./Particles";
import { ServiceCard } from "./ServiceCard";
import { MainContext } from "../context/ContextProvider";
import AnimatedTextCharacter from "../utils/AnimatedTextWord";

export const LandingPage = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const { user, setUser } = useContext(MainContext);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(`userData`));

    setUser(items);
  }, []);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { x: 0 });
    }
  }, [isInView]);

  return (
    <>
      <Navbar />

      <div
        className="container-fluid large-header"
        id="large-header"
        style={{ overflow: "scroll" }}
      >
        <Particle />
        <div className="flex justify-center content-center scroll-smooth ">
          <div className="container flex  justify-center align-middle  mainPage">
            <div className="container flex justify-start cursor-pointer  mx-6 md:w-2/3 lg:h-[48rem] my-10 md:my-0 lg:pt-[10rem] text-white">
              <div className="">
                <motion.h1 className=" xl:text-6xl lg:text-4xl text-center xl:text-start  font-semibold font-brandFont md:text-2xl ">
                  {" "}
                  <AnimatedTextCharacter
                    text="The digital health 
                    consultation platform 
                    just for you"
                  />
                </motion.h1>
                <p className="font-semibold md:text-xl my-3 hidden md:block md:my-10">
                  Skip the waiting room and instantly connect with verified
                  medical
                  <br />
                  practitioners for quality 24/7.
                </p>
                <Link to="/signup">
                  <Button>Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="container  flex justify-start align-middle mx-6 hidden xl:block w-1/2 text-white"></div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container-fluid flex font-brandFont flex-col  justify-center content-center"
        >
          <div className=" ">
            <h1 className="text-2xl mt-5 md:text-5xl md:mt-0 text-center font-bold">
              Thousands of doctors at your beck and call
            </h1>
            <p className="mt-10 font-brandFont  text-center ">
              Get access to highly qualified doctors on SmartOPD <br />
              Don't risk your health by relying on self-medication, driving in
              heavy traffic, and waiting in a long queue for medical care.
            </p>
          </div>
        </motion.div>
        <ServiceCard />
        <div className="container mt-20 ">
          <div className=" ">
            <h1 className="text-5xl text-center font-bold">Our Service</h1>
            <p className="mt-10 font-brandFont text-center ">
              Getting treatment and medical assistance with Telemedicine and
              Doctor Home Visit has never been so fast
              <br /> and seamless. At SmartOPD, we use cutting-edge technology
              to offer low-cost healthcare plans that <br /> enable you and your
              family access to comprehensive and convenient healthcare services.
            </p>
          </div>{" "}
          <div className="flex justify-center  ">
            <div className="flex w-[80%] md:w-[60%] mt-10 justify-center flex-wrap-reverse content-center ">
              <div className="w-auto md:w-1/2 ">
                <div className="">
                  <h4 className="font-brandFont mb-4 font-bold">
                    Virtual Doctor
                  </h4>
                  <h4 className="font-brandFont mb-4 font-bold">
                    Nurse Home Visit
                  </h4>
                  <p className="font-brandFont mb-3 ">
                    Stay on top of your health by letting us <br /> bring our
                    verified nurse(s) to you <br />
                    in-person.
                  </p>
                </div>
                <div>
                  <h4 className="font-brandFont mb-4  font-bold">
                    Telemedicine
                  </h4>
                  <p className="font-brandFont mb-3 ">
                    Video call or chat with a doctor from <br />
                    your phone, tablet, or computer until <br /> you’re
                    satisfied.
                  </p>
                </div>
                <div>
                  <h4 className="font-brandFont mb-4  font-bold">
                    Online Pharmacy
                  </h4>
                  <p className="font-brandFont mb-4 ">
                    Take control of your health and time by
                    <br /> simply ordering your medications from <br />
                    our mobile App.
                  </p>
                </div>
                <div>
                  <h4 className="font-brandFont font-bold mb-4 ">
                    SmartOPD Health Plan
                  </h4>
                  <p className="font-brandFont mb-4 ">
                    Get access to an affordable selection of
                    <br /> health plans for yourself, your family, or
                    <br /> employees.
                  </p>
                </div>
                <div>
                  <h4 className="font-brandFont font-bold mb-4 ">
                    Online Laboratory Service
                  </h4>
                  <p className="font-brandFont mb-4 ">
                    Your lab samples will be taken from the comfort of your home
                    or office and result will be delivered to you online. Our
                    Doctors will call you to discuss the findings and dispense
                    drugs.
                  </p>
                </div>
              </div>
              <div className="w-auto md:w-1/2">
                <img
                  src={doctorImg}
                  className="md:shrink-0 rounded-xl shadow-md hover:shadow-xl"
                  width="382px"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20  ">
            <div className="flex  mt-10 justify-center flex-wrap md:flex-nowrap flex-row gap-20 w-[80%] ">
              <div className="w-auto md:w-1/2">
                <img
                  src={doctorPatient}
                  className="md:shrink-0 shadow-xl rounded-lg"
                  width="620px"
                />{" "}
              </div>
              <div className="w-auto md:w-1/2">
                <div>
                  <p className="font-brandFont mb-3 ">HOME VISITS</p>
                  <h4 className="font-brandFont mb-4 font-bold text-lg">
                    Get a nurse to come to your home while a doctor joins online
                  </h4>
                  <p className="font-brandFont mb-3 ">
                    Don’t stress over transportation or traffic, we will always
                    come to <br /> you! <br />
                    <br />
                    We ensure you and your loved ones are properly cared for by
                    We <br />
                    ensure you and your loved ones are properly cared for by
                    designing <br />
                    our house call services to suit your needs. Book your
                    appointment today.
                  </p>
                  <div className="bg-[#E6E6E6] shadow-md rounded p-4">
                    <h4 className="font-brandFont text-[#FF0065] font-bold">
                      Covid concerns?💡
                    </h4>
                    <p className="font-brandFont my-3 ">
                      Our doctors understand the dangers of the pandemic and are{" "}
                      <br />
                      well equipped to visit you while taking all the required
                      preventive <br />
                      measures pre, during, and post-visit.
                    </p>
                  </div>
                  <h4 className="font-brandFont mt-9 text-[#FF0065] font-bold">
                    Get Started
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20 ">
            <div className="flex  mt-10 justify-center flex-wrap-reverse w-[80%]  md:flex-nowrap gap-20 content-center">
              <div className="w-auto md:w-1/2">
                <div>
                  <p className="font-brandFont mb-3 ">TELEMEDICINE</p>
                  <h4 className="font-brandFont mb-4 font-bold text-lg">
                    Call or chat verified doctors
                  </h4>
                  <p className="font-brandFont mb-3 ">
                    The Wait for Quality Healthcare is Over!
                    <br />
                    <br />
                    With SmartOPD, you can now talk to a licensed doctor online,
                    <br />
                    through chat, audio call, or video conference and get
                    instant
                    <br />
                    feedback and prescriptions on the go with your mobile phone.
                  </p>

                  <h4 className="font-brandFont mt-9 ms-5 text-[#FF0065] font-bold">
                    Talk to a Doctor
                  </h4>
                </div>
              </div>

              <div className="w-auto md:w-1/2">
                <img
                  src={doctorOne}
                  width="620px"
                  className="md:shrink-0 shadow-xl rounded-lg"
                />{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-20 ">
            <div className="flex  mt-10 justify-center gap-20 md:flex-nowrap flex-wrap w-[80%] md:w-[100%] content-center">
              <div className=" md:w-1/2 ">
                <img
                  src={pharmacy}
                  width="620px"
                  className="md:shrink-0 shadow-xl rounded-lg"
                />{" "}
              </div>

              <div className="md:w-1/2">
                <div>
                  <p className="font-brandFont mb-3 ">ONLINE PHARMACY</p>
                  <h4 className="font-brandFont mb-4 font-bold text-lg">
                    Prescriptions on the go
                  </h4>
                  <p className="font-brandFont  mb-3 ">
                    Get accurate and legal prescriptions from medical experts
                    with an accurate track record of your past prescriptions and
                    sound analysis of your current health.
                  </p>

                  <h4 className="font-brandFont ms-5 mt-9 text-[#FF0065] font-bold">
                    Get Prescription
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="download lg:h-[30rem] my-20 flex items-center  justify-center">
            <div className="w-auto md:w-1/2 flex flex-col ">
              <div className="  rounded ml-10 ">
                <h4 className="font-brandFont text-xl text-white font-bold mb-4 ">
                  Your Doctor On The Go
                </h4>
                <p className="font-brandFont mb-4 ">
                  Book a same day appointment at your convenience
                  <br /> either from our mobile app or web app and have a
                  <br /> secure chat with any of our licensed doctors.
                </p>
              </div>
              <div className="mt-10 ms-[3rem] flex gap-4">
                <img src={downloadApp} width="192px" />
                <img src={downloadSpp} width="192px" />
              </div>
            </div>
            <div className="w-auto md:w-1/2   "></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
