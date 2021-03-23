import React from "react";
import "./votesCounter.css";

const VotesCounter = () => {
  return (
    <div className="vote-counter">
      <i className="vote-count fas fa-chevron-circle-up fa-lg"></i>
      <p>134</p>
      <i className="vote-count fas fa-chevron-circle-down fa-lg"></i>
    </div>
  );
};

export default VotesCounter;
