import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsIcon from "@mui/icons-material/Groups";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "@mui/material";
import { useStateValue } from "./Redux/StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const [activeOption, setActiveOption] = useState("home"); // Initialize with the "home" option as active

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
          alt="facebook-clone logo"
        />
        <div className="header-input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>

      <div className="header-center">
        <div
          className={`header-option ${
            activeOption === "home" ? "header-option--active" : ""
          }`}
          onClick={() => handleOptionClick("home")}
        >
          <HomeOutlinedIcon />
        </div>
        <div
          className={`header-option ${
            activeOption === "video" ? "header-option--active" : ""
          }`}
          onClick={() => handleOptionClick("video")}
        >
          <OndemandVideoIcon />
        </div>
        <div
          className={`header-option ${
            activeOption === "store" ? "header-option--active" : ""
          }`}
          onClick={() => handleOptionClick("store")}
        >
          <StorefrontIcon />
        </div>
        <div
          className={`header-option ${
            activeOption === "groups" ? "header-option--active" : ""
          }`}
          onClick={() => handleOptionClick("groups")}
        >
          <GroupsIcon />
        </div>
        <div
          className={`header-option ${
            activeOption === "sports" ? "header-option--active" : ""
          }`}
          onClick={() => handleOptionClick("sports")}
        >
          <SportsEsportsOutlinedIcon />
        </div>
      </div>

      <div className="header-right">
        <div className="header-content">
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
        <div className="header-content">
          <FontAwesomeIcon icon={faFacebookMessenger} className="icon" />
        </div>
        <div className="header-content">
          <FontAwesomeIcon icon={faBell} className="icon" />
        </div>
        <div className="header-content">
          <Avatar src={user.photoURL} className="icon-profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
