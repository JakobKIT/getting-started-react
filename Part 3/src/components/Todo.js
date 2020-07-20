import React, { Component, Fragment } from 'react'
import TodoListContainer from '../containers/TodoList';
import NewTodoContainer from '../containers/NewTodo';

export class Todo extends Component {
  toggleNewTodo() {
    this.setState({
      showNewTodo: !this.state.showNewTodo
    });
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const { text, title } = this.state;
    this.setState({
      todos: [{ id: this.state.todos.length + 1, title, text }, ...this.state.todos],
      showNewTodo: false,
      title: '',
      text: '',
    });
  }

  render() {
    const { showNewTodo } = this.state;
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="col w-25 mt-4 mx-auto">
            { showNewTodo ? 
              (<Fragment>
                <button className="mb-2 w-100 btn btn-danger" onClick={this.toggleNewTodo.bind(this)}>Cancel</button> 
                <NewTodoContainer 
                  onChange={this.onChange.bind(this)}
                  onSubmit={this.onSubmit.bind(this)} />
              </Fragment>)
              : (<button className="mb-2 w-100 btn btn-success" onClick={this.toggleNewTodo.bind(this)}>Add Todo</button>)
              }
            <TodoListContainer 
              todos={this.state.todos}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Todo;
