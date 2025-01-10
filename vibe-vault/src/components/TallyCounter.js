"use client";
import { useState, useEffect } from "react";

// props is an object
const TallyCounter = ({ title, updateStateInParent, id, likeCount }) => {
  const [count, setCount] = useState(likeCount);

  useEffect(() => {
    console.log(likeCount)
  }, [likeCount])

  const buttonHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    updateStateInParent(count, id)
  }, [count])

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="mt-4">
      <h2>{title}</h2>
      <p className="mb-4">Likes: {count}</p>

      <button className="bg-blue-500 p-4 rounded-xl" onClick={buttonHandler}>
        <img
          src="https://i.ibb.co/6YHsLBx/pngegg-3.png"
          alt="Like Button"
          width={50}
          height={50}
        />
      </button>

      <button className="bg-red-500 text-white p-4 rounded-xl" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default TallyCounter;
