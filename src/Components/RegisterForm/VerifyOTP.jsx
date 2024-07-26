import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const VerifyOTP = ({ formData, setFormData, handleVerify }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-4"
    >
      <div className="w-full md:w-3/4 mx-auto pb-16">
        <h2 className="text-xl font-semibold mb-2">Verify OTP</h2>
        <div>
          <div className="relative flex mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-700" />
            </div>
            <input
              id="EmailOtp"
              type="text"
              name="EmailOtp"
              value={formData.EmailOtp}
              onChange={(e) => setFormData({ ...formData, EmailOtp: e.target.value })}
              placeholder="Enter Email OTP"
              className="p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500 peer w-[60%]"
            />
            <button
              type="button"
              onClick={() => handleVerify('Email')}
              className="w-[30%] md:w-28  bg-brand-light ml-4 hover:bg-brand-dark rounded-sm text-white"
            >
              Verify
            </button>
          </div>
          <div className="relative flex">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-700" />
            </div>
            <input
              type="text"
              name="PhoneOtp"
              value={formData.PhoneOtp}
              onChange={(e) => setFormData({ ...formData, PhoneOtp: e.target.value })}
              placeholder="Enter Phone OTP"
              className="p-2 pl-10 border-2 border-gray-400 rounded focus:outline-none focus:border-blue-500 peer w-[60%]"
            />
            <button
              type="button"
              onClick={() => handleVerify('Phone')}
              className="w-[30%] md:w-28 bg-brand-light hover:bg-brand-dark rounded-sm text-white ml-4"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VerifyOTP;