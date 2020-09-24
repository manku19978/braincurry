import React from "react";

const Error = ({ error, select }) => {
  return error ? (
    <>
      <span className={select ? "s_error" : "error"}>{error}</span>
      <br />
    </>
  ) : null;
};

export default Error;
