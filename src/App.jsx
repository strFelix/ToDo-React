import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState(
    // redenring the todos
    [
      { id: 1, text: "Learn React", category: "Trabalho", isCompleted: false },
      { id: 2, text: "Learn JS", category: "Estudos", isCompleted: false },
      { id: 3, text: "Improve C#", category: "Pessoal", isCompleted: false },
    ]
  );

  const [search, setSearch] = useState(""); // setting the search state

  const addTodo = (text, category) => {
    const newTodos = [...todos, // copying the todos array using spread operator
      {
        id: todos.length + 1,
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos); // setting the new todos array
  }
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null); // filtering the todos array based on the id
    setTodos(filteredTodos); // setting the new todos array
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo); // mapping the todos array and toggling the isCompleted property
    // console.log(newTodos)
    setTodos(newTodos); 
  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search setSearch={setSearch} search={search} />
      <div className="todo-list">
        {todos
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
        .map(
          (
            // mapping the todos
            todo 
          ) => (
           <Todo todo={todo} key={todo.id} removeTodo={removeTodo} completeTodo={completeTodo}/> // passing the todo as a prop to the Todo component
          )
        )}
      </div>
      <TodoForm  addTodo={addTodo}/>
    </div>
  );
}

export default App;
