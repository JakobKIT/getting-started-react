import { ADD_TODO, DELETE_TODO } from '../actions/types';
const initialState = {
  todos: localStorage.getItem('todos') ? 
    JSON.parse(localStorage.getItem('todos')) : [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [action.payload, ...state.todos]
      localStorage.setItem('todos', JSON.stringify(newTodos))
      return {
        ...state,
        todos: newTodos,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo._id !== action.payload)
      };
  
    default:
      return state;
  }
}