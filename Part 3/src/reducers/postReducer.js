import { ADD_POST, DELETE_POST } from '../actions/types';
const initialState = {
  posts: localStorage.getItem('posts'),
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
  
    default:
      return state;
  }
}