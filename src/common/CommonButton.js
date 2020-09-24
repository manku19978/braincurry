import React from "react";

const CommonButton = ({ label, handleClick, type }) => {
  return type === "submit" ? (
    <button className="continue_btn" type={type} onClick={handleClick}>
      {label}
    </button>
  ) : type === "button" ? (
    <button className="continue_btn" onClick={handleClick} type={type}>
      {label}
    </button>
  ) : (
    <button className="back_btn" onClick={handleClick}>
      &#8592; Back
    </button>
  );
};

export default CommonButton;
