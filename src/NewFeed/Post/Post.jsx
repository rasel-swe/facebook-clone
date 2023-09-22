import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Post.css";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import RecommendTwoToneIcon from "@mui/icons-material/RecommendTwoTone";
import db from "../../Firebase"; 
import { deleteDoc, doc } from "firebase/firestore";
import { useStateValue } from "../../Redux/StateProvider";

const Post = ({
  profileSrc,
  name,
  time,
  caption,
  image,
  Icon1,
  Icon2,
  Icon3,
  postId,
}) => {
  const [iconColor, setIconColor] = useState("#777C83");
  const [count, setCount] = useState(0);
  const [{ user }, dispatch] = useStateValue("");

  const Increment = () => {
    setCount(count + 1);
  };

  const handleDeletePost = async () => {
    try {
      await deleteDoc(doc(db, "posts", postId)); // Assuming "posts" is the collection name
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const toggleIconColor = () => {
    // Check the current color and toggle it
    if (iconColor === "#777C83") {
      setIconColor("#0766FF"); // Change to new color when it's the initial color
    } else {
      setIconColor("#777C83"); // Change to the initial color when it's the new color
    }
  };

  return (
    <div className="post">
      <div className="post-head">
        <div className="post-head-left">
          <Avatar src={profileSrc} />
          <div>
            <h5>{name}</h5>
            <div className="div1">
              <div>
                <a href="#">
                  {new Date(time?.toDate()).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </a>
              </div>
              <div> {Icon1 && <Icon1 />}</div>
            </div>
          </div>
        </div>
        <div className="post-head-right">
          {Icon3 && <Icon3 />}
          {Icon2 && <Icon2 onClick={handleDeletePost} />}
        </div>
      </div>
      <div className="post-bottom">
        <p>{caption}</p>
        {image && <img src={image} alt="" />}
        <div className="post-bottom-div">
          <div>
            <FavoriteTwoToneIcon style={{ color: "#FB484E" }} />
            <RecommendTwoToneIcon style={{ color: "#039FFC" }} />
            <a href="#">
              {user.displayName} and {count} others
            </a>
          </div>
          <div>
            <a href="#">{count}comments</a>
            <a href="#">{count}share</a>
          </div>
        </div>
      </div>
      <div className="post-options">
        <div
          onClick={() => {
            toggleIconColor();
            Increment();
          }}
          style={{ color: iconColor }}
          className="post-option"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThumbUpAltIcon />
            <h5>Like</h5>
          </div>
        </div>
        <div className="post-option">
          <ChatBubbleOutlineOutlinedIcon />
          <h5>Comment</h5>
        </div>
        <div className="post-option">
          <ReplyOutlinedIcon />
          <h5>Share</h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
