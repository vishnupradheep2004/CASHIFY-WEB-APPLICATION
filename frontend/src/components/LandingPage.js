import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="overlay">
        <div className="content">
          <h1>Welcome to <span>Cashify</span></h1>
          <p>
            Sell your old phones, laptops, and gadgets instantly for the best price!
          </p>
          <button onClick={() => navigate("/login")}>Login to Continue</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
