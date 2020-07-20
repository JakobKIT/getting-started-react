import { ADD_POST, DELETE_POST } from './types';

export const addPost = (post) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: post,
  });
};

export const deletePost = (id) => (dispatch) => {
  dispatch({
    type: DELETE_POST,
    payload: id,
  })
};