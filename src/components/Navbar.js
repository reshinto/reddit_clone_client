import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../redux/actions/userActions";
import "./Navbar.css";

export default () => {
  let isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const home = window.location.pathname;
  return (
    <div className="navbar-container">
      {isLoggedIn ? (
        <>
          {home !== "/posts" ? (
            <FontAwesomeIcon
              onClick={() => history.goBack()}
              className="icon back"
              icon={faArrowAltCircleLeft}
            />
          ) : (
            <div></div>
          )}
          <h2>{user.length > 0 ? user[0].owner || "Anonymous" : null}</h2>
          <FontAwesomeIcon
            onClick={() => {
              dispatch(logout());
              history.push("/");
            }}
            className="icon signout"
            icon={faSignOutAlt}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
