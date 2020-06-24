import * as actionTypes from "../types";

const initialState = {
  title: "",
  subtitle: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case actionTypes.SET_SUBTITLE:
      return {
        ...state,
        subtitle: action.payload,
      };
    default:
      return state;
  }
};
