import React from "react";
import NavBar from "../NavBar";
import DeveloperImg1 from '../../assets/img/my_profile_pic.jpg'
import DeveloperImg2 from '../../assets/img/shiv.jpg'
const Developer = () => {
  return (
    <div className="  mb-12">
      <NavBar />
      <h1 className="text-4xl font-Roboto font-extrabold tracking-wider opacity-80 mt-8 text-center text-white "> 
        Developer
      </h1>
      <div className="  text-black w-[85%] h-auto mx-auto mt-8 rounded-xl flex flex-col md:flex md:flex-row gap-4">
        <div className="bg-white md:w-1/2 h-fit md:bg-gray-400 p-4 rounded-lg Md:rounded-l-xl ">
          <img
            src={DeveloperImg1}
            className="m-auto w-32 h-32  md:w-44 md:h-44 bg-gray-200 rounded-full mb-4"
            alt=""
          />
          <h1>By. BHISHAN SAH</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
            temporibus suscipit dicta, voluptatum placeat vel.
          </p>
        </div>
        <div className="bg-white md:w-1/2 h-fit md:bg-gray-400 rounded-lg  md:rounded-r-xl  p-4 md:border-l-4 md:border-black">
          <img
            src={DeveloperImg2}
            className="m-auto w-32 h-32  md:w-44 md:h-44 bg-gray-200 rounded-full mb-4"
            alt=""
          />
          <h1>By. SHIV RAJ RAUT</h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint rounded-lg
            temporibus suscipit dicta, voluptatum placeat vel.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Developer;
