import React from "react";

//components imports
import Banner from "../../Banner/Banner";
import Header from "../../Header/Header";

//MUI imports
import { TextField, Button, Link } from "@mui/material";

//Designs imports
import "../BookingForm/Booking.css";

//importing assets
import HostelIMG from "../../../Assets/hostel1.jpg";
import BookImg from "../../../Assets/hostel booking.png";
import Airtel from "../../../Assets/airtel.jpg";
import Mtn from "../../../Assets/mtn.png";
import Visa from "../../../Assets/visa.jpg";
import Merchant from "../../../Assets/mcd.jpg";

export default () => {
  return (
    <>
      <div className="booking">
        <Banner />
        <Header />

        <div className="bookingdetails">
          <div className="bookingdetails1">
            <div>
              {" "}
              <h2 style={{ color: "blue" }}>You are almost there.........</h2>
            </div>
            <div>
              {" "}
              <img src={HostelIMG} alt="" />
            </div>
            <div className="message">
              {" "}
              <p>
                <span style={{ color: "blue" }}>Dear Gaston,</span> <br />
                Feel free to complete your booking proces, You shall be mailed
                and called back to confirm to you that your room has been
                isorated for you. On your arrival, you shall find a custodian at
                our offices at the trading center of the university and shall
                direct you to your hostel.
                <br />{" "}
                <span style={{ color: "blue" }}>
                  Thanks for booking with us.
                </span>
                <br />
                <span style={{ color: "gray" }}>For more information;</span>
                <br />
                Call / Whatsapp :{" "}
                <span style={{ color: "gray" }}>
                  0787299525 / 0778089708
                </span>{" "}
                <br />
                Email:{" "}
                <span style={{ color: "gray" }}>kanlyteug@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="bookingdetails2">
            <div>
              <h3
                style={{
                  color: "gray",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                PLEASE FILL THIS FORM TO COMPLETE YOUR BOOKING PROCESS
              </h3>
            </div>
            <div className="booking-form card">
              <form>
                <div className="tf">
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                <div className="tf">
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Telephone Number"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                <div className="tf">
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Name of hostel booked"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                <div className="tf">
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Room Number Booked"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                <div className="tf">
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                <div className="tf">
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Level: (council / degree / depromer / masters"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                <div className="tf">
                  {" "}
                  <TextField
                    id="outlined-basic"
                    label="Type of entry (private / government)"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                <div className="tf">
                  <TextField
                    id="outlined-basic"
                    label="Location / district"
                    variant="outlined"
                    fullWidth="true"
                  />
                </div>
                {/* <br /> */}
                <div className="tf">
                  {" "}
                  <Button
                    id="booking-btn"
                    variant="contained"
                    className="btn-btn"
                    size="medium"
                  >
                    PROCCED TO PAYMENT
                  </Button>
                </div>
              </form>
            </div>
            <div className="booking">
              <div className="bookin1g">
                <h2 style={{ color: "blue" }}>Select Any Payment method </h2>
                <p>Select Merchant code for now!</p>
              </div>
              <div className="payment-mtds">
                <Link href="/merchant">
                  <img src={Merchant} alt="" />
                </Link>
                <Link href="/sna">
                  <img src={Mtn} alt="" />
                </Link>
                <Link href="/sna">
                  <img src={Visa} alt="" />
                </Link>
                <Link href="/sna">
                  <img src={Airtel} alt="" />
                </Link>
              </div>
              <div>
                <h3>PROCEDURE FOR USING MERCHANT CODE</h3>
                <p>
                  1: Dial <span style={{ color: "blue" }}>*135#</span> on your
                  mtn line
                </p>
                <p>
                  2: Select option<span style={{ color: "blue" }}>*5</span> for
                  booking payements
                </p>
                <p>3: Select the booking fee</p>
                <p>4: complete transaction by entering your pin number.</p>
              </div>
              <div>
                <Button
                  id="booking-btn"
                  variant="contained"
                  className="btn-btn"
                  size="medium"
                >
                  CLICK HERE TO CONFIRM PAYMENT
                </Button>
              </div>
              <div className="Helpdesk">
                <p>
                  For any support Reach out to our help desk through our email
                </p>
                <p>kanlyteug@gmail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
