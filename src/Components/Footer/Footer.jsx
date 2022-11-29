import React from "react";

//importing assets
import BeaconHostels from "../../Assets/beacon hostels.png";
import AppleApp from "../../Assets/mobile-app.png";
// import AppleApp from "../../Assets/play-store-3.jpg";

//importing material icons
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import InstagramIcon from "@material-ui/icons/Instagram";

//other imports from mui
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

//imports from designs
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-1">
          <div className="footer-1-1">
            <div className="footer-logo">
              <img src={BeaconHostels} alt="" />
              <p>We treasure your being here</p>
              {/* <p>About us</p>
              <p>FAQ'S</p>
              <p>Blogs</p>
              <p>Help Center</p>
              <p>Explore</p> */}
            </div>
            <div className="footer-flex">
              <div className="footer-location">
                <h3>Get our apps from.......</h3>
                <div className="mobile-apps">
                  <div>
                    <img
                      style={{ width: "30vh", height: "80%" }}
                      src={AppleApp}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="footer-icons">
                <p>Follow us on Social media</p>
                <div className="media-icons">
                  <div>
                    {/* <FacebookIcon /> */}
                  </div>
                  <div>
                    {/* <TwitterIcon /> */}
                  </div>
                  <div>
                    {/* <YouTubeIcon /> */}
                  </div>
                  <div>
                    {/* <LinkedInIcon /> */}
                  </div>
                  <div>
                    {/* <InstagramIcon /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-1-2">
            <p>Explore our services</p>
            <p>Subscribe to our mailing</p>
            <p>Leave a message here</p>
            <div className="footer-mailing">
              <div className="my-footer-input">
                <TextField
                  className="footer-inputs"
                  id="outlined-basic"
                  label="Leave a message"
                  type="text"
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  className="footer-input"
                  id="outlined-basic"
                  label="Leave your email"
                  type="email"
                  variant="outlined"
                />
              </div>
              <div className="footer-btn">
                <Button
                  variant="contained"
                  size="large"
                  className="footer-button"
                  style={{ width: "140px", height: "50px" }}
                >
                  <h3>SUBMIT</h3>
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="footer-1-3">
            <p>About us</p>
            <p>FAQ'S</p>
            <p>Blogs</p>
            <p>Help Center</p>
            <p>Explore</p>
          </div> */}
        </div>
        <div className="footer-2">
          <div className="footer-2-1">
            <hr style={{ border: "1px solid gray" }} />
            <p>
              2022 @ KANLYTE UGANDA LINITED <br /> All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
