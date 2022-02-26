import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
  // Set the state of todos
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    // This is from stack overflow. It wont allow spaces for no reason. (if someone puts in 60 spaces they wont show up)
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // This will hold the incoming todos, and use the spread operator to add
    const newTodos = [todo, ...todos];

    // Add to the todo list
    setTodos(newTodos);
    console.log(todo, ...todos); // The "todo" that is separated by a comma will make sure to include all of the elements in the array. Without it, the console.log will be one off
  };

  // This will remove a todo
  const removeTodo = (id) => {
    // This will basically find the todo, filter it into a new array IF the id does not match the id that was clicked
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    // Set todos to the new array that was made
    setTodos(removeArr);
  };

  // This will update a todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    // This will get the old items and map through the list. When it maps through the list, it will check each item to see if the ID is === to the ID clicked, using the ternary operator, if the ID is true, the value will be replaced by the newValue. If it is not true, the item will not be changed
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // This function will fire when a task has been completed
  const completeTodo = (id) => {
    // It will take in an id prop for the ID of the component
    let updatedTodos = todos.map((todo) => {
      // Create a new array that will map the todos
      if (todo.id === id) {
        // if the id that is clicked matches the id to a todo...
        todo.isComplete = !todo.isComplete; // Toggle isComplete
      }
      return todo;
    });
    setTodos(updatedTodos); // Set the todos to the updated array
  };

  return (
    <div>
      <h1> Whats the plan for today? </h1>
      {/* The onSubmit will add to the list once the form or the input is submitted*/}
      <TodoForm onSubmit={addTodo} />{" "}
      <Todo
        todos={todos}
        completeTodos={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
