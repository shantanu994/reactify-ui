import React from 'react'

const TodoItem = ({ todo,onDelete }) => {
  return (
    <div className='todo-item'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="deletebtn" onClick={() => onDelete(todo)}>Delete</button>

    </div>
  )
}

export default TodoItem
