import React from "react";
import { Button } from "react-bootstrap";

// This is for each individual todo that is on the list
export default function Todos(task) {
  return (
    <div className="task-card d-flex">
      <div className="d-inline-flex m-auto">
        <Button
          className="m-2"
          variant="secondary"
          onClick={() => {
            // TODO: Get this up and rollin
            alert("This will remove the current item");
          }}
        >
          Remove
        </Button>
        <li className="m-auto list-unstyled"> {task.name} </li>
      </div>
    </div>
  );
}
