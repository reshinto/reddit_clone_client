import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./Header.css";

export default (props) => {
  let isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const title = useSelector((state) => state.headerReducer.title, shallowEqual);
  const subtitle = useSelector(
    (state) => state.headerReducer.subtitle,
    shallowEqual,
  );

  return (
    <>
      <div className="header-container">
        {isLoggedIn ? <Navbar /> : null}
        <img className="header-image" alt="headerImage" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};
