import logo from "./logo.svg";
import "./App.css";
import Navbar from "./blocks/Navbar";
import BottomBBar from "./blocks/BottomBBar";
import PersonalDeatils from "./components/PersonalDeatils";
import { useState } from "react";
import BankDeatils from "./components/BankDeatils";
import UserDeatils from "./components/UserDeatils";
import FormBottomButtons from "./components/FormBottomButtons";

function App() {
  const [activeTab, setActiveTab] = useState("details");
  const [bankDeatils, setBankDtails] = useState({
    accountNumber: "",
    ifsc: "",
  });
  const [details, setDtails] = useState({
    UserName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState({
    type: "",
    msg: "",
  });
  const clickNextHandler = () => {
    if (activeTab === "details") {
      if (allOkInDeatils(details)) {
        setActiveTab("bank");
      }
    }
    if (activeTab === "bank") {
      if (allOkInBankDeatils(bankDeatils)) {
        setActiveTab("final");
      }
    }
  };
  const allOkInDeatils = (details) => {
    if (details.UserName.length < 6) {
      setError({
        type: "UserName",
        msg: "Please enter a valid name",
      });
      return false;
    }
    if (details.email.length < 6) {
      setError({
        type: "email",
        msg: "Please enter a valid email",
      });
      return false;
    }
    if (details.phone.length < 10) {
      setError({
        type: "phone",
        msg: "Please enter a valid phone number",
      });
      return false;
    }
    setError({
      type: "",
      msg: "",
    });
    return true;
  };
  const allOkInBankDeatils = (bankDeatils) => {
    if (
      bankDeatils.accountNumber.length < 10 ||
      bankDeatils.accountNumber.length > 16
    ) {
      setError({
        type: "accountNumber",
        msg: "Please enter a valid account number",
      });
      return false;
    }
    if (bankDeatils.ifsc.length < 10 || bankDeatils.ifsc.length > 13) {
      setError({
        type: "ifsc",
        msg: "Please enter a valid IFSC code",
      });
      return false;
    }
    setError({
      type: "",
      msg: "",
    });
    return true;
  };
  const clickPreviousHandler = () => {
    if (activeTab === "bank") {
      setActiveTab("details");
    } else if (activeTab === "final") {
      setActiveTab("bank");
    }
  };
  const clickSubmitHandler = () => {
    if (!allOkInDeatils(details) || !allOkInBankDeatils(bankDeatils)) {
      alert("Please fill all the details correctly before submitting.");
      return;
    }
    alert("Form submitted successfully!");
    console.log("Form submitted successfully!");
  };
  return (
    <div className="">
      <Navbar />
      <div
        style={{
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: "calc(100vh - 96px - 96px)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "48px",
            backgroundColor: "#efefef",
          }}
        >
          <div
            style={{
              border: "1px solid #606060",
              padding: "32px",
              borderRadius: "16px",
              height: "fit-content",
              width: "480px",
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
      </div>
      <BottomBBar />
    </div>
  );
}

export default App;
