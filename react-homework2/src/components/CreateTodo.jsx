import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

function CreateTodo({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    const newTodoObject = {
      userId: 1,
      id: nanoid(2),
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoObject]);
    setNewTodo("");
  }
  return (
    <div className="add">
      <h2>Create new To-Do</h2>
      <div>
        <input
          placeholder="new to-do..."
          className="add-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </div>
      <div>
        <button onClick={addTodo} className="add-todo">
          Add To-Do
        </button>
      </div>
    </div>
  );
}

export default CreateTodo;
