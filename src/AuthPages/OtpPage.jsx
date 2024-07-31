import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, PenTool } from 'lucide-react';
import NavBar from '../Components/NavBar';

const OtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [emailOrPhone, setEmailOrPhone] = useState(location.state?.emailOrPhone || '');
  const inputRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsExpired(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = () => {
    if (!otp) {
      setError('Please enter OTP');
      return;
    }
    if (isExpired) {
      setError('OTP has expired. Please request a new one.');
      return;
    }
    navigate('/change-password');
  };

  const handleEdit = () => {
    navigate('/forget-password', { state: { emailOrPhone } });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleResendOtp = () => {
    setTimeLeft(60);
    setIsExpired(false);
    setError(null);
    console.log('Resending OTP to', emailOrPhone);
  };

  return (
   <div>
    <NavBar/>
     <div className="flex flex-col items-center min-h-screen  px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-12">
        <User className='w-12 h-12 -translate-y-12 bg-blue-300 rounded-full p-2 absolute text-gray-950'/>
        <h2 className="text-2xl font-semibold mb-4 mt-2">Enter OTP</h2>
        <div className="flex items-center border-lg mb-4 bg-gray-200 rounded-l-full ">
          <p className="text-white px-3 mr-2 bg-black py-1 rounded-full">OTP Sent To:</p>
          <span className="text-black text-[16px] font-semibold">{emailOrPhone}</span>
          <PenTool
            onClick={handleEdit}
            className="ml-2 w-4 h-4 text-red-500 hover:text-brand-light cursor-pointer -rotate-90"
          />
        </div>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        {isExpired ? (
          <p className="text-sm text-red-600 mb-2">OTP has expired.</p>
        ) : (
          <p className="text-sm text-gray-600 mb-2">Time remaining: <span className="text-red-500 font-extrabold ">{formatTime(timeLeft)}</span></p>
        )}
        {isExpired && (
          <button
            onClick={handleResendOtp}
            className="text-blue-500 hover:text-blue-700 text-sm mb-4"
          >
            Resend OTP
          </button>
        )}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 mt-4 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={isExpired}
        >
          Submit
        </button>
      </div>
    </div>
   </div>
  );
};

export default OtpPage;