import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./adminPageHeader.scss";

// actions
import { logoutUserAction } from "../../../store/actions/auth";
import { Link } from "react-router-dom";

const AdminPageHeader = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const dispatch = useDispatch();

  // this is mocked
  // in real life i could get username from JWT
  const username = localStorage.getItem("token");

  const toggle = () => setOpen(!dropdownOpen);

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <div className="header-wrapper">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="settings-button-wrapper">
        <h5>Welcome, {username}</h5>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
          <DropdownToggle caret>Options</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Account Settings</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>
  );
};

export default AdminPageHeader;
