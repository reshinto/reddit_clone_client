import * as actionTypes from "../types";
import { BASE_URL } from "../constants";
import { load, fail, clearError } from "./ultilities";

export const getLoginStatus = () => (dispatch) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = localStorage.getItem("user");
  if (isLoggedIn === "true") {
    dispatch({ type: actionTypes.LOGIN_SUCCESS });
    dispatch(login(user));
  }
};

export const loginSuccess = () => (dispatch) => {
  localStorage.setItem("isLoggedIn", true);
  dispatch({
    type: actionTypes.LOGIN_SUCCESS,
  });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userId");
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");
  dispatch({ type: actionTypes.LOGOUT });
  dispatch(clearError());
};

export const login = (username) => async (dispatch) => {
  let queryURL = "";
  let res;
  let data;
  dispatch(load());
  try {
    if (username === "") {
      queryURL = `users/undefined`;
      res = await fetch(`${BASE_URL}${queryURL}`);
      data = await res.json();
      if (data.length === 0) {
        dispatch(signup(username));
      } else {
        localStorage.setItem("userId", data[0].id);
        localStorage.setItem("user", username);
        dispatch({
          type: actionTypes.LOGIN,
          payload: data,
        });
        dispatch(loginSuccess());
        dispatch(clearError());
      }
    } else {
      queryURL = `users/${username}`;
      res = await fetch(`${BASE_URL}${queryURL}`);
      data = await res.json();
      if (data.length === 0) {
        dispatch(signup(username));
      } else {
        localStorage.setItem("userId", data[0].id);
        localStorage.setItem("user", username);
        dispatch({
          type: actionTypes.LOGIN,
          payload: data,
        });
        dispatch(loginSuccess());
        dispatch(clearError());
      }
    }
  } catch (error) {
    dispatch(fail(error.message));
  }
};

export const signup = (username) => async (dispatch) => {
  let queryURL = `users`;
  const queryData = { user: username };
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
      type: actionTypes.SIGNUP,
      payload: data.message,
    });
    dispatch(login(username));
    dispatch(clearError());
  } catch (error) {
    dispatch(fail(error.message));
  }
};
