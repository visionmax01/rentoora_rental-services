import React, { useRef, useState, useCallback } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { PenTool, User, Check, X, ZoomIn, ZoomOut, Lock, Unlock } from "lucide-react";

const UploadProfilePicture = ({ formData, setFormData }) => {
  const [previewImage, setPreviewImage] = useState(formData.profileImage || null);
  const [originalImage, setOriginalImage] = useState(null);
  const [crop, setCrop] = useState({ unit: "px", width: 200, height: 200 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [isCropping, setIsCropping] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [aspectLocked, setAspectLocked] = useState(false);
  const fileInputRef = useRef(null);
  const imgRef = useRef(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setOriginalImage(reader.result);
        setIsCropping(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePenToolClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleCropComplete = useCallback(async (crop) => {
    setCompletedCrop(crop);
    if (imgRef.current && crop.width > 0 && crop.height > 0) {
      try {
        const croppedImageUrl = await getCroppedImg(imgRef.current, crop);
        setPreviewImage(croppedImageUrl);
        setFormData((prevData) => ({ ...prevData, profileImage: croppedImageUrl }));
        setSuccessMessage("Image cropped and saved successfully!");
      } catch (error) {
        console.error("Error saving cropped image:", error);
        setSuccessMessage("Failed to save cropped image. Please try again.");
      }
    }
  }, [setFormData]);

  const getCroppedImg = (image, crop) => {
    if (!crop || !crop.width || !crop.height) {
      return Promise.reject(new Error("Invalid crop dimensions"));
    }

    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
      }, "image/jpeg");
    });
  };

  const handleCropCancel = (e) => {
    e.preventDefault();
    setIsCropping(false);
    setOriginalImage(null);
  };

  const handleZoomIn = (e) => {
    e.preventDefault();
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3));
  };

  const handleZoomOut = (e) => {
    e.preventDefault();
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.1));
  };

  const toggleAspectLock = (e) => {
    e.preventDefault();
    setAspectLocked(!aspectLocked);
    if (!aspectLocked) {
      setCrop((prev) => ({ ...prev, aspect: prev.width / prev.height }));
    } else {
      setCrop((prev) => ({ ...prev, aspect: undefined }));
    }
  };

  const handleCropChange = useCallback((_, percentCrop) => {
    setCrop(percentCrop);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-2">Upload Profile Picture</h2>
      {isCropping ? (
        <div className="w-full max-w-md">
          <div className="relative">
            <ReactCrop
              src={originalImage}
              onImageLoaded={(img) => (imgRef.current = img)}
              crop={crop}
              onChange={handleCropChange}
              onComplete={handleCropComplete}
              aspect={aspectLocked ? crop.width / crop.height : undefined}
              style={{ maxHeight: "300px" }}
            >
              <img src={originalImage} alt="Crop" style={{ transform: `scale(${zoom})` }} />
            </ReactCrop>
            <div className="absolute bottom-2 left-2 flex space-x-2">
              <button onClick={handleZoomOut} className="p-2 bg-white rounded-full shadow-md">
                <ZoomOut size={20} className="text-blue-500" />
              </button>
              <button onClick={handleZoomIn} className="p-2 bg-white rounded-full shadow-md">
                <ZoomIn size={20} className="text-blue-500" />
              </button>
              <button onClick={toggleAspectLock} className="p-2 bg-white rounded-full shadow-md">
                {aspectLocked ? <Lock size={20} className="text-blue-500" /> : <Unlock size={20} className="text-blue-500" />}
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handleCropComplete(crop)}
              className="mr-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              <Check size={20} />
            </button>
            <button
              onClick={handleCropCancel}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative w-48 h-48 rounded-lg overflow-hidden border-4 border-blue-500 shadow-lg">
          {previewImage ? (
            <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <User size={96} className="text-gray-400" />
            </div>
          )}
          <button
            type="button"
            className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-md"
            onClick={handlePenToolClick}
          >
            <PenTool size={20} className="text-blue-500" />
          </button>
        </div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      {!isCropping && (
        <p className="mt-4 text-sm text-gray-600">
          Click the pen icon to upload or change your profile picture
        </p>
      )}
      {successMessage && (
        <p className="mt-2 text-sm text-green-600">
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default UploadProfilePicture;
