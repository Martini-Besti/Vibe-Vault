import React from "react";

const PhotoUpload = ({ title, description, completed, handleEdit, photo }) => {
  return (
    <div
      className={`shadow-lg rounded-lg p-10 text-black ${
        completed ? "bg-yellow-200" : "bg-white"
      }`}
    >
      <h1>{title}</h1>
      <img src={photo}></img>
      <p>{description}</p>
      <button onClick={handleEdit}>
        {completed ? "un-favourite" : "favourite"}
      </button>
    </div>
  );
};

export default PhotoUpload;
