import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/smartlogo.webp";
import { MainContext } from "../context/ContextProvider";
import { signOUt } from "../auth/authActions";
import Avatar from "react-avatar";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(MainContext);
  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(user && user.email);

  const logUserOUt = () => {
    signOUt();
    setUser("");
    localStorage.removeItem("userData");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a>
              <img className="h-10 w-30" src={logo} alt="fake" />
            </a>
          </div>
          <div className="hidden sm:block justify-center pt-3 sm:ml-6">
            <div className="flex  space-x-4">
              <Link
                to={"/"}
                className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold"
              >
                Home
              </Link>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                About Us
              </a>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                Contact
              </a>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                Health Plan
              </a>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                Blog
              </a>
              {user && user !== "" ? (
                <>
                  <Link to="/dashboard">
                    {" "}
                    <Avatar
                      name={user && user.email}
                      round
                      size="45"
                      color={"#FF0065"}
                      className="cursor-pointer"
                    />
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Log in
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <button
                      className="bg-main-bg font-semibold text-white font-[Poppins] py-2 rounded-lg w-[96px]   hover:bg-main-bg
    duration-500"
                    >
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block " : "hidden"} sm:hidden `}>
        <div className="px-2  pb-3 space-y-2  ">
          {/* <a className="text-gray-700 text  hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>{" "}
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Health Plan
          </a>{" "}
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Blog
          </a>{" "} */}
          {user && user !== "" ? (
            <>
              <button
                className="bg-main-bg font-semibold text-white font-[Poppins] py-2 rounded-lg w-[96px]   hover:bg-main-bg
    duration-500"
              >
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Log in
              </Link>{" "}
              <Link
                to="/signup"
                className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export const NavbarForDashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useContext(MainContext);
  const toggleMenu = () => setIsOpen(!isOpen);

  console.log(user && user.email);

  const logUserOUt = () => {
    signOUt();
    setUser("");
    localStorage.removeItem("userData");
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a>
              <img className="h-10 w-30" src={logo} alt="fake" />
            </a>
          </div>
          <div className="hidden sm:block justify-center pt-3 sm:ml-6">
            <div className="flex  space-x-4">
              <Link
                to={"/"}
                className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold"
              >
                Home
              </Link>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                About Us
              </a>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                Contact
              </a>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                Health Plan
              </a>
              <a className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold">
                Blog
              </a>
              {user && user !== "" ? (
                <>
                  <Link to="/">
                    <button
                      className="bg-main-bg font-semibold text-white font-[Poppins] py-2 rounded-lg w-[96px]   hover:bg-main-bg
    duration-500"
                      onClick={logUserOUt}
                    >
                      logout
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-indigo-700 px-3 py-2 rounded-md text-lg font-bold"
                  >
                    Log in
                  </Link>
                  <Link to="/signup">
                    {" "}
                    <button
                      className="bg-main-bg font-semibold text-white font-[Poppins] py-2 rounded-lg w-[96px]   hover:bg-main-bg
    duration-500"
                    >
                      Sign up
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block " : "hidden"} sm:hidden `}>
        <div className="px-2  pb-3 space-y-2  ">
          {/* <a className="text-gray-700 text  hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>{" "}
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Health Plan
          </a>{" "}
          <a className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium">
            Blog
          </a>{" "} */}
          {user === "" ? (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Log in
              </Link>{" "}
              <Link
                to="/signup"
                className="text-gray-700 hover:text-indigo-700 block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              className="bg-main-bg font-semibold text-white font-[Poppins] py-2 rounded-lg w-[96px]   hover:bg-main-bg
    duration-500"
              onClick={logUserOUt}
            >
              <Link to="/"> logout</Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
