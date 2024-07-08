import "./App.css";

import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState(
    // redenring the todos
    [
      // { id: 1, text: "Learn React", category: "Trabalho", isCompleted: false },
      // { id: 2, text: "Learn JS", category: "Estudos", isCompleted: false },
      // { id: 3, text: "Improve C#", category: "Pessoal", isCompleted: false },
    ]
  );

  useEffect(() => {
    fetch("http://localhost:8000/todo/getall")
      .then((res) => res.json())
      .then((data) => { 
        let result = data.map((todo) => { todo.isCompleted === 0 ? todo.isCompleted = false : todo.isCompleted = true; return todo; });
        setTodos(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [search, setSearch] = useState(""); // setting the search state
  const [filter, setFilter] = useState("All"); // setting the filter state
  const [sort, setSort] = useState("Asc"); // setting the sort state

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, // copying the todos array using spread operator
      {
        id: todos.length + 1,
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos); // setting the new todos array
  };
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    ); // filtering the todos array based on the id
    setTodos(filteredTodos); // setting the new todos array
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    ); // mapping the todos array and toggling the isCompleted property
    // console.log(newTodos)
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search setSearch={setSearch} search={search} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          ) // filtering the todos based on the filter
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          ) // sorting the todos based on the sort
          .map(
            (
              // mapping the todos
              todo
            ) => (
              <Todo
                todo={todo}
                key={todo.id}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              /> // passing the todo as a prop to the Todo component
            )
          )}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
