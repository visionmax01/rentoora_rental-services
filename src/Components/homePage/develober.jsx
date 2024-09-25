import React from "react";
import BhishanImage from "../../assets/img/my_profile_pic.jpg"; 
import SecondDevImage from "../../assets/img/shiv.png"; 
import NavBar from "../NavBar";

const Developer = () => {
  const developers = [
    {
      name: "BHISHAN PR. SAH",
      title: "Computer Engineer",
      role: "Full Stack Web Developer",
      mobile: "+91 9728161275",
      nepalino: "+977 9819931223",
      email: "bhishansah@gmail.com",
      image: BhishanImage,
    },
    {
      name: "SHIV RAJ RAUT",
      title: "Computer Engineer",
      role: "Frontend Developer",
      mobile: "+91- not available",
      nepalino: "+977 9819931223",
      email: "sraut683@rku.ac.in",
      image: SecondDevImage,
    },
  ];

  return (
   <>
   <NavBar/>
   <div className="flex flex-col items-center  p-8">
      <h1 className="md:text-4xl text-2xl text-white font-bold mb-8">
        Meet Our Developers
      </h1>
      <div className="w-full  flex justify-center flex-wrap gap-14 ">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="w-[95%] md:w-72   bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={dev.image}
              alt={`${dev.name}`}
              className="w-full h-60 md:object-cover md:object-top  "
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {dev.name}
              </h2>
              <p className="text-sm text-gray-600">{dev.title}</p>
              <p className="text-sm text-gray-600 mb-4">{dev.role}</p>
              <p className="text-sm text-gray-800">
                <strong>Indian No:</strong> {dev.mobile}
              </p>
              <p className="text-sm text-gray-800">
                <strong>Nepali No:</strong> {dev.nepalino}
              </p>
              <p className="text-sm text-gray-800">
                <strong>Email:</strong> {dev.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
   </>
  );
};

export default Developer;


