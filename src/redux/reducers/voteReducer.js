import * as actionTypes from "../types";

const initialState = {
  isLoading: false,
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
    case actionTypes.UP_VOTE:
    case actionTypes.UP_COMMENT_VOTE:
    case actionTypes.DOWN_VOTE:
    case actionTypes.DOWN_COMMENT_VOTE:
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
