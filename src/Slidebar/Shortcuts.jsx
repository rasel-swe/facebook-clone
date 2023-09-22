import React from "react";
import Shortcut from "./Shortcut";
import "./Shortcuts.css";

const Shortcuts = () => {
  return (
    <div className="groups">
      <h5 className="headName">Your shortcuts</h5>
      <Shortcut
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4gGQWNSKWim8WH10Xj5yS2uayjn2TKiovQ&usqp=CAU"
        title="Web Developer Community "
      />
      <Shortcut
        src="https://play-lh.googleusercontent.com/uqq6a-fHayQxsNQkxB9ZZXag8N7Du5mOEKcScr9yltHqx3RKgCdr9VJHKGO2vY_GUe0"
        title="PUBG World Wide Web"
      />
      <Shortcut
        src="https://xboxplay.games/uploadStream/40966.jpg"
        title="ZBOX Hero"
      />
      <a href="https://www.facebook.com/sheikhrasel.swe/" target="blank">
        Privacy. Terms. Advertising . Ad choices . Cookies . More . &copy;
        Sheikh Rasel
      </a>
    </div>
  );
};

export default Shortcuts;
