import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Eye, EyeOff, Lock ,User} from 'lucide-react';
import NavBar from '../Components/NavBar';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRef = useRef(null); // Create a ref for the password input

  useEffect(() => {
    if (passwordRef.current) {
      passwordRef.current.focus(); // Focus the password input field on page load
    }
  }, []);

  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      setError('Please enter both password and confirm password');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/change-password', { password });
      setSuccess(true);
    } catch (error) {
      setError('Error changing password');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleSubmit();   
    }
  };
  useEffect(() => {
    document.title = "Vision - Change password";
  }, []);
  return (
    <div>
      <NavBar/>
      <div className="flex flex-col items-center min-h-screen px-4">
       <div className="bg-white p-6 rounded-lg relative shadow-md w-full max-w-md mt-12">
       <User className='w-12 h-12  bg-blue-300 rounded-full p-2 absolute -translate-y-12 text-gray-950'/>
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Lock className="text-gray-400" />
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full p-2 border border-gray-300 rounded-md pl-10 pr-10"
            onKeyDown={handleKeyDown} 
            ref={passwordRef} 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Lock className="text-gray-400" />
          </div>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full p-2 border border-gray-300 rounded-md pl-10 pr-10"
            onKeyDown={handleKeyDown} 
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3"
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4">
            <i className="fas fa-check"></i> Password changed successfully!!
          </p>
        )}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Change Password
        </button>
      </div>
    </div>
    </div>
   
  );
};

export default ChangePassword;
