import React, { useState } from "react";
import "./Todo.css";

export default function Todo({ text, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <li>
      <label className={isCompleted ? "completed" : ""}>
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
