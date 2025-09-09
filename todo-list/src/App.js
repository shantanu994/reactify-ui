import "./App.css";
import Header from "./MyComponents/Header.js";
import Footer from "./MyComponents/Footer.js";
import Todos from "./MyComponents/Todos.js";

function App() {
  const onDelete = ()=>{
    console.log("I am onDelete of todo ",todos);
  }
  let todos = [
    { id: 1, title: "Todo 1", desc: "Description 1", completed: false },
    { id: 2, title: "Todo 2", desc: "Description 2", completed: true },
    { id: 3, title: "Todo 3", desc: "Description 3", completed: false },
  ];
  return (
    <>
    <Header title="TODO's App" searchbar={false} />
    <Todos todos={todos} onDelete={onDelete} />
    <Footer />
    </>
  );
}

export default App;
