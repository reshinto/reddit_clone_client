import * as actionTypes from "../types";

const initialState = {
  isLoading: false,
  comments: [],
  comment: [],
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
    case actionTypes.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        isLoading: false,
      };
    case actionTypes.GET_COMMENT:
      return {
        ...state,
        comment: action.payload,
        isLoading: false,
      };
    case actionTypes.ADD_COMMENT:
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
