import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Mainlogo from '../assets/img/Main_logo.png';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLoginRecirection = () => {
    navigate("/login-user");
  };

  const HomePageRedirection = () => {
    navigate("/");
  };

  const handleDeveloperURL = () => {
    navigate("/developer");
  };

  const handleAboutURL = () => {
    navigate("/about");
  };

  const handleServicesURL = () => {
    navigate("/service");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to check if the current path matches the link path
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full py-1 bg-gradient-to-r to-brand-navbg from-blue-900 flex items-center relative">
        <div className="flex justify-between items-center w-full px-4 md:px-12">
          <img
            onClick={HomePageRedirection}
            className="cursor-pointer font-extrabold text-yellow-400 flex h-12"
            src={Mainlogo}
            alt="Main Logo"
          />

          {/* Desktop View */}
          <ul className="hidden md:flex gap-7 items-center text-white font-semibold">
            <li
              onClick={handleServicesURL}
              className={`cursor-pointer px-2 py-0.5 rounded-sm transform relative w-full right-0 transition-width duration-300 ease-in-out ${
                isActive("/service") ? "bg-gradient-to-l from-green-400 to-gray-600" : "hover:bg-gradient-to-l from-green-400 to-gray-600"
              }`}
            >
              Services
            </li>
            <li
              onClick={handleAboutURL}
              className={`cursor-pointer px-2 py-0.5 rounded-sm transform relative w-full right-0 transition-width duration-300 ease-in-out ${
                isActive("/about") ? "bg-gradient-to-l from-green-400 to-gray-600" : "hover:bg-gradient-to-l from-green-400 to-gray-600"
              }`}
            >
              About
            </li>
            <li
              onClick={handleDeveloperURL}
              className={`cursor-pointer px-2 py-0.5 rounded-sm transform relative w-full right-0 transition-width duration-300 ease-in-out ${
                isActive("/developer") ? "bg-gradient-to-l from-green-400 to-gray-600" : "hover:bg-gradient-to-l from-green-400 to-gray-600"
              }`}
            >
              Developer
            </li>
            <li
              onClick={toggleDropdown}
              className="relative bg-white text-black py-1 px-4 rounded-sm hover:bg-brand-lightGrow cursor-pointer transform-width duration-300 hover:ease-in-out"
            >
              Login
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg ">
                  <ul>
                    <li
                      onClick={() => {
                        handleLoginRecirection();
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200" 
                    >
                      User Login
                    </li>
                    <li
                      onClick={() => {
                        navigate("/client-login");
                        setIsDropdownOpen(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      Client Login
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          {/* Mobile View */}
          <div className="md:hidden" onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <MenuIcon className="h-6 w-6 text-white cursor-pointer" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white cursor-pointer" />
            )}
          </div>
        </div>
      </nav>

      {/* Backdrop blur effect for bg */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Side Drawer for small screen */}
      <div
        className={`fixed top-0 w-1/2 left-0 h-full bg-brand-navbg opacity-85 text-white p-6 z-40 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between">
          <div
            onClick={HomePageRedirection}
            className="font-extrabold text-yellow-400 text-2xl"
          >
            RENT<span className="text-lg font-LogoText">OOr</span>A
          </div>

          <CloseIcon
            className="top-4 absolute right-3 h-6 w-6 cursor-pointer hover:bg-blue-400 hover:text-red-500"
            onClick={toggleDrawer}
          />
        </div>
        <ul className="flex flex-col gap-4 mt-4">
          <li
            onClick={handleServicesURL}
            className={`px-4 py-1 rounded-md hover:bg-gradient-to-l from-green-500 to-slate-50 hover:text-black ${
              isActive("/service") ? "bg-gradient-to-l from-green-400 to-gray-400" : "Hover:bg-gradient-to-l from-green-400 to-gray-600"
            }`}
          >
            Services
          </li>
          <li
            onClick={handleAboutURL}
            className={`px-4 py-1 rounded-md hover:bg-gradient-to-l from-green-500 to-slate-50 hover:text-black ${
              isActive("/about") ? "bg-gradient-to-l from-green-400 to-gray-400" : "Hover:bg-gradient-to-l from-green-400 to-gray-600"
            }`}
          >
            About
          </li>
          <li
            onClick={handleDeveloperURL}
            className={`px-4 py-1 rounded-md hover:bg-gradient-to-l from-green-500 to-slate-50 hover:text-black ${
              isActive("/developer") ? "bg-gradient-to-l from-green-400 to-gray-400" : "Hover:bg-gradient-to-l from-green-400 to-gray-600"
            }`}
          >
            Developer
          </li>
          <li
            onClick={toggleDropdown}
            className="relative hover:text-lg bg-brand-dark hover:bg-gradient-to-l from-green-500 rounded py-1 px-4 cursor-pointer transform translate-right duration-300 ease-in-out"
          >
            Login
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 py-1 md:w-48 w-42 bg-white text-black shadow-lg md:rounded-md">
                <ul>
                  <li
                    onClick={() => {
                      handleLoginRecirection();
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-red-700 hover:rounded-md"
                  >
                    User Login
                  </li>
                  <li
                    onClick={() => {
                      navigate("/client-login");
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-red-700 hover:rounded-md"
                  >
                    Client Login
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
