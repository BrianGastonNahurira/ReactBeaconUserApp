import React from "react";
import { Button, TextField} from "@mui/material";
import Logo from "../Assets/logo.png";
import "../Designs/login.css";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="login_ctr">
      <div className="login1_ctr">
        <img src={Logo} alt="" />
        <h2 style={{ color: "gray" }}>Login to proceed to book a room</h2>
        <p>Use your email to login</p>
      </div>
      <div className="login-inputs-ctr">
      <form>
      <div className="inputs-ctr-d">
        <TextField
          id="outlined-basiccs"
          label="Enter email"
          type="email"
          name="email"
          variant="outlined"
          color="primary"
          style={{ width: "60%" }}
        />
        </div>
        <div>
          <TextField
          id="outlined-basiccs"
          label="Password"
          type="password"
          name="password"
          variant="outlined"
          color="primary"
          style={{ width: "60%",marginLeft:"10px" }}
        />
      </div>
      <div className="login1 logib-btn">
        <Button
         variant="contained" 
         id="btn" href="/booking"
         style={{ width: "20%", margin: "15px 0px" }}
         >
          CLICK TO PROCCED
        </Button>
      </div>
      </form>
      <div id="account-link">
        <Link to="/account" >
          <span
           style={{
            textDecoration: "underline",
            color: "blue",
            marginLeft: "5px",
          }}>Don't have an account! Create one?</span>
        </Link>
      </div>
      </div>
      <div className="Helpdesk">
        <p>For any support Reach out to our help desk through our email</p>
        <p>kanlyteug@gmail</p>
      </div>
    </div>
  );
};
