import { Avatar } from "@mui/material";
import React from "react";
import "./Widget.css";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import Contacts from "./WidgetContact/Contacts";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Groups from "./WidgetContact/Groups";
const Widget = () => {
  return (
    <div className="widget">
      <div className="friend-request">
        <div className="request-head">
          <h5>Friend requests</h5>
          <a href="#">See All</a>
        </div>

        <div className="request-bottom">
          <Avatar
            className="avatar-image"
            src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRAP9_TndfODMItGBOueIXGuJwNVtcq1ymGHM-VDDFOG6JH-4HU7XEWC-xkzSCuwCiID-1xb79MDIC0vjI"
          />
          <div className="request-bottom-1">
            <div className="request-bottom-2">
              <h5>Elon Musk</h5>

              <button className="button-1">Confirm</button>
              <button className="button-2">Delete</button>
            </div>
            <div className="time-p">
              <p>5d</p>
            </div>
          </div>
        </div>
      </div>

      <div className="birthday-widget">
        <h5>Birthdays</h5>
        <div className="birthday-content">
          <CardGiftcardIcon style={{ color: "#1875E7" }} />
          <p>
            <span>Mark Zuckerberg</span>'s birthday today.
          </p>
        </div>
      </div>
      <Contacts />

      <div className="community-chat">
        <h5 className="community-head">Your community chats</h5>
        <div className="community-chat-content">
          <div>
            <TextsmsIcon style={{padding: "5px", backgroundColor: "#B8BAC6" , borderRadius: "15px",color:"white", border: "1px solid #BDBDBD"}} />
          </div>
          <div>
            <h5>CCC</h5>
            <p style={{ color: "#606266", fontSize: "11px" }}>
            Chaos Computer Club
            </p>
          </div>
        </div>
      </div>

    <Groups />
    </div>
  );
};

export default Widget;
