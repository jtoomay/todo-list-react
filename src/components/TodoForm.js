import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  // State for the input
  const [input, setInput] = useState(props.edit ? props.edit.value : ""); // The value for useState will bring the current value to the text box to edit

  // This will handle when the input is changed
  const handleChange = (e) => {
    // Set the input to the key that is pressed
    setInput(e.target.value);
  };

  // This will handle when the form is submitted
  const handleSubmit = (e) => {
    // PreventDefault() will prevent the page from reloading when the form is submitted (default behavior for submitting)
    e.preventDefault();
    props.onSubmit({
      // OnSubmit, give the props (todo) a random id between 1-1000
      id: Math.floor(Math.random() * 1000),
      // Give the text key the input value
      text: input,
    });
    setInput(""); // This will delete the previous text from the input once the form is submitted
  };
  // Set a default ref for inputRef. This is used when adding the auto-focus feature
  const inputRef = useRef(null);
  // Automatically focus on the inputRef
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {
        // If your updating a todo... show this...
        props.edit ? (
          <>
            <input
              type="text"
              placeholder="Update Todo"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef} // This will make the input be automatically focused when the page is visited
            />
            <button className="todo-button edit">Update</button>
          </>
        ) : (
          // If not, show this
          <>
            <input
              type="text"
              placeholder="Add a Todo"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef} // This will make the input be automatically focused when the page is visited
            />
            <button className="todo-button">Add Todo</button>
          </>
        )
      }
    </form>
  );
}

export default TodoForm;
