import "./App.css";
import Header from "./MyComponents/Header.js";
import Footer from "./MyComponents/Footer.js";
import Todos from "./MyComponents/Todos.js";  
import { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo ", todo);
    // Deleting this way in react does not delete the element from the array
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo 1", desc: "Description 1", completed: false },
    { id: 2, title: "Todo 2", desc: "Description 2", completed: true },
    { id: 3, title: "Todo 3", desc: "Description 3", completed: false },
  ]);
  return (
    <>
    <Header title="TODO's App" searchbar={false} />
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
    </>
  );
}

export default App;
