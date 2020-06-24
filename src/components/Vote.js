import React from "react";
import "./Vote.css";

export default ({ type, vote, voteAction }) => {
  return (
    <>
      <img className={`vote-img img-${type}`} onClick={voteAction} alt="vote" />
    </>
  );
};
