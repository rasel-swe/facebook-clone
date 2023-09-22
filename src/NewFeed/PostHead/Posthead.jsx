import React, { useState } from "react";
import "./Posthead.css";
import { Avatar } from "@mui/material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useStateValue } from "../../Redux/StateProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../Firebase";

const Posthead = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        name: user.displayName,
        caption: input,
        time: serverTimestamp(),
        profileSrc: user.photoURL,
        image: imgUrl, 
      };

      const docRef = await addDoc(collection(db, "posts"), postData);

      console.log("Document written with ID: ", docRef.id);
      setImgUrl("");
      setInput("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="posthead-container">
      <div className="posthead-top">
        <Avatar src={user.photoURL} />
        <form className="posthead-form">
          <input
            className="input-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder={"What's on your mind, " + user.displayName + "? "}
          />
          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            placeholder="Image Url (Optional) "
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden Button
          </button>
        </form>
      </div>
      <div className="posthead-bottom">
        <div className="div-1">
          <LiveTvIcon />
          <p>Live Video</p>
        </div>
        <div className="div-2">
          <PhotoLibraryIcon />
          <p>Photo/Video</p>
        </div>
        <div className="div-3">
          <EmojiEmotionsIcon />
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default Posthead;
