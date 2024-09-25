import React from 'react';
import RoomIcon from "../../assets/img/Room.png";
import HomeIcon from "../../assets/img/solar-cell.png";
import Apartment from "../../assets/img/apartment.png";
import PlumberIcon from "../../assets/img/plumber.png";
import Electrician from "../../assets/img/electrician.png";
import Socialphone from "../../assets/img/social-marketing.png";

const Services = () => {
    const HandleRoomRent = () => {
        alert("Service is currently Unavailable !");
      };


    return (
      <div className="text-black flex flex-col items-center  uppercase rounded-t-3xl md:rounded-none  md:text-lg font-bold  text-[12px] absolute z-10 px-4 py-8 top-28 h-auto md:min-h-fit min-h-96  w-full      bg-gradient-to-r from-gray-700 to-blue-950 bluer-500">
        <div>
          <h1 className='md:text-3xl text-xl  text-white opacity-75 mb-4 uppercase font-extrabold'>Services We Provide</h1>
        </div>
       <div className="flex gap-4 justify-around items-center flex-wrap md:justify-center md:gap-16">
       <div
         onClick={HandleRoomRent}
         className="relative  hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
       >
         <div className="absolute inset-0  bg-blue-300   rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
         <img
           src={RoomIcon}
           className="w-12 h-12 md:w-16 md:h-16 z-10 relative "
           alt=""
           srcset=""
         />
         <span className="relative text-[14px] mt-2 z-10 break-words">
           Rent Room
         </span>
       </div>

       <div
         onClick={HandleRoomRent}
         className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
       >
         <div className="absolute inset-0  bg-blue-300    rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
         <img
           src={Apartment}
           className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
           alt=""
           srcset=""
         />
         <span className="relative z-10 text-[14px] mt-2 ">
           Apartment
         </span>
       </div>

       <div
         onClick={HandleRoomRent}
         className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
       >
         <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
         <img
           src={HomeIcon}
           className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
           alt=""
           srcset=""
         />
         <span className="relative z-10 text-[14px] mt-2">
           Rent Home
         </span>
       </div>

       <div
         onClick={HandleRoomRent}
         className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
       >
         <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
         <img
           src={PlumberIcon}
           className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
           alt=""
           srcset=""
         />
         <span className="relative z-10 text-[14px] mt-2">Plumber</span>
       </div>

       <div
         onClick={HandleRoomRent}
         className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
       >
         <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
         <img
           src={Electrician}
           className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
           alt=""
           srcset=""
         />
         <span className="relative z-10 text-[14px] mt-2">
           Electrician
         </span>
       </div>

       <div
         onClick={HandleRoomRent}
         className="relative hover:-translate-y-2 duration-300 ease-in-out  flex flex-col justify-center items-center w-28 h-28 md:w-32 md:h-32 bg-gray-100 bg-opacity-75 cursor-pointer rounded-lg shadow-gray-300 shadow-md overflow-hidden group"
       >
         <div className="absolute inset-0 bg-blue-300     rounded-tl-full transform scale-0 group-hover:animate-fill-bottom-right hover:rounded-tl-fully"></div>
         <img
           src={Socialphone}
           className="w-12 h-12 md:w-16 md:h-16  z-10 relative"
           alt=""
           srcset=""
         />
         <span className="relative z-10 text-[12px] mt-2">
           Sell your Phone
         </span>
       </div>
     </div>
      </div>
        
    );
};




export default Services;
