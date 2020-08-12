import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function deleteTodo(text) {
    setTodos(todos.filter((todo) => todo !== text));
  }

  function saveInput(element) {  
    setInputValue(element.target.value);
  }

  return (
    <>
      <h1>To Dos</h1>
      <TodoForm onSubmit={addTodo} onChange={saveInput} value={inputValue} />
      <ul className="TodoList">
        {todos.map((todo, index) => (
          <Todo text={todo} key={index} onDelete={deleteTodo} />
        ))}
      </ul>
    </>
  );
}
