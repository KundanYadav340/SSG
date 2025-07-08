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
          <button onClick={clickPreviousHandler}>Previous</button>
        )}
      </div>
      <div>
        {(tab === "details" || tab === "bank") && (
          <button onClick={clickNextHandler}>Next</button>
        )}
        {tab === "final" && (
          <button onClick={clickSubmitHandler}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default FormBottomButtons;
