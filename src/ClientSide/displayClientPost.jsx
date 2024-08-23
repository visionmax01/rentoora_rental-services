import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    const token = localStorage.getItem('token');
    console.log('Token:', token);  // Check if the token is being retrieved correctly
    if (!token) {
      setError('No token found. Please log in.');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:7000/api/posts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Response:', response);  // Inspect the response object
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);  // Log full error for more details
      if (error.response) {
        if (error.response.status === 401) {
          setError('Unauthorized: Please log in again.');
        } else if (error.response.status === 404) {
          setError('Posts not found.');
        } else {
          setError('An unexpected error occurred.');
        }
      } else if (error.request) {
        setError('No response from the server.');
      } else {
        setError('Error: ' + error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  

  const handleDelete = async (postId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:7000/api/posts/${postId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
      // Optionally, provide user feedback here
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (posts.length === 0) return <p>No posts available.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Posts</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <div key={post._id} className="border rounded-lg p-4 bg-white shadow-md">
            <h2 className="text-lg font-semibold">{post.type}</h2>
            <p className="text-gray-700 mb-2">{post.description}</p>
            <p className="text-gray-900 font-bold">Price: ${post.price}</p>
            <div className="mt-2">
              {post.images.map((image, index) => (
                <img
                  key={index}
                  src={`http://localhost:7000/${image}`}
                  alt={`Post image ${index + 1}`}
                  className="w-full h-auto mb-2 rounded"
                />
              ))}
            </div>
            <button
              onClick={() => handleDelete(post._id)}
              className="bg-red-500 text-white p-2 rounded mt-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayPosts;
