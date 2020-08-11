import React from "react";

export default function Todo({ text, completed }) {
  return (
    <label className="Todo">
      <input checked={completed} type="checkbox" />
      {text}
    </label>
  );
}
