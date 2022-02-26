import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  // This will fire when the update is submitted
  const submitUpdate = (value) => {
    // This will update the todo with the id and the value
    updateTodo(edit.id, value);

    // This will set the edit back to default after the todo has been updated
    setEdit({
      id: null,
      value: "",
    });
  };

  // If edit.id === true... (this will become true once the edit button has been clicked)
  if (edit.id) {
    // return the todo form to input a new value
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      // This will check if todo is complete, and if not it will set the className as "Todo-row"
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      // Key will be the random index value
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodos(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => {
            // onClick, the setEdit function will fire and pass the ID and Value to the function
            setEdit({ id: todo.id, value: todo.text });
          }}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
