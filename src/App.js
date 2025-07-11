import React, { useState } from "react";
import "./App.css";
import Navbar from "./blocks/Navbar";
import BottomBBar from "./blocks/BottomBBar";
import ApplicationRoutes from "./blocks/layout/ApplicationRoutes";
import InitialLoadingScreen from "./blocks/layout/InitialLoadingScreen";
import { ToastContainer } from "react-toastify";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  return (
    <>
      {showLoader ? (
        <InitialLoadingScreen onComplete={() => setShowLoader(false)} />
      ) : (
        <div>
          <Navbar />
          <div style={{ boxSizing: "border-box" }}>
            <ApplicationRoutes />
          </div>
          <BottomBBar />
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
