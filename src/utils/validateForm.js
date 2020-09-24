export const handleValidation = (fields, currentStep) => {
  const errors = {};
  let formIsValid = true;

  if (currentStep === 1) {
    if (!fields["team_name"]) {
      formIsValid = false;
      errors["team_name"] = "Team name can't be empty";
    } else if (!fields["team_name"].match(/^[0-9a-zA-Z]+$/)) {
      formIsValid = false;
      errors["team_name"] = "Only letters and numbers are allowed";
    }

    if (!fields["location"]) {
      formIsValid = false;
      errors["location"] = "Zip code can't be empty";
    } else if (
      !(fields["location"] >= 100000 && fields["location"] <= 999999)
    ) {
      formIsValid = false;
      errors["location"] = "Zip code should be in range of 100000 - 999999";
    }

    if (!fields["players"]) {
      formIsValid = false;
      errors["players"] = "Enter your team size";
    } else if (!(fields["players"] >= 5 && fields["players"] <= 15)) {
      formIsValid = false;
      errors["players"] = "Enter valid team size";
    }

    if (!fields["captain"]) {
      formIsValid = false;
      errors["captain"] = "Captain name can't be empty";
    } else if (!fields["captain"].match(/^[A-Za-z]+$/)) {
      formIsValid = false;
      errors["captain"] = "Can only contain alphabets";
    }
  }

  if (currentStep === 2) {
    if (!fields["date"]) {
      formIsValid = false;
      errors["date"] = "Must select your joining date";
    }

    if (!fields["exp"]) {
      formIsValid = false;
      errors["exp"] = "Select one for the dropdown";
    }
  }

  if (currentStep === 3) {
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Name can't be empty";
    } else if (!fields["name"].match(/^[A-Za-z]+$/)) {
      formIsValid = false;
      errors["name"] = "Should only contain alphabets";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Enter your email";
    } else if (
      !fields["email"].match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      formIsValid = false;
      errors["email"] = "Enter valid email. Eg - yyyyy1@gmail.com";
    }

    if (!fields["phn"]) {
      formIsValid = false;
      errors["phn"] = "Enter your phone number";
    } else if (fields["phn"].length !== 10) {
      formIsValid = false;
      errors["phn"] = "Enter a valid number";
    }
  }

  return [formIsValid, errors];
};
