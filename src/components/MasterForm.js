import React, { Component } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3.js";
import CommonButton from "../common/CommonButton";
import { handleValidation } from "../utils/validateForm";
import ProgressBar from "../common/ProgressBar";
import withWindowResize from "./withScreenDetails";
import { subHeading } from "../utils/const";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      currentStep: 1,
    };
  }

  handleInput = (field, event) => {
    let fields = this.state.fields;
    fields[field] = event.target.value;
    this.setState({ fields });
  };

  incrementCurrentStep = () => {
    this.setState((prevState) => {
      return { currentStep: prevState.currentStep + 1 };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { fields, currentStep } = this.state;
    const [formValidated, errors] = handleValidation(fields, currentStep);

    if (errors) {
      this.setState({ errors });
    }

    if (formValidated) {
      this.incrementCurrentStep();
      console.log(this.state.fields);
    }
  };

  nextStep = () => {
    const { fields, currentStep } = this.state;
    const [formValidated, errors] = handleValidation(fields, currentStep);

    if (errors) {
      this.setState({ errors });
    }

    if (formValidated) {
      this.incrementCurrentStep();
    }
  };

  prevStep = () => {
    this.setState((prevState) => {
      return { currentStep: prevState.currentStep - 1 };
    });
  };

  prevBtn = () => {
    const { currentStep } = this.state;
    if (currentStep > 1 && currentStep < 4) {
      return <CommonButton handleClick={this.prevStep} type="back" />;
    }
  };

  calculateProgressPercentage = () => {
    const { currentStep } = this.state;

    if (currentStep === 1) {
      return 30;
    } else if (currentStep === 2) {
      return 60;
    } else if (currentStep === 3) {
      return 90;
    } else {
      return 100;
    }
  };

  render() {
    const { currentStep, fields, errors } = this.state;
    const commonProps = {
      currentStep,
      handleInput: this.handleInput,
      fields,
      errors,
    };

    return (
      <div className="app">
        <div className="inner_container">
          {currentStep < 4 ? (
            <div className="form_container">
              <ProgressBar
                width={this.props.progressBarWidth}
                percentage={this.calculateProgressPercentage()}
              />
              {this.prevBtn()}
              <h2>Football Registration</h2>
              <p className="h_bottom">{subHeading[currentStep]}</p>

              <form id="my-form" onSubmit={this.handleSubmit}>
                <Step1 {...commonProps} />
                <Step2 {...commonProps} />
                <Step3 {...commonProps} />
              </form>
              {currentStep === 3 ? (
                <CommonButton
                  type="submit"
                  label="Submit"
                  handleClick={this.handleSubmit}
                />
              ) : (
                <CommonButton
                  label="Continue"
                  handleClick={this.nextStep}
                  type="button"
                />
              )}
            </div>
          ) : (
            <div className="form_container">
              <h2>Thanks For Submitting the form</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withWindowResize(MasterForm);
