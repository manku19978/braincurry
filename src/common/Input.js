import React from "react";
import Error from "./Error";

const Input = ({ name, label, type, value, handleInput, error }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={type}
        value={value || ""}
        onChange={(e) => handleInput(name, e)}
        style={{ borderColor: `${error ? "red" : "black"}` }}
      />
      <Error error={error} />
    </>
  );
};

export default Input;
