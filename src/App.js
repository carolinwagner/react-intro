import React from "react";
import "./App.css";
import ToDoEntry from "./ToDoEntry";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <div>
      <header>
        <h1>To Dos</h1>
      </header>
      <ToDoEntry />
      <ToDoList />
    </div>
  );
}
