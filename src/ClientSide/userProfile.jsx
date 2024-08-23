import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:7000/auth/user-profile', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to load user profile');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

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

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;
  if (!user) return <div className="text-center mt-8">No user data available</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={user.profilePhotoPath || 'https://via.placeholder.com/150'} alt={user.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{user.name}</h2>
            <p className="mt-2 text-gray-500">Email: {user.email}</p>
            <p className="mt-2 text-gray-500">Phone: {user.phoneNo}</p>
            <p className="mt-2 text-gray-500">Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}</p>
            <p className="mt-2 text-gray-500">Address: {user.address}</p>
            <p className="mt-2 text-gray-500">Role: {user.role === 0 ? 'Client' : 'Admin'}</p>
            <p className="mt-2 text-gray-500">Account ID: {user.accountId}</p>
            <button 
              onClick={handleLogout}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;