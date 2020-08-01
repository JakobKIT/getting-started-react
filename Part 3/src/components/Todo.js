import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, deleteTodo } from '../actions/todoActions';
import TodoListContainer from '../containers/TodoList';
import NewTodoContainer from '../containers/NewTodo';

export class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNewTodo: false,
      title: '',
      text: '',
    };
  }

  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

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
    const newTodo = { id: this.props.todos.length + 1, title, text };
    this.props.addTodo(newTodo);
    this.setState({
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
              todos={this.props.todos}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todo.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo(todo) {
    dispatch(addTodo(todo));
  },
  deleteTodo(id) {
    dispatch(deleteTodo(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Todo);

