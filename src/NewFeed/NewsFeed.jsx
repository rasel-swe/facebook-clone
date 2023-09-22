import React from "react";
import StoreyReel from "./StoreyReel";
import "./NewsFeed.css";
import Posthead from "./PostHead/Posthead";
import Feed from "./Post/Feed";

const NewsFeed = () => {
  return (
    <div className="newsfeed">
      <StoreyReel />
      <Posthead />
      <Feed />
    </div>
  );
};

export default NewsFeed;
