import React from "react";

const AddTodo = (props) => {
  const [title, setTitle] = React.useState("");
  const submit = (e) => {
  return (
    <div className="container" my-3>
      <h3>Add Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
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
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
