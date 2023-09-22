import React from "react";
import "./SlidebarRaw.css";
import { Avatar } from "@mui/material";
const SlidebarRaw = ({ src, Icon, title }) => {
  return (
    <div className="SlidebarRaw">
      {src && <Avatar style={{ height: "30px", width: "30px" }} src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
      <div></div>
    </div>
  );
};

export default SlidebarRaw;
