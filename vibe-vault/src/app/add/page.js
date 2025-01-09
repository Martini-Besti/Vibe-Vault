"use client";
import { useState } from "react";
const page = () => {
  const [todoObject, setTodoObject] = useState({
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
      setTodoObject({
        ...todoObject,
        [name]: e.target.checked,
      });
      return;
    }
    setTodoObject({
      ...todoObject,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const localStorageTodos = localStorage.getItem("todos");
    // check the state of the todo to ensure we only get correct data from the form. (not empty data)
    if (!todoObject.title || !todoObject.description || !todoObject.photo) {
      setIsError(true);
      return;
    }
    // ternery operator is a shorthand syntax for an if statement
    const todoWithId = {
      ...todoObject,
      id: localStorageTodos ? JSON.parse(localStorageTodos).length + 1 : 0,
    };
    // we are setting an item in local storage to be the value of whatever it was before but with the new todo item added
    if (localStorageTodos) {
      localStorage.setItem(
        "todos",
        JSON.stringify([...JSON.parse(localStorageTodos), {...todoWithId}])
      );
    } else {
        localStorage.setItem("todos", JSON.stringify([todoWithId]))
    }
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
        <div className="bg-red-100 text-white p-4">An error occurred!</div>
      )}
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
            value={todoObject.title}
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
            value={todoObject.photo}
            onChange={handleInputChange}
            className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
          />
        </div>
        <div className="w-1/3">
          <label
            className="block text-gray-500 font-bold pr-4"
            htmlFor="description"
          >
            Caption
          </label>
        </div>
        <div className="w-2/3">
          <input
            name="description"
            type="text"
            id="description"
            placeholder="Enter Your Vibe"
            value={todoObject.description}
            onChange={handleInputChange}
            className="bg-gray-200 border-2 border-gray-200 rounded py-2 px-4 text-gray-700"
          />
        </div>
        <div className="w-3/3">
          <input
            className="mr-2"
            type="checkbox"
            onChange={handleInputChange}
            name="completed" id="completed"
          />
        </div>
        <button
          className="bg-[#011936] text-[#F4FFFD] p-4 rounded-xl mt-5"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};
export default page;