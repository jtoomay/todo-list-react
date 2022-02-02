import React from "react";
import { v4 as uuidv4, v4 } from "uuid";

export default function Todos(task) {
  console.log(JSON.stringify(task));
  console.log(task);
  return <li key={uuidv4()}> {task.name} </li>;
}
