import React from 'react';
import { motion } from 'framer-motion';

const ReviewInformation = ({ formData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-4 pb-12"
    >
      <h2 className="text-xl font-semibold">Review Information</h2>
       <div>Profile Pic
         <img className="w-28 h-28  rounded-lg border-2 border-brand-dark" src="" alt="" />
       </div>
      <table className="flex w-full bg-gray-200 p-2 rounded-lg">
      <ul className='w-[36%]  h-auto'>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>Name </li>
        <li className='font-semibold text-lg h-auto mb-3 w-full flex-wrap  '>Email </li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>Phone </li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>Date Of Birth </li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>Gender </li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>Address </li>
      </ul>
      <ul className='w-[8%]  h-auto' >
        <li className='font-semibold text-lg h-auto mb-3 w-full '>:</li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>:</li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>:</li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>:</li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>:</li>
        <li className='font-semibold text-lg h-auto mb-3 w-full '>:</li>
      </ul>
      <ul className='w-[56%] h-auto'>
        <li className="text-[16px] text-blue-600 font-bold h-auto mb-3 w-full">{formData.name}</li>
        <li className="text-[16px] text-blue-600 font-bold h-auto mb-3 w-full">{formData.email}</li>
        <li className="text-[16px] text-blue-600 font-bold h-auto mb-3 w-full">{formData.phone}</li>
        <li className="text-[16px] text-blue-600 font-bold h-auto mb-3 w-full">{formData.dob}</li>
        <li className="text-[16px] text-blue-600 font-bold h-auto mb-3 w-full">{formData.gender}</li>
        <li className="text-[16px] text-blue-600 font-bold h-auto mb-3 w-full">{formData.address}</li>
      </ul>
      </table>
    </motion.div>
  );
};

export default ReviewInformation;