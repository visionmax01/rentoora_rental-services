import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, Mail } from 'lucide-react';
import NavBar from '../Components/NavBar';

const ForgetPassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Initialize emailOrPhone from navigation state if available
    if (location.state && location.state.emailOrPhone) {
      setEmailOrPhone(location.state.emailOrPhone);
    }
  }, [location.state]);

  const handleSendOtp = () => {
    if (!emailOrPhone) {
      setError('Please enter email or phone number');
      return;
    }

    navigate('/otp', { state: { emailOrPhone } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendOtp();
    }
  };
  // Set the page title
  useEffect(() => {
    document.title = "Vision - Forget password";
  }, []);
  return (
    <div >
      <NavBar/>
    <div className="flex flex-col items-center min-h-screen px-4">
      <div className=" relative bg-white p-6 rounded-lg mt-16 shadow-md w-full max-w-md">


        <User className='w-12 h-12 -top-6 bg-blue-300 rounded-full p-2 absolute text-gray-950'/>

        <h2 className="text-2xl font-semibold mb-6 mt-4">Forget Password</h2>
        <div className="relative">
          <Mail className="absolute top-5 left-2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Enter email or phone number"
            className="w-full p-2 pl-10 border border-gray-300 rounded-md mb-4"
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleSendOtp}
          className="w-full bg-blue-500 mt-2 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Send OTP
        </button>
      </div>
    </div>

    </div>
  );
};

export default ForgetPassword;
