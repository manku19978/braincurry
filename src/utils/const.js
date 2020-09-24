export const subHeading = {
  1: "List your team information",
  2: "Joining Date and Pro Level",
  3: "Contact Details",
};

export const API_KEY = "6LclG9AZAAAAAPLIQwYHiHWjBj6mFx7CGodfPP-Q";

export const inputListOfStep1 = (
  team_name,
  location,
  players,
  captain,
  errors
) => [
  {
    name: "team_name",
    label: "Team Name",
    type: "text",
    value: team_name,
    error: errors["team_name"],
  },
  {
    name: "location",
    label: "Zip Code",
    type: "number",
    value: location,
    error: errors["location"],
  },
  {
    name: "players",
    label: "Total Number of Players",
    type: "number",
    value: players,
    error: errors["players"],
  },
  {
    name: "captain",
    label: "Captain",
    type: "text",
    value: captain,
    error: errors["captain"],
  },
];

export const inputListOfStep3 = (name, email, phn, errors) => [
  {
    name: "name",
    label: "Name",
    type: "text",
    value: name,
    error: errors["name"],
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    value: email,
    error: errors["email"],
  },
  {
    name: "phn",
    label: "Telephone Number",
    type: "number",
    value: phn,
    error: errors["phn"],
  },
];
