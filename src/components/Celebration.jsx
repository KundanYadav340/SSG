import React from "react";
import CustomModal from "./Modal";
import Lottie from "lottie-react";
import Success from "./lottie/success-animation.json";

const Celebration = ({ isOpen, onClose }) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div
        style={{
          width: "480px",
          height: "420px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "180px",
          }}
        >
          <Lottie
            animationData={Success}
            loop={true}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Congratulations!!
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#505050",
            marginTop: "20px",
          }}
        >
          Your details have been submitted successfully!
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#505050",
            marginTop: "16px",
          }}
        >
          Redirecting to home page...
        </div>
      </div>
    </CustomModal>
  );
};

export default Celebration;
