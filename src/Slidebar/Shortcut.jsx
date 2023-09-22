import { Avatar } from "@mui/material";
import React from "react";

const Shortcut = ({ src, title }) => {
  return (
    <div className="contact">
      <div className="content-list">
        <Avatar style={{ height: 30, width: 30, borderRadius: 5 }} src={src} />

        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default Shortcut;
