import React, { useState } from "react";
import "./Todo.css";

export default function Todo({ text, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const switchingClassName = isCompleted ? "completed" : "";
  return (
    <li>
      <label className={switchingClassName}>
        <input
          checked={isCompleted}
          type="checkbox"
          onChange={() => setIsCompleted(!isCompleted)}
        />
        {text}
        <button className="deleteButton" onClick={() => onDelete(text)}>
          X
        </button>
      </label>
    </li>
  );
}
