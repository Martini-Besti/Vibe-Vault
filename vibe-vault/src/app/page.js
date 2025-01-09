"use client";
import PhotoUpload from "@/components/PhotoUpload";
import TallyCounter from "@/components/TallyCounter";
import { useState, useEffect } from "react";

export default function Home() {
  const [uploads, setUploads] = useState([]);

  // Handle 'like' button clicks for a specific photo
  const handleLikeButtonClick = (title) => {
    console.log(`Liked ${title}`);
    // You can modify state or take other actions based on the like
  };

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
          completed: !upload.completed,
        };
      }
      return upload;
    });
    localStorage.setItem("uploads", JSON.stringify(newUploads));
    setUploads(newUploads);
  };

  return (
    <div className="flex flex-col gap-16">
      {uploads.map((upload, index) => (
        <div key={upload.id} className="flex flex-col items-center">
          <PhotoUpload
            title={upload.title}
            photo={upload.photo}
            description={upload.description}
            completed={upload.completed}
            handleEdit={() => handleChange(upload.id)}
          />
          {/* Like button and counter below each photo */}
          <TallyCounter
            key={upload.id}
            title={upload.title}
            updateStateInParent={handleLikeButtonClick} // Pass handler function
          />
        </div>
      ))}
    </div>
  );
}
