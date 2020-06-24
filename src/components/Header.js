import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./Header.css";

export default (props) => {
  const title = useSelector((state) => state.headerReducer.title, shallowEqual);
  const subtitle = useSelector(
    (state) => state.headerReducer.subtitle,
    shallowEqual,
  );

  return (
    <>
      <Navbar />
      <div className="header-container">
        <img className="header-image" alt="headerImage" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};
