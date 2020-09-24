import React from "react";
import Input from "../../common/Input";
import { inputListOfStep3 } from "../../utils/const";

const Step3 = ({ handleInput, currentStep, fields, errors }) => {
  const { name, email, phn } = fields;
  const inputList = inputListOfStep3(name, email, phn, errors);

  return currentStep === 3 ? (
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
      <div
        class="g-recaptcha"
        data-sitekey="6LclG9AZAAAAAPLIQwYHiHWjBj6mFx7CGodfPP-Q"
      ></div>
    </div>
  ) : null;
};

export default Step3;
