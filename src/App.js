import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos.js";
import NewTodoCard from "./Components/NewTodoCard";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function App() {
  // use state
  const [show, setShow] = useState(false);

  // Open Function
  const handleOpen = () => {
    setShow(true);
  };

  // Close Function
  const handleClose = () => {
    setShow(false);
  };

  const [todo, setTodos] = useState([]);

  // * This callback is used to get the data from the todo card and put it back in the app() component
  // const FunctionName = () => { setFunction( () => [...oldArr, newElement ])}
  const todoCallback = (task) => {
    setTodos((todo) => [...todo, task]); // This will add the item that needs to be done to the array that is stored here
  };

  return (
    <div className="App">
      <h1> Todo List </h1>
      <Button variant="primary" onClick={() => handleOpen()}>
        New Todo
      </Button>

      <NewTodoCard
        open={handleOpen}
        close={handleClose}
        show={show}
        todo={todoCallback}
      />

      {/* This will list all of the todos */}
      {todo.map((item) => (
        <Todos name={item} />
      ))}
    </div>
  );
}

export default App;
