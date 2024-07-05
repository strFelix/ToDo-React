import { useState } from "react";
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
            <div className="todo">
              <div className="content">
                <p>{todo.text}</p> 
                <p className="category">({todo.category})</p>
              </div>
              <div>
                <button>Completar</button>
                <button>X</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
