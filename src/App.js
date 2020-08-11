import React from "react";
import "./App.css";
import Entry from "./Entry";
import ToDo from "./ToDo";

export default function App() {
  return (
    <div>
      <header>
        <h1>To Dos</h1>
      </header>
      <Entry />
      <ToDo text="Make a to do app" />
      <ToDo text="Add to do's" completed />
      <ToDo text="Complete everything" />
    </div>
  );
}
