import React, { useState } from "react";

const Dropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        border: "1px solid #505050",
        cursor: "pointer",
        borderRadius: "16px",
        padding: "12px",
      }}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{label}</div>
        <div>↓</div>
      </div>
      <div
        style={{
          marginTop: "16px",
          display: isOpen ? "block" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
