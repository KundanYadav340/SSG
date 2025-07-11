import React from "react";
import Dropdown from "./Dropdown";
import FormHeading from "./FormHeading";

const UserDeatils = ({ bankDeatils, details }) => {
  return (
    <div
      style={{
        marginBottom: "16px",
      }}
    >
      <FormHeading
        heading={"Confirm Details"}
        subHeading={"Please confirm your details before submitting."}
      />
      <div>
        <div
          style={{
            width: "100%",
            marginTop: "32px",
          }}
        >
          <PersonalDetailsAccordian details={details} />
        </div>
        <div
          style={{
            width: "100%",
            marginTop: "16px",
            marginBottom: "32px",
          }}
        >
          <BankDetailsAccordian bankDeatils={bankDeatils} />
        </div>
      </div>
    </div>
  );
};

export default UserDeatils;

export const DataChip = ({ label, value }) => {
  return (
    <div
      style={{
        width: "45%",
      }}
    >
      <span style={{ fontWeight: "bold" }}>{label}:</span>
      <br />
      <span>{value}</span>
    </div>
  );
};

export const PersonalDetailsAccordian = ({ details }) => {
  return (
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
  );
};

export const BankDetailsAccordian = ({ bankDeatils }) => {
  return (
    <Dropdown label={"Bank details"}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {Object.keys(bankDeatils).map((key) => (
          <DataChip key={key} label={key} value={bankDeatils[key]} />
        ))}
      </div>
    </Dropdown>
  );
};
