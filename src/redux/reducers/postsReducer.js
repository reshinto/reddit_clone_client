import * as actionTypes from "../types";

const initialState = {
  isLoading: false,
  posts: [],
  post: [],
  error: null,
  message: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case actionTypes.GET_POST:
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case actionTypes.ADD_POST:
    case actionTypes.EDIT_POST:
    case actionTypes.DELETE_POST:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
      };
    case actionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    case actionTypes.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
