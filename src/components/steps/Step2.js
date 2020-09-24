import React from "react";
import Input from "../../common/Input";
import Error from "../../common/Error";

const Step2 = ({ handleInput, currentStep, fields, errors }) => {
  const { date, exp } = fields;

  return currentStep === 2 ? (
    <div className="form-group">
      <Input
        name="date"
        label="Date of Joining"
        type="date"
        value={date}
        handleInput={handleInput}
        error={errors["date"]}
      />

      <label htmlFor="exp">Level of Experience</label>
      <select
        name="exp"
        id="exp"
        value={exp}
        onChange={(e) => handleInput("exp", e)}
        style={{ borderColor: `${errors["exp"] ? "red" : "black"}` }}
      >
        <option value="" defaultValue>
          Select your experience level
        </option>
        <option value="newbie">Newbie</option>
        <option value="pro">Pro</option>
        <option value="league level">League Level</option>
        <option value="expert">Expert</option>
        <option value="coach">Coach</option>
      </select>
      <Error error={errors["exp"]} select />
    </div>
  ) : null;
};

export default Step2;
