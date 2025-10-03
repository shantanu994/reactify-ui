import React from 'react'

const TodoItem = (props) => {
  let buttonText = "Complete";
  if (props.todo.completed == true) {
    buttonText = "Mark Incomplete";
  }

  return (
    <div className='todo-item'>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className="deletebtn" onClick={() => props.onDelete(props.todo)}>Delete</button>
      <button className="completebtn" onClick={() => props.toggleComplete(props.todo)}>{buttonText}</button>
    </div>
  )
}

export default TodoItem
