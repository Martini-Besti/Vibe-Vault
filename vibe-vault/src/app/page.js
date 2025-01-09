"use client";
import PhotoUpload from "@/components/PhotoUpload";
import { useState, useEffect } from "react";

export default function Home() {
  // todos is the value
  // setTodos is the function to update the value

  const [uploads, setUploads] = useState([]);

  // localStorage
  // JSON = Javascript Object Notation (A string representation of JS code such as an object or an array)

  // use effect

  // use effect is a hook that runs a block of code when the component / page loads

  // local storage is like a database except it is in the browser
  // do not store sensitive information in local storage

  useEffect(() => {
    try {
      const storedUploads = localStorage.getItem("uploads");
      if (storedUploads) {
        setUploads(JSON.parse(storedUploads));
      }
    } catch (error) {
      console.log("There was an error");
    }
  }, []);


const handleChange = (id) => {
const newUploads = uploads.map((upload) => {
if (upload.id === id) {
  return {
    ...upload, 
    completed: !upload.completed
  }
}
return upload;
})
localStorage.setItem("uploads", JSON.stringify(newUploads));
setUploads(newUploads);
}

  return (
    <div className="flex flex-col gap-16">
      {uploads.map((upload, index) => {
        return (
          <PhotoUpload
            key={index}
            title={upload.title}
            photo={upload.photo}
            description={upload.description}
            completed={upload.completed}
            handleEdit={() => handleChange(upload.id)}
          />
        );
      })}
    </div>
  );
}
