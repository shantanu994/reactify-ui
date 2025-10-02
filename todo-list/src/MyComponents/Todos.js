import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  
  return (
    <div className="container" style={mystyle}>
      <h2 className="my-3">Todos List</h2>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <div key={todo.sno}>
                <TodoItem
                  todo={todo}
                  onDelete={props.onDelete}
                  toggleComplete={props.toggleComplete}
                />
                <hr />
              </div>
            );
          })}
    </div>
  );
};

export default Todos;