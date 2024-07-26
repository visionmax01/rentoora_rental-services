import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Home, Calendar} from "lucide-react";
import WcIcon from '@mui/icons-material/Wc';
const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-4 w-full h-full"
    >
      <h2 className="text-xl font-semibold">Personal Information</h2>
      {/* form section one  */}
      <div className="flex flex-col md:flex-row w-full h-full justify-between pb-6">
        <div className="relative w-[100%] md:w-[45%] mb-8 md:mb-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-700" />
          </div>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500  peer "
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="absolute text-lg text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:text-black peer-focus:text-xl left-9"
          >
            Name
          </label>
        </div>

        <div className="relative w-[100%] md:w-[45%]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-700" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500  peer "
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="absolute text-lg text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:text-black peer-focus:text-xl left-9"
          >
            Email
          </label>
        </div>
      </div>
    {/* form section two  */}
      <div className="flex  flex-col md:flex-row w-full justify-between pb-6">
        <div className="relative w-[100%] md:w-[45%]  mb-8 md:mb-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
            <Phone className="h-5 w-5 text-gray-700" />
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500  peer "
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="absolute text-lg text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:text-black peer-focus:text-xl left-9"
          >
            Phone No 
          </label>
        </div>

        <div className="relative w-[100%] md:w-[45%]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-700" />
          </div>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={(e) =>
              setFormData({ ...formData, dob: e.target.value })
            }
            className="w-full p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500  peer "
            placeholder=" "
          />
          <label
            htmlFor="dob"
            className="absolute text-lg text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:text-black peer-focus:text-xl left-9"
          >
            Date of birth
          </label>
        </div>
      </div>

      {/* form section three  */}
      <div className="flex flex-col md:flex-row w-full h-full justify-between pb-6">
      <div className="relative w-[100%] md:w-[45%] mb-8 md:mb-0">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <WcIcon className="h-5 w-5 text-gray-700" />
          </div>
          <select
            type="gender"
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            className="w-full p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500  peer "
            placeholder=" "
          >
            <option value="none">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">female</option>
            <option value="transgender">transgender</option>
          </select>
          <label
            htmlFor="dob"
            className="absolute text-lg text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:text-black peer-focus:text-xl left-9"
          >
            
          </label>
        </div>
        <div className="relative w-[100%] md:w-[45%] ">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Home className="h-5 w-5 text-gray-700" />
          </div>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500  peer "
            placeholder=" "
          />
          <label
            htmlFor="address"
            className="absolute text-lg text-gray-500 duration-300 transform -translate-y-1/2 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 peer-focus:text-black peer-focus:text-xl left-9"
          >
            Full address 
          </label>
        </div>

        
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
