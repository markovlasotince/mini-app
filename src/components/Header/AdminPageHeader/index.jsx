import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import "./adminPageHeader.scss";

const AdminPageHeader = () => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="header-wrapper">
      <div className="logo">LOGO</div>
      <div className="settings-button-wrapper">
        <h5>Welcome, Marko</h5>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
          <DropdownToggle caret>Options</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Account Settings</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    </div>
  );
};

export default AdminPageHeader;
