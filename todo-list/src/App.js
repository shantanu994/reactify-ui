import "./App.css";
import Header from "./MyComponents/Header.js";
import Footer from "./MyComponents/Footer.js";
import Todos from "./MyComponents/Todos.js";
import AddTodo from "./MyComponents/AddTodo.js";
import { useState, useEffect } from "react";

function App() {
  let initTTodos;
  if (localStorage.getItem("todos") === null) {
    initTTodos = [];
  } else {
    initTTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTTodos);

  const onDelete = (todo) => {
    const newTodos = todos.filter((e) => e !== todo);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="TODO's App" searchbar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
