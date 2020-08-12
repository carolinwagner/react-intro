import React from "react";

export default function Todo({ text, completed }) {
  return (
    <li>
      <label>
        <input checked={completed} type="checkbox" />
        {text}
      </label>
    </li>
  );
}
