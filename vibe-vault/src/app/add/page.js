"use client";
import { useState } from "react";

const page = () => {
  const [uploadObject, setUploadObject] = useState({
    title: "",
    photo: "",
    description: "",
    completed: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "completed") {
      setUploadObject({
        ...uploadObject,
        [name]: e.target.checked,
      });
      return;
    }
    setUploadObject({
      ...uploadObject,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const localStorageUploads = localStorage.getItem("uploads");

    // Check if all fields are filled
    if (!uploadObject.title || !uploadObject.description || !uploadObject.photo) {
      setIsError(true);
      return;
    }

    // Add unique ID and like count to the new upload
    const uploadWithId = {
      ...uploadObject,
      id: localStorageUploads ? JSON.parse(localStorageUploads).length + 1 : 0,
      likeCount: 0,
    };

    // Save to localStorage
    if (localStorageUploads) {
      localStorage.setItem(
        "uploads",
        JSON.stringify([...JSON.parse(localStorageUploads), { ...uploadWithId }])
      );
    } else {
      localStorage.setItem("uploads", JSON.stringify([uploadWithId]));
    }

    // Set success state
    setIsSuccess(true);
    setIsError(false);  // Clear any error message

    // Reset form fields
    setUploadObject({
      title: "",
      photo: "",
      description: "",
      completed: false,
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-5 text-gray-500">
        Upload Your Best Photo
      </h1>
      {isSuccess && (
        <div className="bg-blue-100 text-blue-700 p-4">
          Photo added successfully!
        </div>
      )}
      {isError && (
        <div className="bg-red-100 text-white p-4">An error occurred! Please fill all fields.</div>
      )}
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit}>
          <div className="w-1/3">
            <label className="block text-gray-500 font-bold pr-4" htmlFor="title">
              Enter User ID
            </label>
          </div>
          <div className="w-2/3">
            <input
              name="title"
              id="title"
              type="text"
              placeholder="@yourUserID"
              value={uploadObject.title}
              onChange={handleInputChange}
              className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
            />
          </div>
          <div className="w-1/3">
            <label className="block text-gray-500 font-bold pr-4" htmlFor="photo">
              Upload Photo
            </label>
          </div>
          <div className="w-2/3">
            <input
              name="photo"
              id="photo"
              type="text"
              placeholder="Enter Photo URL"
              value={uploadObject.photo}
              onChange={handleInputChange}
              className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
            />
          </div>
          <div className="w-1/3">
            <label
              className="block text-gray-500 font-bold pr-4 resize-y"
              htmlFor="description"
            >
              Caption
            </label>
          </div>
          <div className="w-2/3 resize-y">
            <input
              name="description"
              type="text"
              id="description"
              placeholder="Enter Your Vibe"
              value={uploadObject.description}
              onChange={handleInputChange}
              className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
              maxLength="250"
            />
            <div className="text-gray-500 text-sm mt-1">
              {uploadObject.description.length}/250 characters
            </div>
          </div>

          <button
            className="bg-[#011936] text-[#F4FFFD] p-4 rounded-xl mt-5"
            type="submit"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
