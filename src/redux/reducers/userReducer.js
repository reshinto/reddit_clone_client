import * as actionTypes from "../types";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: [],
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
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: initialState.user,
      };
    case actionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case actionTypes.SIGNUP:
      return {
        ...state,
        isLoading: false,
        message: action.payload,
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
