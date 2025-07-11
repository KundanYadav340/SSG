import React from "react";

const FormHeading = ({ heading, subHeading }) => {
  return (
    <div>
      <div
        style={{
          fontSize: "24px",
          color: "#1e293b",
          fontWeight: "bold",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {heading}
      </div>
      <div
        style={{
          color: "#475569",
          fontSize: "16px",
          fontFamily: "Inter, sans-serif",
          marginTop: "8px",
        }}
      >
        {subHeading}
      </div>
    </div>
  );
};

export default FormHeading;
