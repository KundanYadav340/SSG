import React, { useEffect, useState } from "react";

const InitialLoadingScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000);
    const timer2 = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`initial-loader ${fadeOut ? "fade-out" : ""}`}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "96px",
              color: "#0000ff",
              textAlign: "center",
            }}
          >
            SSG
          </div>
          <div
            style={{
              textAlign: "center",
              color: "#0000ff",
            }}
          >
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialLoadingScreen;
