import React from "react";

const InputWithLabel = ({ label, type, name, value, changeHandler, error }) => {
  return (
    <div>
      <div>{label}</div>
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
          width: "360px",
          borderRadius: "8px",
          padding: "8px",
          outline: "none",
          border: "1px solid #303030",
          marginTop: "8px",
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
