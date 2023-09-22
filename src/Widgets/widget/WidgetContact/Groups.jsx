import React from "react";
import Group from "./Group";
import './Groups.css'
import AddIcon from "@mui/icons-material/Add";

const Groups = () => {
  return (
    <div className="groups">
      <h5 className="HeadName">Group conversations</h5>
      <Group
        src="https://c8.alamy.com/comp/2E61R0C/close-up-of-a-broken-glass-window-on-a-old-haunted-apocalyptic-lookalike-house-2E61R0C.jpg"
        title="Windows 15 Launch"
      />
      <Group
        src="https://thumbs.dreamstime.com/b/red-apple-isolated-clipping-path-19130134.jpg"
        title="Apple 20 Series"
      />
      <Group
        src="https://w7.pngwing.com/pngs/311/425/png-transparent-humour-funny-face-youtube-joke-laughter-youtube-comics-face-comic-book-thumbnail.png"
        title="Bengali Beshi Bujhe"
      />
      <div className="last-button">
        <AddIcon />
        <h5>Create New Group</h5>
      </div>
    </div>
  );
};

export default Groups;
