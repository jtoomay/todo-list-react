import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos.js";
import NewTodoCard from "./Components/NewTodoCard";
import { useEffect, useState } from "react";
import { Button, InputGroup, Modal, FormControl } from "react-bootstrap";
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

      <Button onClick={() => console.log(todo)}> Show Todo </Button>

      <NewTodoCard
        open={handleOpen}
        close={handleClose}
        show={show}
        todo={todoCallback}
      />
    </div>
  );
}

export default App;
