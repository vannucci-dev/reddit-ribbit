import React from "react";
import "./subscribedList.css";

const SubscribedList = () => {
  return (
    <div className="subcontainer">
      <div className="subs-list">
        <div className="sub-box">
          <div className="sub-img"></div>
          <a href="#">/subreddit</a>
        </div>
        <div className="sub-box">
          <div className="sub-img"></div>
          <a href="#">/subreddit</a>
        </div>
        <div className="sub-box">
          <div className="sub-img"></div>
          <a href="#">/subreddit</a>
        </div>
        <div className="sub-box">
          <div className="sub-img"></div>
          <a href="#">/subreddit</a>
        </div>
        <div className="sub-box">
          <div className="sub-img"></div>
          <a href="#">/subreddit</a>
        </div>
      </div>
      <button className="plus-button">+</button>
    </div>
  );
};

export default SubscribedList;
