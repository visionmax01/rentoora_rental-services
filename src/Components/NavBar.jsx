import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Mainlogo from '../img/Main_logo.png';
const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLoginRecirection = () => {
    navigate("/login");
  };
  const HomePageRedirection = () => {
    navigate("/");
  };
  return (
    <div className="sticky top-0 z-50">
      <nav className="w-full h-16 md:h-12  bg-gradient-to-r  to-brand-navbg from-blue-900  flex items-center">
        <div className="flex justify-between items-center w-full px-4 md:px-12">
          <img
            onClick={HomePageRedirection}
            className=" cursor-pointer font-extrabold text-yellow-400  flex h-12"
            src= {Mainlogo}
          >
            
          </img>

          <ul className="hidden md:flex gap-7 items-center text-white font-semibold">
            <li className="cursor-pointer hover:bg-gradient-to-l from-green-400 to-gray-600  text-white font-semibold rounded-lg px-2 py-0.5 transform relative  w-full right-0 transition-width duration-300 ease-in-out">
              Services
            </li>
            <li className="cursor-pointer hover:bg-gradient-to-l from-green-400 to-gray-600  text-white font-semibold rounded-lg px-2 py-0.5 transform relative  w-full right-0 transition-width duration-300 ease-in-out">
              About
            </li>
            <li className="cursor-pointer hover:bg-gradient-to-l from-green-400 to-gray-600  text-white font-semibold rounded-lg px-2 py-0.5 transform relative  w-full right-0 transition-width duration-300 ease-in-out">
              Developer
            </li>
            <li
              onClick={handleLoginRecirection}
              className="bg-white text-black from:bg-blue-900 hover:bg-gradient-to-l from-green-400  py-1 px-4 rounded-md cursor-pointer transform-width duration-300  hover:ease-in-out "
            >
              Login
            </li>
          </ul>
          <div className="md:hidden" onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <CloseIcon className="h-6 w-6 text-white cursor-pointer" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white cursor-pointer" />
            )}
          </div>
        </div>
      </nav>

      {/* Backdrop  blur effect for bg */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Side Drawer for small screen */}
      <div
        className={`fixed top-0 w-1/2  left-0 h-full bg-brand-navbg opacity-85 text-white p-6 z-40 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between">
          <div
            onClick={HomePageRedirection}
            className=" font-extrabold text-yellow-400  text-2xl  "
          >
            RENT<span className="text-lg font-LogoText">OOr</span>A
          </div>

          <CloseIcon
            className="top-4 absolute right-3 h-6 w-6 cursor-pointer hover:bg-blue-400 hover:text-red-500"
            onClick={toggleDrawer}
          />
        </div>
        <ul className="flex flex-col gap-4 mt-4">
          <li className="px-4 hover:bg-gradient-to-l from-green-500 py-1 rounded-md to-slate-50 hover:text-black">
            Services
          </li>
          <li className="px-4 hover:bg-gradient-to-l from-green-500 py-1 rounded-md to-slate-50 hover:text-black">
            About
          </li>
          <li className="px-4 hover:bg-gradient-to-l from-green-500 py-1 rounded-md to-slate-50 hover:text-black">
            Developer
          </li>
          <li
            onClick={handleLoginRecirection}
            className="hover:text-lg bg-brand-dark hover:bg-gradient-to-l from-green-500 py-1 px-4 rounded-md cursor-pointer transform translate-right duration-300 ease-in-out "
          >
            Login
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
