import React from 'react'

const TodoItem = ({title, description, completed, handleEdit}) => {
  return (
    <div className={`shadow-lg rounded-lg p-10 text-black ${
        completed ? "bg-green-300" : "bg-red-300"
    }`}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={handleEdit}>
            Mark as {completed ? "incomplete" : "complete"}
        </button>
    </div>
  )
}

export default TodoItem