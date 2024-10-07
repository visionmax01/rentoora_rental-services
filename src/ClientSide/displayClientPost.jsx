import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const token = localStorage.getItem('token');

  const fetchPosts = async () => {
    if (!token) {
      setError('No token found. Please log in.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('http://localhost:7000/api/post', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : 'Error fetching posts'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:7000/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = response.data;
      toast.success(message);
      setPosts(posts.filter((post) => post._id !== postId));
      setShowDeletePopup(false); // Hide popup after delete
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error deleting post';
      toast.error(errorMessage);
    }
  };

  const handleUpdate = async () => {
    // Send the updated data to the server here
    try {
      const response = await axios.put(`http://localhost:7000/api/posts/${selectedPost._id}`, selectedPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Post updated successfully!');
      setShowUpdatePopup(false); // Close the update form after saving
      fetchPosts(); // Reload the posts to reflect the update
    } catch (error) {
      toast.error('Error updating post');
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-CA', options);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (posts.length === 0) return <p className='p-4'>No posts available.</p>;

  return (
    <div className="p-4 ml-12">
      <h1 className="text-2xl font-bold mb-6 text-left text-gray-200">Your Posts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {posts.map((post) => (
          <div
            key={post._id}
            className="rounded-lg flex flex-col justify-between h-auto bg-transparent border-2 border-blue-800 shadow-lg transform transition duration-300 hover:scale-105"
          >
            {post.images.length > 0 ? (
              <img
                src={`http://localhost:7000/${post.images[0]}`}
                alt="Post image"
                className="w-full h-36 object-fit object-center  rounded-t-md  bg-gray-300"
              />
            ) : (
              <p className="text-gray-500 text-center">No image available</p>
            )}
            <div className='px-3 py-1'>
              <h2 className="text-xl font-semibold">{post.postType}</h2>
              <p className="mt-2 mb-1">{post.description}</p>
              <p className="font-bold">Price: Rs {post.price}</p>
              <p className="text-sm text-gray-500">Posted on: {formatDate(post.createdAt)}</p>
            </div>
            <div className=" mx-3 py-2 flex justify-between items-end ">
              <button
                onClick={() => {
                  setSelectedPost(post);
                  setShowDeletePopup(true); // Show delete confirmation popup
                }}
                className="bg-red-500 text-white px-2 py-1 rounded-sm hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setSelectedPost(post);
                  setShowUpdatePopup(true); // Show update form popup
                }}
                className="bg-gray-500 text-white px-2 py-1 rounded-full"
              >
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete confirmation popup */}
      {showDeletePopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg">
           <div className= "flex items-center gap-2 ">
           <i class="fa-solid fa-trash text-red-600 text-3xl"></i>
            <h3 className="text-md text-gray-600  font-bold">Are you sure you want to delete this post?</h3>
           </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => handleDelete(selectedPost._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-sm"
              >
                Yes
              </button>
              <button
                onClick={() => setShowDeletePopup(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-sm"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update post popup */}
      {showUpdatePopup && (
        <div className="fixed inset-0  flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-gray-900 w-1/3 p-6 rounded-lg relative">
            <h3 className="text-xl font-bold mb-2 uppercase text-center">Update Post</h3>
            <form className="space-y-4 ">
              <div>
                <label className="block text-sm mb-1">Type</label>
                <input
                  type="text"
                  value={selectedPost.postType}
                  disabled
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, postType: e.target.value })
                  }
                  className="w-full text-blue-600  bg-transparent outline-none focus:border-red-400 border px-2  py-1 "
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea
                  value={selectedPost.description}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, description: e.target.value })
                  }
                  className="w-full text-blue-600  h-32 bg-transparent outline-none focus:border-red-400 border px-2  py-1 "
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Price</label>
                <input
                  type="number"
                  value={selectedPost.price}
                  onChange={(e) =>
                    setSelectedPost({ ...selectedPost, price: e.target.value })
                  }
                  className="w-full text-blue-600  bg-transparent outline-none focus:border-red-400 border px-2  py-1 "
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={handleUpdate}
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-sm"
                >
                  Update
                </button>
                <button
                  onClick={() => setShowUpdatePopup(false)}
                  type="button"
                  className="absolute top-0 right-0 bg-brand-bgColor rounded-tr-lg text-white  hover:text-red-400 px-3 py-1 rounded-sm"
                >
                  X
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayPosts;
