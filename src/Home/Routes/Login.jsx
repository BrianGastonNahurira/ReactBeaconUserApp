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
        <h2 style={{ color: "blue" }}>Login to proceed to book a room</h2>
        <p>Use your email to login</p>
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Enter email"
          type="email"
          variant="outlined"
        />
      </div>
      <div className="login1 logib-btn">
        <Button variant="contained" id="log-btn" href="/booking">
          CLICK TO PROCCED
        </Button>
      </div>
      <div>
        <Link href="/account" id="account-link">
          <p>Don't have an account! Create one?</p>
        </Link>
      </div>
      <div className="Helpdesk">
        <p>For any support Reach out to our help desk through our email</p>
        <p>kanlyteug@gmail</p>
      </div>
    </div>
  );
};
