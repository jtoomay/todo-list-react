import React, { useState } from "react";
import NewTodoCard from "./NewTodoCard";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <button id="add-button" onClick={() => setShow(true)}>
        +
      </button>
      <h1> TODO: </h1>
      <NewTodoCard show={show} />
    </div>
  );
}
