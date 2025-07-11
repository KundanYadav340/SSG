import React from "react";
import { IoClose } from "react-icons/io5";

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <div
      style={{
        display: isOpen ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <div className="modal-content">
        <button
          onClick={onClose}
          style={{
            float: "right",
            width: "32px",
            height: "32px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #909090",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "#505050",
          }}
        >
          <IoClose style={{ width: "16px", height: "16px" }} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
