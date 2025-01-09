import React from 'react'

const PhotoUpload = ({title, description, completed, handleEdit, photo}) => {
  return (
    <div className={`shadow-lg rounded-lg p-10 text-black ${
        completed ? "bg-green-400" : "bg-white"
    }`}>
        <h1>{title}</h1>
        <img src={photo}></img>
        <p>{description}</p>
        <button onClick={handleEdit}>
            Mark as {completed ? "plain" : "highlighted"}
        </button>
    </div>
  )
}

export default PhotoUpload