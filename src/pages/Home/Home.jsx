import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-cont">
      <div className="home">
        <div className="home-content">
          <h1>Home Content</h1>
          <p>Do Something Cool</p>
          <button onClick={() => navigate("/events")} className="common-btn">
            Register Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
