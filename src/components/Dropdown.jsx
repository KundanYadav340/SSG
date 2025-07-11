import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Dropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      style={{
        border: "1px solid #50505050",
        cursor: "pointer",
        borderRadius: "8px",
        padding: "12px",
        background:
          "linear-gradient(171deg,rgba(255, 255, 255, 1) 60%, rgba(0, 212, 255, 0.2) 100%)",
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
        <FaAngleDown
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all 0.2s ease-in-out",
          }}
        />
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
