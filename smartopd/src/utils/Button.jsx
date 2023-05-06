import React from "react";

export const Button = (props) => {
  return (
    <button
      className="bg-main-bg text-white font-[Poppins] py-2 px-6  md:ml-8 hover:bg-indigo-400 
    duration-500"
    >
      {props.children}
    </button>
  );
};
