import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AddPostPage from "./pages/AddPostPage";
import { getLoginStatus } from "./redux/actions/userActions";
import "./App.css";
import ViewPostPage from "./pages/ViewPostPage";
import EditPostPage from "./pages/EditPostPage";
import Alert from "./components/Alert";

function App() {
  let isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const userMessage = useSelector(
    (state) => state.userReducer.message,
    shallowEqual,
  );
  const postMessage = useSelector(
    (state) => state.postsReducer.message,
    shallowEqual,
  );
  const commentMessage = useSelector(
    (state) => state.commentsReducer.message,
    shallowEqual,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  let alert;
  if (userMessage) {
    alert = <Alert status="success" message={userMessage} />;
  }
  if (postMessage) {
    alert = <Alert status="success" message={postMessage} />;
  }
  if (commentMessage) {
    alert = <Alert status="success" message={commentMessage} />;
  }

  return (
    <Router>
      <Header />
      <div className="app-container">
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/reddit_clone_client">
              {isLoggedIn ? <Redirect to="/posts" /> : <LoginPage />}
            </Route>
            <Route exact path="/">
              {isLoggedIn ? <Redirect to="/posts" /> : <LoginPage />}
            </Route>
            <Route exact path="/posts" component={HomePage} />
            <Route exact path="/posts/add" component={AddPostPage} />
            <Route exact path="/posts/:postId" component={ViewPostPage} />
            <Route exact path="/posts/edit/:postId" component={EditPostPage} />
          </Switch>
        ) : (
          <LoginPage />
        )}
      </div>
      {alert}
    </Router>
  );
}

export default App;
