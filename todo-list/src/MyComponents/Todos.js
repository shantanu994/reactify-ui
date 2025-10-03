import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h2 className="my-3">Todos List</h2>
      {props.todos.length == 0 ? (
        <p>No Todos to display</p>
      ) : (
        props.todos.map((todo) => {
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
        })
      )}
    </div>
  );
};

export default Todos;