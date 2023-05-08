import React from "react";

export const Footer = () => {
  return (
    <div className="container flex justify-center gap-10 border-t-[1px]  border-[#FF0065] flex-wrap">
      <div className=" w-[15rem]">
        <h1>
          <span className="font-brandFont text-lg font-semibold">Virtual</span>
          <span className="font-brandFont text-lg font-semibold text-[#FF0065]">
            Care
          </span>
        </h1>
        <p>
          We are a technology company that offers low cost medical services from
          online to door-step outreach.
        </p>
        <div className="h-[2px] w-[15rem] bg-main-bg my-5"></div>
        <p> MT-Moriah Co. Ltd. Alright reserved</p>
      </div>
      <div className=" w-[15rem]">
        <h1>
          <span className="font-brandFont text-lg my-5 ">
            <a>FOR PATIENTS</a>
          </span>
        </h1>

        {/* USED a tags instead of links because have not created these pages yet, using links will cause errors  */}
        <div>
          <a className="font-brandFont">Search for Doctor</a>
        </div>
        <div>
          <a className="font-brandFont">Log in</a>
        </div>
        <div>
          <a className="font-brandFont">Sign in</a>
        </div>
        <div>
          <a className="font-brandFont">Booking</a>
        </div>
      </div>
      <div className=" w-[15rem]">
        <h1>
          <span className="font-brandFont text-lg my-5 ">
            <a>FOR DOCTORS</a>
          </span>
        </h1>

        {/* USED a tags instead of links because have not created these pages yet, using links will cause errors  */}
        <div>
          <a className="font-brandFont">Appointment</a>
        </div>
        <div>
          <a className="font-brandFont">Log in</a>
        </div>
        <div>
          <a className="font-brandFont">Sign in</a>
        </div>
      </div>
      <div className=" w-[15rem]">
        <h1>
          <span className="font-brandFont text-lg my-5 ">
            <a>COMPANY</a>
          </span>
        </h1>

        {/* USED a tags instead of links because have not created these pages yet, using links will cause errors  */}
        <div>
          <a className="font-brandFont">Home</a>
        </div>
        <div>
          <a className="font-brandFont">Our Company</a>
        </div>
        <div>
          <a className="font-brandFont">SmartOPD in the News</a>
        </div>
        <div>
          <a className="font-brandFont">Individual Heath Plan</a>
        </div>
        <div>
          <a className="font-brandFont">Corporate heath Plan</a>
        </div>
        <div>
          <a className="font-brandFont">FAQ</a>
        </div>
        <div>
          <a className="font-brandFont ">Term & conditions</a>
        </div>
        <div>
          <a className="font-brandFont ">Cookies</a>
        </div>
      </div>
      <div className=" w-[15rem]">
        <h1>
          <span className="font-brandFont text-lg my-5 ">
            <a>COMPANY</a>
          </span>
        </h1>

        {/* USED a tags instead of links because have not created these pages yet, using links will cause errors  */}
        <div>
          <a className="font-brandFont">Home</a>
        </div>
        <div>
          <a className="font-brandFont">
            Block A7, GICEL Room 26-27
            <br /> SCC - New Weija.
            <br />
            <br />
            Ghana - West Africa
            <br />
          </a>
        </div>
        <div>
          <a className="font-brandFont"> Mobile: +233-555-730-434</a>
        </div>
        <div>
          <a className="font-brandFont">Whatsapp: +233-504-736-747</a>
        </div>
        <div>
          <a className="font-brandFont">
            Contact details: contact@smartopd.com <br></br>info@smartopd.com
          </a>
        </div>
      </div>
    </div>
  );
};
