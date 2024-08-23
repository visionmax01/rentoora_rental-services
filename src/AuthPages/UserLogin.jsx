import React, { useState, useEffect } from "react";
import userIcon from "../assets/img/userIconLogPage.png";
import passIcon from "../assets/img/password_Icon.png";
import passShow from "../assets/img/show_pass.png";
import passHide from "../assets/img/hide-pass.png";
import leftImage from "../assets/img/loginpageimage.png";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/img/googleIcon.png";
import FacbookIcon from "../assets/img/facbookIcon.png";
import NavBar from "../Components/NavBar";
const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/register-user");
  };
  // Set the page title
  useEffect(() => {
    document.title = "Vision - Login Page";
  }, []);

  const handleForgetPass = () => {
    navigate("/forget-password");
  };

  const handleRegisterRedirect = () => {
    navigate("/register-user");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" object-cover w-screen h-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center pt-12 px-4 md:px-0 ">
        {/* Login Page Content */}
       
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-[25px] overflow-hidden w-full max-w-3xl  bg-opacity-0 backdrop-blur-lg">
          {/* Login field Right Form Box Body */}
          <div className="w-full md:max-w-80 p-8 relative bg-white bg-opacity-97 ">
            <div className="circlesmall1 bg-brand-bodyColor w-5 h-5 absolute top-12 left-8 rounded-full "></div>
            <div className="circlesmall1 bg-brand-bodyColor w-5 h-5 absolute bottom-8 right-8 rounded-full "></div>
            <h1 className="text-center font-bold text-3xl">LOGIN</h1>
            <p className="text-center mb-6">Login With Your Credentials!</p>
            <div className="bg-gray-100 p-1 rounded-[5px] mb-4 flex items-center">
              <img className="w-5 h-5" src={userIcon} alt="User Icon" />
              <input
                className="bg-transparent w-full outline-none font-medium text-lg text-black ml-2"
                type="text"
                placeholder="username"
              />
            </div>
            <div className=" bg-gray-100 rounded-[5px] mb-1 p-1 flex items-center justify-center">
              <img className="opacity-80" src={passIcon} alt="User Icon" />
              <input
                className="bg-transparent w-full outline-none flex items-center text-clip font-medium text-lg text-black ml-2"
                type={showPassword ? "text" : "password"}
                placeholder="password"
              />
              <img
                className="pl-2 w-10 h-6 opacity-50 cursor-pointer"
                src={showPassword ? passHide : passShow}
                alt="Toggle Password Visibility"
                onClick={togglePasswordVisibility}
              />
            </div>
            <button
              href=""
              onClick={handleForgetPass}
              className="w-full flex justify-end mt-0 text-red-600 font-bold hover:underline"
            >
              Forget password?
            </button>
            <button
              type="submit"
              className="select-none md:select-auto w-full bg-brand-dark text-white py-2 mt-2 rounded-lg font-semibold hover:bg-blue-900 transition duration-200"
            >
              LOGIN
            </button>
            
            <div className=" block md:hidden text-center mt-2">
              Don't have account?{" "}
              <a
                href=""
                onClick={handleSignup}
                className="text-brand-light hover:underline hover:text-brand-dark"
              >
                SignUp
              </a>
            </div>
            <div className="w-full h-[30px] relative mt-4 flex justify-center items-center">
              <div className="relative w-full h-[3px] bg-black"></div>
              <div className="absolute font-bold z-10 bg-gray-100 text-emerald-950 font-mono w-52 h-[100%] text-center rounded-[35px] border-black border-[3px]">
                Sign In with Other's
              </div>
            </div>
            <div className="w-full h-[30px] relative mt-4 flex justify-center items-center gap-6">
              <div className="facbook w-9 h-9 rounded-sm">
                <img
                  className="hover:scale-90 cursor-pointer"
                  src={GoogleIcon}
                  alt="Google Icon"
                />
              </div>
              <div className="google w-9 h-9 rounded-sm">
                <img
                  className="hover:scale-90 cursor-pointer"
                  src={FacbookIcon}
                  alt="Facebook Icon"
                />
              </div>
            </div>
          </div>
          {/* Right side container of login section */}
          <div className="rightSideContainer hidden md:block relative w-full md:max-w-1/3 bg-brand-light items-center justify-center">
            <div className="cornerDesignTright"></div>
            <div className="cornerDesignBleft"></div>
            <div className="containt w-full absolute z-10 top-20 items-center flex flex-col">
              <h1 className="w-full text-white text-center font-Rampart font-bold text-[22px]">
                <p>Don't have An Account</p>
                <p className="mt-[-5px]">With Us </p>
                <p className="mt-[-5px]">Create Now</p>
              </h1>
              <button
                onClick={handleRegisterRedirect}
                className="transition hover:bg-gradient-to-l from-green-400 relative right-0 transition-width duration-300 ease-in-out h text-[1rem] mt-4 bg-white hover:shadow-custom-hover hover:text-black text-brand-dark rounded-2xl px-5 py-1 font-MyFont1 font-extrabold font-sans"
                type="submit"
              >
                Get Started
              </button>
            </div>
            <img
              className="absolute w-[250px] md:w-[350px] h-[200px] md:h-[250px] bottom-[-12px] right-0"
              src={leftImage}
              alt="Left Image"
            />

            {/* loginPage_right_side code Below */}
            <div className="loaderSection">
              <div className="loaderMylg"></div>
              <div className="loaderMylg"></div>
              <div className="loaderMylg"></div>
              <div className="loaderMylg"></div>
              <div className="loaderMylg"></div>
              <div className="loaderMylg"></div>
            </div>
            <div className="circleCornerRT bg-brand-lightGrow absolute top-0 right-0 w-28 h-28 rounded-bl-full"></div>
            <div className="circleCornerLL circleCornerRT bg-brand-lightGrow absolute bottom-0 left-0 w-28 h-28 rounded-tr-full"></div>
            <div className="circledesign1 bg-brand-lightdark absolute bottom-24 left-20 w-12 h-12 rounded-full flex items-center justify-center ">
              <div className="smallCircle bg-brand-lightGrow w-8 h-8 rounded-full"></div>
            </div>
            <div className="smallCircle absolute top-16 left-8 bg-brand-lightGrow w-8 h-8 rounded-full z-1 "></div>
          </div>
        </div>
         {/* Copyright */}
        <p className="text-white text-xs md:mt-0 mt-2 md:text-base">
          <p>&copy; {new Date().getFullYear()} Copyright to Vision Technology. All Right Resolved ! </p>

        </p>
      </div>

    </div>
  );
};

export default UserLogin;
