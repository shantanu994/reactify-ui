import React from "react";
import TodoItem from "../MyComponents/TodoItem";
import { useState } from "react";

const Todos = (props) => {

  const [completedTodos, setCompletedTodos] = useState([]);

  let complete = false;
  function togglecomplete(event){
    setCompletedTodos(event.target.value);
  }

  return (
    <>
    <div className="container">
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
                <label>
                  <input type="radio" value="complete" checked={complete===false} onChange={togglecomplete}  />
                  complete
                </label>
                <p>Complete:{complete }</p>
                
              </>
            );
          })}
    </div>
  </>  
  );
};

export default Todos;
