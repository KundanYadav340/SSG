import React, { useState } from "react";
import PersonalDeatils from "../../components/PersonalDeatils";
import BankDeatils from "../../components/BankDeatils";
import UserDeatils from "../../components/UserDeatils";
import FormBottomButtons from "../../components/FormBottomButtons";
import Celebration from "../../components/Celebration";
import {
  allOkInBankDeatils,
  allOkInPersonalDeatils,
} from "../../utils/FormDetailsValidation";
import { useDispatch } from "react-redux";
import { addNewUser } from "../../redux/slices/userSlice";

const DeatilsForm = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("details");
  const [bankDeatils, setBankDtails] = useState({
    bankAccountNumber: "",
    bankIfsc: "",
  });
  const [details, setDtails] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });
  const [error, setError] = useState({
    type: "",
    msg: "",
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const clickNextHandler = () => {
    if (activeTab === "details") {
      if (allOkInPersonalDeatils(details, setError)) {
        setActiveTab("bank");
      }
    }
    if (activeTab === "bank") {
      if (allOkInBankDeatils(bankDeatils, setError)) {
        setActiveTab("final");
      }
    }
  };

  const clickPreviousHandler = () => {
    if (activeTab === "bank") {
      setActiveTab("details");
    } else if (activeTab === "final") {
      setActiveTab("bank");
    }
  };
  const clickSubmitHandler = () => {
    if (
      !allOkInPersonalDeatils(details, setError) ||
      !allOkInBankDeatils(bankDeatils, setError)
    ) {
      alert("Please fill all the details correctly before submitting.");
      return;
    }
    // add the new user in global state
    dispatch(
      addNewUser({
        userId: crypto.randomUUID(),
        userName: details.userName,
        userEmail: details.userEmail,
        userPhone: details.userPhone,
        bankAccountNumber: bankDeatils.bankAccountNumber,
        bankIfsc: bankDeatils.bankIfsc,
        modifiedOn: new Date().toISOString(),
      })
    );

    setShowCelebration(true);

    setTimeout(() => {
      setShowCelebration(false);
      setActiveTab("details");

      // reset all data
      setBankDtails({
        bankAccountNumber: "",
        bankIfsc: "",
      });

      setDtails({
        userName: "",
        userEmail: "",
        userPhone: "",
      });

      setError({
        type: "",
        msg: "",
      });

      console.log("Form submitted and reset.");
    }, 4000);
  };

  return (
    <>
      <div
        className="form-container"
        style={{
          minHeight: "calc(100vh - 58px - 50px)",
          display: "flex",
          justifyContent: "center",
          paddingTop: "48px",
          paddingBottom: "24px",
          backgroundColor: "#efefef",
        }}
      >
        <div
          style={{
            border: "1px solid #e2e8f0",
            padding: "32px",
            borderRadius: "12px",
            height: "fit-content",
            width: "640px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div
            style={{
              display: activeTab === "details" ? "block" : "none",
            }}
          >
            <PersonalDeatils
              setTab={setActiveTab}
              setDtails={setDtails}
              details={details}
              error={error}
            />
          </div>
          <div
            style={{
              display: activeTab === "bank" ? "block" : "none",
            }}
          >
            <BankDeatils
              setTab={setActiveTab}
              bankDeatils={bankDeatils}
              setBankDtails={setBankDtails}
              details={details}
              error={error}
            />
          </div>
          <div
            style={{
              display: activeTab === "final" ? "block" : "none",
            }}
          >
            <UserDeatils bankDeatils={bankDeatils} details={details} />
          </div>
          <FormBottomButtons
            tab={activeTab}
            setTab={setActiveTab}
            clickNextHandler={clickNextHandler}
            clickPreviousHandler={clickPreviousHandler}
            clickSubmitHandler={clickSubmitHandler}
          />
        </div>
      </div>
      <Celebration
        isOpen={showCelebration}
        onClose={() => setShowCelebration(false)}
      />
    </>
  );
};

export default DeatilsForm;
