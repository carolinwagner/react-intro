import React from "react";
import ButtonOk from "./ButtonOk";
import ButtonCancel from "./ButtonCancel";
import "./ToDoEntry.css";

export default function Entry() {
  return (
    <div className="ToDoEntry">
      <input></input>
      <ButtonOk />
      <ButtonCancel />
    </div>
  );
}
