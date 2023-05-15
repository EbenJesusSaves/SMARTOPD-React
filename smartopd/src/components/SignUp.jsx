import React, { useState } from "react";
import { SelectCountry } from "./CountryPicker";
import { Link } from "react-router-dom";
import { signUp } from "../auth/authActions";

export const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [countryName, setCountryName] = useState();
  const [phone, setPhone] = useState();
  const [homeAddress, setHomeAddress] = useState();
  const [aptFloor, setAptFloor] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [password, setPassword] = useState();

  // signUp(
  //   "kwame",
  //   "kofi",
  //   "ghfna",
  //   233459,
  //   39548,
  //   49784,
  //   "k@gmail.cosm",
  //   2023,
  //   "kingfod111"
  // );

  console.log(firstName);
  return (
    <div>
      {" "}
      <div className="flex flex-wrap container justify-center items-center  h-[100vh]">
        <div className=" flex  container justify-center items-center ">
          <div className=" items-center justify-center p-10  shadow-lg">
            <div>
              <h1 className="text-center mb-20 text-3xl font-bold">
                Smart<span className="text-[#FF0065]">OPD</span>{" "}
              </h1>
              <h1 className="text-center   pb-6 font-bold">
                It just takes a few minutes to sign up and get fast, easy access
                to care, 24/7.
              </h1>
            </div>
            <form>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    placeholder="John"
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Doe"
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    for="company"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Country
                  </label>
                  <SelectCountry />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="123-45-678"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    required
                  />
                </div>
                <div>
                  <label
                    for="Home Address"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Home Address
                  </label>
                  <input
                    type="text"
                    id="website"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="visitors"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Apt, Floor, Unit
                  </label>
                  <input
                    type="text"
                    id="visitors"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder=""
                    required
                  />
                </div>
              </div>
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
                />
              </div>
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="john.doe@company.com"
                  required
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
                />
              </div>
              <div class="mb-6">
                <label
                  for="confirm_password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div>
                <p className="pb-2 font-bold">Legal Sex</p>
                <p className="pb-2 text-sm">
                  For billing purposes, which sex does your insurance have on
                  record for you?
                </p>
              </div>
              <div class="flex items-start mb-6  ">
                <div class="flex items-start md:w-1/2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium ">
                    Male
                  </label>
                </div>
                <div class="flex items-start  md:w-1/2">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium ">
                    Female
                  </label>
                </div>
              </div>
              <Link to="/checkbox">
                <button
                  type="submit"
                  class="text-white bg-[#FF0065] hover:bg-[#FF0065] focus:ring-4 focus:outline-none focus:ring-[#FF0065] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  next
                </button>
              </Link>
              <Link className="text-center " to="/login">
                <p className="text-[#FF0065]">Login</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CheckBoxes = () => {
  return (
    <div className="flex flex-wrap container justify-center items-center  h-[100vh]">
      <div className=" flex  container justify-center items-center ">
        <div className=" items-center justify-center p-10  shadow-lg">
          <div>
            <h1 className="text-center mb-20 text-3xl font-bold">
              Smart<span className="text-[#FF0065]">OPD</span>{" "}
            </h1>
            <h1 className="text-center  text-3xl pb-6 font-bold">
              In order to join Smart-OPD, you must <br /> agree to the terms
              below.
            </h1>
            <p className="text-sm pb-10 text-center">
              I am at least 18 years of age and I have read and accept:
            </p>
          </div>
          <form>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember3"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>
              <label for="remember3" class="ml-2 text-sm font-medium ">
                Membership Terms of Service{" "}
              </label>
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>{" "}
              <label for="remember" class="ml-2 text-sm font-medium ">
                Medical Terms of Service
              </label>
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember2"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>{" "}
              <label for="remember2" class="ml-2 text-sm font-medium ">
                Privacy Policy
              </label>
            </div>
            <p className="text-sm pb-2">
              I acknowledge receipt of the following:
            </p>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember1"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>
              <label for="remember1" class="ml-2 text-sm font-medium ">
                Notice of HIPAA Privacy Practices
              </label>
            </div>

            <button
              type="submit"
              class="text-white bg-[#FF0065] hover:bg-[#FF0065] focus:ring-4 focus:outline-none focus:ring-[#FF0065] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
            <Link className="text-center " to="/login">
              <p className="text-[#FF0065]">Login</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
