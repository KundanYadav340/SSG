import React from "react";

const InputWithLabel = ({ label, type, name, value, changeHandler, error }) => {
  return (
    <div>
      <div
        style={{
          fontSize: "14px",
          fontFamily: "Inter, sans-serif",
          color: "#475569",
        }}
      >
        {label}
      </div>
      {error.type === name && (
        <div
          style={{
            color: "red",
          }}
        >
          {" "}
          {error.msg}
        </div>
      )}
      <input
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "10px 12px",
          outline: "none",
          border: "1px solid #cbd5e1",
          fontSize: "16px",
          marginTop: "4px",
          boxSizing: "border-box",
        }}
        type={type}
        value={value}
        onChange={(e) => {
          changeHandler(name, e.target.value);
        }}
      />
    </div>
  );
};

export default InputWithLabel;
