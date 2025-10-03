import "./App.css";
import Header from "./MyComponents/Header.js";
import Footer from "./MyComponents/Footer.js";
import Todos from "./MyComponents/Todos.js";
import AddTodo from "./MyComponents/AddTodo.js";
import CounterCards from "./MyComponents/CounterCards.js";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const onDelete = (todo) => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] !== todo) {
        newTodos.push(todos[i]);
      }
    }
    setTodos(newTodos);
  };

  const addTodo = (title, desc) => {
    let sno = 1;
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      completed: false 
    };
    setTodos([...todos, myTodo]);
  };

  const toggleComplete = (todo) => {
    let newTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].sno === todo.sno) {
        let updatedTodo = {
          sno: todos[i].sno,
          title: todos[i].title,
          desc: todos[i].desc,
          completed: !todos[i].completed
        };
        newTodos.push(updatedTodo);
      } else {
        newTodos.push(todos[i]);
      }
    }
    setTodos(newTodos);
  };

  return (
    <>
      <Header title="TODO's App" />
      <CounterCards todos={todos} /> 
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} toggleComplete={toggleComplete} />
      <Footer />
    </>
  );
}

export default App;