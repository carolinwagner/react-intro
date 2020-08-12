import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function App() {
  const [todos, setTodos] = useState(["Hallo"]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    console.log("It works");
    setTodos([...todos, inputValue]);
  }

  function saveInput(element) {
    console.log(element.target.value);
    setInputValue(element.target.value);
  }

  return (
    <>
      <h1>To Dos</h1>
      <TodoForm onSubmit={addTodo} onChange={saveInput} value={inputValue} />
      <ul>
        {todos.map((todo, index) => (
          <Todo text={todo} key={index} />
        ))}
      </ul>
    </>
  );
}
