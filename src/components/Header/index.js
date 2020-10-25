import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Badge from "@material-ui/core/Badge";
import "./header.css";

//forminput import
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="brand">
        <h2>TransMonitor</h2>
      </div>
      <form className="Form">
        <div className="search">
          <SearchIcon className="Icon" />
          <InputBase
            className="Input"
            placeholder="Search..."
          />
        </div>
      </form>

      <div className="flexEndItems">
        <span className="Link">Support</span>
        <span className="Link">FAQ</span>
        <Badge badgeContent={8} color={"primary"}>
          <NotificationsNoneIcon className="Link" />
        </Badge>
        <span className="name">
          <ul>
            <li className="first"> Hello</li>
            <li className="second">Oluwaleke Ojo</li>
          </ul>
        </span>
        <span className="profilePicture"></span>
      </div>
    </header>
  );
};

export default Header;
