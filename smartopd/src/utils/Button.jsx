import React from "react";

export const Button = (props) => {
  return (
    <button
      className="bg-main-bg font-semibold text-white mt-8 md:mt-0  font-[Poppins] py-2  w-[171.39px] h-[55px]  hover:bg-main-bg
    duration-500"
    >
      {props.children}
    </button>
  );
};
