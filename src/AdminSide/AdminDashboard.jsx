import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from "react-icons/fa";
import manpng from "../assets/img/man.png"

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:7000/auth/profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(response.data);
        if (response.data.profilePhotoPath) {
          fetchProfilePhoto(response.data.profilePhotoPath);
        }
        setTimeout(() => setLoading(false), 2000);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    const fetchProfilePhoto = async (profilePhotoPath) => {
      try {
        const response = await axios.get(`http://localhost:7000/${profilePhotoPath}`, {
          responseType: 'blob',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        const imageUrl = URL.createObjectURL(response.data);
        setProfilePhoto(imageUrl);
      } catch (error) {
        console.error('Error fetching profile photo:', error);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:7000/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      localStorage.removeItem('token');
      localStorage.removeItem('userRole');
      navigate('/client-login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) return (
    <div className="w-full h-screen mx-auto my-auto text-white flex justify-center items-center">
      <div className="w-fit mx-auto flex justify-center flex-col">
        <FaSpinner className="animate-spin w-10 h-10 mx-auto" />
        <p>Redirecting to Admin Dashboard...</p>
      </div>
    </div>
  );

  if (!user) return <div className="w-full h-screen mx-auto my-auto text-white">Error loading user data.</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 flex items-center">
        {profilePhoto ? (
          <img
            className="w-24 h-24 rounded-full object-cover mr-6"
            src={profilePhoto}
            alt="Profile"
          />
        ) : (
          <img className="w-24 h-24 rounded-full object-cover"
          src={manpng}
          alt="pic"
          />
        )}
        <div className="ml-8 ">
          <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}!</h2>
          <h2 className="font-bold">
            Account Type &nbsp;&nbsp;:&nbsp;&nbsp;
            <span className="text-blue-300">
              {user.role === 0 ? "Client" : "Admin"}
            </span>
          </h2>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
