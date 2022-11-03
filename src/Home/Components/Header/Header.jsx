import React from "react";
import "../Header/Header.css";
import "../../Designs/Home.css";

import HostelBooking from "../../Assets/hostel booking.png";
import Searchbar from "./SearchBar/Searchbar";
import MyAccount from "./Account/Account";

import { Button } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default () => {
  return (
    <>
      <div className="header card">
        <div className="header-img-hb">
          <img
            src={HostelBooking}
            // style={{ height: "80%", width: "80%" }}
            alt=""
          />
        </div>
        <div className="header-searchbar">
          <Searchbar id="src-bar" placeholder={"Search hostel....... "} />
        </div>
        <div className="the-header-account">
          <div className="header-account">
            <Button variant="text" id="account-btn" color="primary">
              Account
            </Button>
          </div>
          <div className="dropdown">
            <ArrowDropDownIcon
              className="arrow"
              fontSize="large"
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};
