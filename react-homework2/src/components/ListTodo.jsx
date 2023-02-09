import { useState } from "react";

const ListTodo = ({ todos, deleteTodo, setTodos }) => {
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState("");

  function checkTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function updateTitle(newTitle, id) {
    console.log(newTitle);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  }

  return (
    <div>
      <h1 className="center">To-Dos</h1>
      <table>
        <thead>
          <tr>
            <th>userID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Complete</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr>
              <td className="center">{todo.userId}</td>
              <td className="center">{todo.id}</td>
              {editId === todo.id ? (
                <td>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    size={todo.title.length}
                  />
                  <button
                    className="save"
                    onClick={() => {
                      updateTitle(title, editId);
                      setEditId("");
                    }}
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setTitle("");
                      setEditId("");
                    }}
                    className="cancel"
                  >
                    Cancel
                  </button>
                </td>
              ) : (
                <td className={todo.completed ? "line" : ""}>{todo.title}</td>
              )}

              <td className="center">
                <input
                  className="checkbox"
                  value={todo.completed}
                  type="checkbox"
                  checked={todo.completed}
                />
              </td>
              <td className="center">
                <button onClick={() => checkTodo(todo.id)} className="checked">
                  ✓
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setTitle(todo.title);
                  }}
                  className="edit"
                >
                  Edit
                </button>
              </td>
              <td className="center">
                <button className="delete" onClick={() => deleteTodo(todo.id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="completed">
        <button
          onClick={() =>
            setTodos(todos.filter((todo) => todo.completed === false))
          }
          className="delete"
        >
          Delete Completed To-Dos
        </button>
      </div>
    </div>
  );
};

export default ListTodo;
