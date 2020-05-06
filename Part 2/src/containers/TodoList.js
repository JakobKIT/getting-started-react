import React, { Fragment } from 'react';

const TodoListContainer = ({todos}) => (
  <Fragment>
    {
      todos.map(({id, title, text}) => (
          <div className="mb-3 card" key={id}>
            <div className="card-header">
              <h5>{title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{text}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary w-25">Edit</button>
              <button className="btn btn-success ml-2 w-25">Check</button>
            </div>
          </div>
        )
      )
    }
  </Fragment>
);

export default TodoListContainer;
