import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/userActions";
import { setTitle, setSubtitle } from "../redux/actions/headerActions";
import "./LoginPage.css";

export default () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("login"));
    dispatch(setSubtitle(""));
  }, [dispatch]);

  return (
    <div className="login-container">
      <label>
        <span>username</span>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="Signup / Login"
          autoFocus={true}
        />
      </label>
      <button onClick={() => dispatch(login(username))}>Login</button>
    </div>
  );
};
