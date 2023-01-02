import { useEffect, useState } from "react";

const ToDos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
            
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(json => setTodos(json))
            .catch(error => {
             console.error(error)
            })
            
    }, [])
        // console.log(todos)
       
        return (
        <div className="list">
            <div className="to-dos">To-do's</div>
            <ol>
                {todos.map(todo => (
                    <li key={todo.id}  
                        style={todo.completed ? {textDecoration: "line-through", color: "red"} : {color: "green"}}>{todo.title}
                    </li>
                ))}
            </ol>
        </div>
    )
}

               
export default ToDos;