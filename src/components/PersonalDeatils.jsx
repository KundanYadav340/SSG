import React, { useState } from "react";
import FormHeading from "./FormHeading";
import InputWithLabel from "./InputWithLabel";

const inputs = [
  {
    label: "Full Name",
    type: "text",
    name: "userName",
  },
  {
    label: "Email",
    type: "email",
    name: "userEmail",
  },
  {
    label: "Phone Number",
    type: "number",
    name: "userPhone",
  },
];
const PersonalDeatils = ({ details, setDtails, error }) => {
  const changeDeatilsHandler = (name, value) => {
    setDtails({ ...details, [name]: value });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        gap: "24px",
      }}
    >
      <FormHeading
        heading={"Step 1 : Personal Details"}
        subHeading={"Lets start with basic"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <PersonalDeatilsInputs
          details={details}
          setDtails={setDtails}
          error={error}
          changeDeatilsHandler={changeDeatilsHandler}
        />
      </div>
    </div>
  );
};

export default PersonalDeatils;

export const PersonalDeatilsInputs = ({
  details,
  error,
  changeDeatilsHandler,
}) => {
  return (
    <>
      {inputs.map((input) => (
        <InputWithLabel
          key={input.name}
          label={input.label}
          type={input.type}
          name={input.name}
          value={details[input.name]}
          changeHandler={changeDeatilsHandler}
          error={error}
        />
      ))}
    </>
  );
};
