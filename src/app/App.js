import React from "react";
import Navbar from "../features/navbar/Navbar";
import PostsFeed from "../features/postsfeed/PostsFeed";
import SubscribedList from "../features/subscribed/SubscribedList";

const App = () => {
  return (
    <div>
      <Navbar />
      <SubscribedList />
      <PostsFeed />
    </div>
  );
};

export default App;
