import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(
    // redenring the todos
    [
      { id: 1, text: "Learn React", category: "Trabalho", isCompleted: false },
      { id: 2, text: "Learn JS", category: "Estudos", isCompleted: false },
      { id: 3, text: "Improve C#", category: "Pessoal", isCompleted: false },
    ]
  );

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map(
          (
            // mapping the todos
            todo 
          ) => (
           <Todo todo={todo}/> // passing the todo as a prop to the Todo component
          )
        )}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
