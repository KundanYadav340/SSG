import React, { useState } from "react";
import FormHeading from "./FormHeading";
import InputWithLabel from "./InputWithLabel";
import Dropdown from "./Dropdown";
import { DataChip } from "./UserDeatils";

const inputs = [
  {
    label: "Account Number",
    type: "number",
    name: "accountNumber",
  },
  {
    label: "Ifsc",
    type: "text",
    name: "ifsc",
  },
];
const BankDeatils = ({
  setTab,
  bankDeatils,
  setBankDtails,
  details,
  error,
}) => {
  const changeBankDetailsHandler = (name, value) => {
    setBankDtails({ ...bankDeatils, [name]: value });
  };

  return (
    <div>
      <Dropdown label={"Personal details"}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {Object.keys(details).map((key) => (
            <DataChip key={key} label={key} value={details[key]} />
          ))}
        </div>
      </Dropdown>
      <br />
      <FormHeading
        heading={"Step 2 : Bank Details"}
        subHeading={"Your payment information is safe with us."}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginTop: "24px",
          marginBottom: "16px",
        }}
      >
        {inputs.map((input) => (
          <InputWithLabel
            key={input.name}
            label={input.label}
            type={input.type}
            name={input.name}
            value={bankDeatils[input.name]}
            changeHandler={changeBankDetailsHandler}
            error={error}
          />
        ))}
      </div>
    </div>
  );
};

export default BankDeatils;
