// ClientPost.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function ClientPost() {
  const [formData, setFormData] = useState({
    type: 'Room',
    description: '',
    price: '',
    image1: null,
    image2: null,
    image3: null,
  });
  const [previews, setPreviews] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name.startsWith('image')) {
      const file = e.target.files[0];
      setFormData({ ...formData, [e.target.name]: file });
      setPreviews({
        ...previews,
        [e.target.name]: URL.createObjectURL(file),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('type', formData.type);
    data.append('description', formData.description);
    data.append('price', formData.price);
    if (formData.image1) data.append('images', formData.image1);
    if (formData.image2) data.append('images', formData.image2);
    if (formData.image3) data.append('images', formData.image3);

    if (
      !formData.type ||
      !formData.description ||
      !formData.price ||
      isNaN(formData.price)
    ) {
      setMessage('Please fill out all fields correctly.');
      toast.error('Please fill out all fields correctly.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:7000/api/post', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage('Post created successfully!');
      toast.success('Post created successfully!');
      setFormData({
        type: 'Room',
        description: '',
        price: '',
        image1: null,
        image2: null,
        image3: null,
      });
      setPreviews({ image1: null, image2: null, image3: null });
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error creating post: ' + error.response.data.message);
      toast.error('Error creating post: ' + error.response.data.message);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto px-4 pt-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-extrabold text-center mb-4">
          Post Your Room, Apartment, or House For Rent
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Type Field */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium">
              Type
            </label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full border  rounded-md py-2 px-3 bg-transparent "
            >
              <option className="text-black" value="Room">Room</option>
              <option className="text-black" value="Apartment">Apartment</option>
              <option className="text-black" value="House">House</option>
            </select>
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full border rounded-md py-2 px-3 bg-transparent"
            ></textarea>
          </div>

          {/* Price Field */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full border rounded-md py-2 px-3 bg-transparent"
            />
          </div>

          {/* Image Upload Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((img) => (
              <div key={img} className="space-y-2">
                <label
                  htmlFor={`image${img}`}
                  className="block text-sm font-medium"
                >
                  Image {img}
                </label>
                <input
                  type="file"
                  id={`image${img}`}
                  name={`image${img}`}
                  onChange={handleChange}
                  accept="image/*"
                  className="sr-only bg-transparent"
                />
                <div className="border-2 border-dashed rounded-lg p-2">
                  {previews[`image${img}`] ? (
                    <img
                      src={previews[`image${img}`]}
                      alt={`Preview ${img}`}
                      className="h-32 w-full object-cover rounded"
                    />
                  ) : (
                    <label
                      htmlFor={`image${img}`}
                      className="text-gray-400 text-sm text-center"
                    >
                      Click to upload
                    </label>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white"
            >
              Create Post
            </button>
          </div>
        </form>

        {/* Message Display */}
        {message && (
          <p className="mt-4 text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
}

export default ClientPost;
