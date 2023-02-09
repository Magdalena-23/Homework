import { useEffect, useState } from "react";
import ListTodo from "./ListTodo";
import CreateTodo from "./CreateTodo";

const Todo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        // console.log(data);
      });
  }, []);

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <ListTodo todos={todos} deleteTodo={deleteTodo} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
