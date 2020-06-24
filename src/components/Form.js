import React from "react";
import { useHistory } from "react-router-dom";
import "./Form.css";

export default ({
  type,
  input1,
  input1placeholder,
  handleInput1Change,
  input1Value,
  input1error,
  input2,
  input2placeholder,
  handleInput2Change,
  input2Value,
  input2error,
  submitAction,
  path,
}) => {
  const history = useHistory();
  return (
    <div className="form">
      <label htmlFor={input1}>{input1}</label>
      {type === "text" ? (
        <>
          <input
            name={input1}
            type="text"
            onChange={(e) => handleInput1Change(e.target.value)}
            value={input1Value}
            placeholder={input1placeholder}
            required
          />
          <p>{input1error}</p>
        </>
      ) : (
        <textarea
          name={input1}
          onChange={(e) => handleInput1Change(e.target.value)}
          value={input1Value}
          placeholder={input1placeholder}
          rows="4"
          cols="50"
        />
      )}
      {input2 ? (
        <>
          <label htmlFor={input2}>{input2}</label>
          <input
            name={input2}
            type="url"
            onChange={(e) => handleInput2Change(e.target.value)}
            value={input2Value}
            placeholder={input2placeholder}
            pattern="https://www.*"
            required
          />
          <p>{input2error}</p>
        </>
      ) : null}
      <button
        onClick={() => {
          submitAction();
          type === "textarea"
            ? history.push(`/posts${path}`)
            : history.goBack();
        }}
        disabled={
          (input1Value === "" && !input2Value) || input2Value === ""
            ? true
            : false
        }
      >
        submit
      </button>
    </div>
  );
};
