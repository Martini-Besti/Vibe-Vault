"use client";
import TodoItem from "@/components/TodoItem";
import { useState, useEffect } from "react";

export default function Home() {
  // todos is the value
  // setTodos is the function to update the value

  const [todos, setTodos] = useState([]);

  // localStorage
  // JSON = Javascript Object Notation (A string representation of JS code such as an object or an array)

  // use effect

  // use effect is a hook that runs a block of code when the component / page loads

  // local storage is like a database except it is in the browser
  // do not store sensitive information in local storage

  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.log("There was an error");
    }
  }, []);


const handleChange = (id) => {
const newTodos = todos.map((todo) => {
if (todo.id === id) {
  return {
    ...todo, 
    completed: !todo.completed
  }
}
return todo;
})
localStorage.setItem("todos", JSON.stringify(newTodos));
setTodos(newTodos);
}

  return (
    <div className="flex flex-col gap-16">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            title={todo.title}
            photo={todo.photo}
            description={todo.description}
            completed={todo.completed}
            handleEdit={() => handleChange(todo.id)}
          />
        );
      })}
    </div>
  );
}
