import React from "react";

const FormHeading = ({ heading, subHeading }) => {
  return (
    <div>
      <div
        style={{
          fontSize: "22px",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        {heading}
      </div>
      <div>{subHeading}</div>
    </div>
  );
};

export default FormHeading;
