import * as actionTypes from "../types";

export const load = () => ({
  type: actionTypes.LOADING,
});

export const fail = (error) => ({
  type: actionTypes.ERROR,
  payload: error,
});

export const clearError = () => ({
  type: actionTypes.CLEAR_ERROR,
});

export const clearMessage = () => ({
  type: actionTypes.CLEAR_MESSAGE,
});
