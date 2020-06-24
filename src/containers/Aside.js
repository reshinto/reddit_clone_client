import React from "react";
import { useHistory } from "react-router-dom";
import "./Aside.css";

export default () => {
  const history = useHistory();
  return (
    <aside>
      <button onClick={() => history.push("/posts/add")}>
        submit a new post
      </button>
    </aside>
  );
};
