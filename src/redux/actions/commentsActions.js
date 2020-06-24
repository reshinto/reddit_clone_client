import * as actionTypes from "../types";
import { BASE_URL } from "../constants";
import { load, fail, clearError } from "./ultilities";

export const getComments = (postId) => async (dispatch) => {
  let queryURL = `posts/${postId}/comments`;
  dispatch(load());
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`);
    const data = await res.json();
    dispatch({
      type: actionTypes.GET_COMMENTS,
      payload: data,
    });
    dispatch(clearError());
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const getComment = (postId, commentId) => async (dispatch) => {
  let queryURL = `posts/${postId}/comments/${commentId}`;
  dispatch(load());
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`);
    const data = await res.json();
    dispatch({
      type: actionTypes.GET_COMMENT,
      payload: data,
    });
    dispatch(clearError());
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const addComment = (postId, text) => async (dispatch) => {
  const user_id = Number(localStorage.getItem("userId"));
  let queryURL = `posts/${postId}/comments`;
  const queryData = { text, user_id };
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryData),
  };
  dispatch(load());
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`, config);
    const data = await res.json();
    dispatch({
      type: actionTypes.ADD_COMMENT,
      payload: data.message,
    });
    dispatch(getComments(postId));
    dispatch(clearError());
  } catch (error) {
    dispatch(fail(error.message));
  }
};
