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
            className="form-btns"
            style={{
              padding: "10px 24px",
              fontFamily: "Inter, sans-serif",
              color: "#303030",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
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
            className="form-btns"
            style={{
              padding: "10px 24px",
              fontFamily: "Inter, sans-serif",
              backgroundColor: "#2563EB",
              color: "white",
              border: "none",
              fontWeight: "bold",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Next
          </button>
        )}
        {tab === "final" && (
          <button
            onClick={clickSubmitHandler}
            className="form-btns"
            style={{
              padding: "10px 24px",
              fontFamily: "Inter, sans-serif",
              backgroundColor: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "bold",
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
