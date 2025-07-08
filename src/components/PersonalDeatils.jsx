import React, { useState } from "react";
import FormHeading from "./FormHeading";
import InputWithLabel from "./InputWithLabel";

const inputs = [
  {
    label: "Full Name",
    type: "text",
    name: "UserName",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Phone Number",
    type: "number",
    name: "phone",
  },
];
const PersonalDeatils = ({ setTab, details, setDtails, error }) => {
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
        heading={"Step1 : Personal details"}
        subHeading={"Lets start with basic"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
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
      </div>
    </div>
  );
};

export default PersonalDeatils;
