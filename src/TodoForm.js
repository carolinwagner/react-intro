import React from "react";
import ButtonOk from "./ButtonOk";
import "./TodoForm.css";

export default function TodoForm({ value, onChange, onSubmit }) {
  return (
    <div className="TodoForm">
      <input value={value} onChange={onChange}></input>
      <ButtonOk onClickDoThis={onSubmit} />
    </div>
  );
}
