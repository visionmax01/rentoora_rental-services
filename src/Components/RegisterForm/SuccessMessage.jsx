import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuccessStep = () => {
    const navigate = useNavigate();
    const handleLoginRedirection =()=>{
        navigate("/Login")
    }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-4"
    >
      <CheckCircle2 className="mx-auto text-green-500" size={64} />
      <h2 className="text-2xl font-semibold text-green-500">Success!</h2>
      <p>Your form has been submitted successfully.</p>
      <p>Go to login Page <button className='bg-brand-lightdark px-4 py-1.5 rounded-md text-white hover:bg-brand-dark' onClick={handleLoginRedirection}>Login</button></p>
    </motion.div>
  );
};

export default SuccessStep;