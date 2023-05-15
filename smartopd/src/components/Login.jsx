import React, { useState } from "react";

import loginImage from "../images/login.jpg";
import { Link } from "react-router-dom";
import { signIn } from "../auth/authActions";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);
  return (
    <div className="flex flex-wrap container justify-center items-center  h-[100vh]">
      <div className=" flex  container justify-center items-center ">
        <div className=" items-center justify-center p-10 md:w-[40vw] shadow-lg">
          <div>
            <h1 className="text-center mb-20 text-3xl font-bold">
              Smart<span className="text-[#FF0065]">OPD</span>{" "}
            </h1>
            <h1 className="text-center  text-3xl font-bold">Welcome back!</h1>
            <p className="ml-6 mb-10"> Login to continue</p>
          </div>
          <form>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="john.doe@company.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="•••••••••"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={() => {
                signIn(email, password);
              }}
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
          <Link className="text-center " to="/signup">
            <p className="text-[#FF0065]">Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
