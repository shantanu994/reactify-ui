import React from "react";
import TodoItem from "../MyComponents/TodoItem";
import { useState } from 'react';

const Todos = (props) => {

  const [completedTodos, setCompletedTodos] = useState([]);

  const handleCheckboxChange = (todo) => {
    if (completedTodos.includes(todo.sno)) {
      setCompletedTodos(completedTodos.filter((sno) => sno !== todo.sno));
    } else {
      setCompletedTodos([...completedTodos, todo.sno]);
    }
    
  };

  let mystyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={mystyle}>
      <h2 className=" my-3">Todos List</h2>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </>
            );
          })}
    </div>
  );
};

export default Todos;
