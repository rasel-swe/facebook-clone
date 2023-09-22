import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";

const Story = ({ src, image, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story-avatar" src={src} />
      <p>{title}</p>
    </div>
  );
};

export default Story;
