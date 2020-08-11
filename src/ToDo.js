import React from "react";

export default function Todo({ text, completed }) {
  return (
    <label>
      <input checked={completed} type="checkbox" />
      {text}
    </label>
  );
}
