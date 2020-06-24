import * as actionTypes from "../types";

export const setTitle = (data) => ({
  type: actionTypes.SET_TITLE,
  payload: data,
});

export const setSubtitle = (data) => ({
  type: actionTypes.SET_SUBTITLE,
  payload: data,
});
