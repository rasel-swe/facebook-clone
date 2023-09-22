import React from "react";

import "./Contact.css";
import { Avatar } from "@mui/material";

const Contact = ({ src, title }) => {
  return (
    <div className="contact">
      <div className="content-list">
        <Avatar   style={{ height: 30, width: 30 }} src={src} />
        <h5>{title}</h5>
      
      </div>
    
        <div className="active-dot"></div>
    
    </div>
  );
};

export default Contact;
