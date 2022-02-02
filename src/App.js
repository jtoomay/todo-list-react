import "./App.css";
import Todos from "./Components/Todos.js";
import NewTodoCard from "./Components/NewTodoCard";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import { v4 as uuidv4 } from "uuid";

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
      {/* Header */}
      <div className="d-flex justify-content-around">
        <Button className="m-2 " variant="primary" onClick={() => handleOpen()}>
          +
        </Button>
        <h1 className="m-2"> Todo List </h1>
        <Button
          className="m-2"
          variant="primary"
          onClick={() => alert("Not so fast there")}
        >
          D
        </Button>
      </div>

      <NewTodoCard
        open={handleOpen}
        close={handleClose}
        show={show}
        todo={todoCallback}
      />

      {/* This will list all of the todos */}
      {todo.map((item) => (
        <Todos key={uuidv4()} name={item} />
      ))}
    </div>
  );
}

export default App;
