import React from "react";
import Input from "../../common/Input";
import { inputListOfStep1 } from "../../utils/const";

const Step1 = ({ handleInput, currentStep, fields, errors }) => {
  const { team_name, location, players, captain } = fields;
  const inputList = inputListOfStep1(
    team_name,
    location,
    players,
    captain,
    errors
  );

  return currentStep === 1 ? (
    <div className="form-group">
      {inputList.map((input, index) => (
        <Input
          key={index}
          name={input.name}
          label={input.label}
          type={input.type}
          value={input.value}
          handleInput={handleInput}
          error={input.error}
        />
      ))}
    </div>
  ) : null;
};

export default Step1;
