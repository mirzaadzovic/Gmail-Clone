import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo.png"
          alt="Gmail-logo"
        />
      </div>
      <div className="header__middle">
        <SearchIcon className="mui-icon" />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__inputCaret mui-icon" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar style={{ height: "6vh", width: "6vh" }} />
      </div>
    </div>
  );
}

export default Header;
