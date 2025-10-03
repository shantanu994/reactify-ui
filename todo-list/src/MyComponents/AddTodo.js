import React from "react";
import { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(title == "" || desc == ""){
      alert("Title or Description cannot be blank");
    }else{
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  return (
    <div className="add-todo" my-3>
      <h2>Add Todo</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="addbtn">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
