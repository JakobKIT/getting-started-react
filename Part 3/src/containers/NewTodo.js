import React from 'react';

const NewTodoContainer = ({onChange, onSubmit}) => (
  <form className="mb-4">
    <fieldset>
      <legend>New Todo</legend>
    </fieldset>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" name="title" className="form-control" id="title" placeholder="Enter title" onChange={onChange} />
    </div>
    <div className="form-group">
      <label htmlFor="text">Text</label>
      <input type="text" id="text" name="text" className="form-control" placeholder="Enter text..." onChange={onChange} />
    </div>
    <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
  </form>
);

export default NewTodoContainer;
