import React from "react";
import ToDo from "./Todo";
import "./ToDoList.css";

export default function TodoList() {
  return (
    <section className="ToDoList">
      <ToDo text="Create To Do App" completed />
      <ToDo text="Add To Dos" />
      <ToDo text="Go outside" />
      <ToDo text="Ride a bike" />
    </section>
  );
}
