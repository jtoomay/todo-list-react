import React, { useState } from "react";
import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";

export default function NewTodoCard({ open, close, show, todo }) {
  // "todo" is a function that will move the value to the app component
  const [todoVal, setTodoVal] = useState("");

  return (
    <>
      <Modal show={show}>
        <Modal.Title> New Todo: </Modal.Title>
        <Modal.Body>
          <InputGroup className="todo-name-group">
            <FormControl
              placeholder="What needs to get done? "
              value={todoVal}
              onChange={(e) => setTodoVal(e.target.value)}
            />
          </InputGroup>

          <Button variant="danger" onClick={() => close()}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              todo(todoVal);
              close();
            }}
          >
            Add
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
