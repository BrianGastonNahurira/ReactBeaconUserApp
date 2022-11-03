import React from "react";
import { Button, TextField, Link } from "@mui/material";
import BookImg from "../Assets/hostel booking.png";
// import Link from "@mui/material";
import "../Designs/Home.css";
export default () => {
  return (
    <div className="login">
      <div className="login1">
        <img src={BookImg} alt="" style={{ width: "20%", height: "10%" }} />
        <h2 style={{ color: "blue" }}>Create your Account </h2>
        <p>You shall use your email to login</p>
      </div>
      <div>
        <div className="txt-field">
          <TextField
            id="outlined-basic"
            label="Enter email"
            type="email"
            variant="outlined"
          />
        </div>
        <div>
          {" "}
          <TextField
            id="outlined-basic"
            label="Phone number"
            type="number"
            variant="outlined"
          />
        </div>
      </div>
      <div className="login1 logib-btn">
        <Button variant="contained" id="log-btn" href="/cashout">
          CREATE ACCOUNT
        </Button>
      </div>
      <div>
        <Link href="/account" id="account-link">
          <p>Already have an account! Login?</p>
        </Link>
      </div>
      <div className="Helpdesk">
        <p>For any support Reach out to our help desk through our email</p>
        <p>kanlyteug@gmail</p>
      </div>
    </div>
  );
};
