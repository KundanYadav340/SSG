import React from "react";

const FormBottomButtons = ({
  tab,
  setTab,
  clickNextHandler,
  clickPreviousHandler,
  clickSubmitHandler,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {(tab === "bank" || tab === "final") && (
          <button
            onClick={clickPreviousHandler}
            style={{
              padding: "8px 16px",
              color: "#303030",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Previous
          </button>
        )}
      </div>
      <div>
        {(tab === "details" || tab === "bank") && (
          <button
            onClick={clickNextHandler}
            style={{
              padding: "8px 16px",
              backgroundColor: "#1212ff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        )}
        {tab === "final" && (
          <button
            onClick={clickSubmitHandler}
            style={{
              padding: "8px 16px",
              backgroundColor: "#125012",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit Application
          </button>
        )}
      </div>
    </div>
  );
};

export default FormBottomButtons;
