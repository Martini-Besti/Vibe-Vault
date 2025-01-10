"use client";
import PhotoUpload from "@/components/PhotoUpload";
import LikeCounter from "@/components/LikeCounter";
import { useState, useEffect } from "react";

export default function Home() {
  const [uploads, setUploads] = useState([]);

  // Handle 'like' button clicks for a specific photo
  const handleLikeButtonClick = (count, id) => {
    // get the items from ls 
    console.log(id)
    const items = localStorage.getItem("uploads")
    console.log(items)
    if (!items) {
      return;
    }
    // parse the items 
    const itemsParsed = JSON.parse(items)

    // loop over the items to find the post that has an id which matches the one
    // we pass to the function 

    itemsParsed.forEach(item => {
      // if we find a match, we set the like count of that item to be
      // the likecount we pass to this function 
      if (item.id === id) {
        item.likeCount = count
      }
    })

    // save it back to local storage

    const itemsToSave = JSON.stringify(itemsParsed);
    localStorage.setItem("uploads", itemsToSave);

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
          
          <LikeCounter
            key={upload.id}
            title={upload.title}
            updateStateInParent={(count, id) => handleLikeButtonClick(count, id)} // Pass handler function
            id={upload.id}
            likeCount={upload.likeCount}
          />
        </div>
      ))}
    </div>
  );
}
