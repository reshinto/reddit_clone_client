import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import headerReducer from "./reducers/headerReducer";
import userReducer from "./reducers/userReducer";
import postsReducer from "./reducers/postsReducer";
import voteReducer from "./reducers/voteReducer";
import commentsReducer from "./reducers/commentsReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  headerReducer,
  userReducer,
  postsReducer,
  voteReducer,
  commentsReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, initialState, enhancer);

export default store;
