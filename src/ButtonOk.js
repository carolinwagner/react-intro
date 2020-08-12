import React from "react";
import "./ButtonOk.css";

export default function ButtonOk({ onClickDoThis }) {
  return (
    <button onClick={onClickDoThis} className="ButtonOk">
      Add
    </button>
  );
}
