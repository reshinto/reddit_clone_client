import * as actionTypes from "../types";
import { BASE_URL } from "../constants";
import { load, fail, clearError } from "./ultilities";

export const getPosts = () => async (dispatch) => {
  let queryURL = "posts";
  dispatch(load());
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`);
    const data = await res.json();
    dispatch({
      type: actionTypes.GET_POSTS,
      payload: data,
    });
    dispatch(clearError());
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const getPost = (postId) => async (dispatch) => {
  let queryURL = `posts/${postId}`;
  dispatch(load());
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`);
    const data = await res.json();
    dispatch({
      type: actionTypes.GET_POST,
      payload: data,
    });
    dispatch(clearError());
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const addPost = (title, url) => async (dispatch) => {
  const user_id = Number(localStorage.getItem("userId"));
  let queryURL = "posts";
  const queryData = { title, url, user_id };
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
      type: actionTypes.ADD_POST,
      payload: data.message,
    });
    dispatch(clearError());
    dispatch(getPosts());
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const editPost = (title, url, postId) => async (dispatch) => {
  const user_id = Number(localStorage.getItem("userId"));
  const queryURL = `posts/${postId}`;
  const queryData = {
    title,
    url,
    user_id,
  };
  const config = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryData),
  };
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`, config);
    const data = await res.json();
    dispatch({
      type: actionTypes.EDIT_POST,
      payload: data.message,
    });
    dispatch(getPost(postId));
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const deletePost = (postId) => async (dispatch) => {
  const user_id = Number(localStorage.getItem("userId"));
  console.log(postId);
  const queryURL = `posts/${postId}`;
  const queryData = {
    user_id,
  };
  const config = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryData),
  };
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`, config);
    const data = await res.json();
    dispatch({
      type: actionTypes.DELETE_POST,
      payload: data.message,
    });
    dispatch(getPosts());
  } catch (error) {
    dispatch(fail(error.message));
  }
};
