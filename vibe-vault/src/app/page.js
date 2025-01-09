"use client";
import PhotoUpload from "@/components/PhotoUpload";
import TallyCounter from "@/components/TallyCounter";
import { useState, useEffect } from "react";

export default function Home() {
  const [uploads, setUploads] = useState([]);

  // Handle 'like' button clicks for a specific photo
  const handleLikeButtonClick = (title) => {
    console.log(`Liked ${title}`);

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
    <div className="flex flex-col gap-16 items-center pt-4 ">
      {uploads.map((upload, index) => (
        <div
          key={upload.id}
          className="flex flex-col items-center max-w-[800px] max-h-[800px]"
        >
          <PhotoUpload
            title={upload.title}
            photo={upload.photo}
            description={upload.description}
            completed={upload.completed}
            handleEdit={() => handleChange(upload.id)}
          />
          
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
