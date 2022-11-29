import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//components imports
// import Banner from "../../Banner/Banner";
import Header from "../../Header/Header";

//MUI imports
import { TextField,
  Alert as MuiAlert,
  Button, Link, Backdrop, CircularProgress, Snackbar, Slide, Box, } from "@mui/material";


//Designs imports
import "../BookingForm/Booking.css";

//importing assets
import HostelIMG from "../../../Assets/hostel1.jpg";
import BookImg from "../../../Assets/hostel booking.png";
import Airtel from "../../../Assets/airtel.jpg";
import Mtn from "../../../Assets/mtn.png";
import Visa from "../../../Assets/visa.jpg";
import Merchant from "../../../Assets/mcd.jpg";
import FormsApi from "../../../api/api";

export default () => {
 const navigate = useNavigate();
 const [state, setState] = useState({
  open_loader: false,
  submit: false,
  mui: { snackBarPosition: { vertical: "top", horizontal: "right" } },

 });
 const submit_booking_form = async (e) => {
  e.preventDefault();
  setState({...state,
   submit: true,
   open_loader: true,
   });
   let fd = new FormData(e.target);
   let contentObj = {};
   fd.forEach((v, i) => {
   contentObj[i] = v;
   });
   let formsApi = new FormsApi();
   let res = await formsApi.post("/book", contentObj);
   if (res === "Error") {
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "Some Network error",
        snackBarStatus: "warning",
        snackBarOpen: true,
      }, 
      submit: false,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else if(res.status === false) {
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: res.data,
        snackBarStatus: "warning",
        snackBarOpen: true,
      },
      submit: false,
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);

  }
  else{
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "room booked sucessfully",
        snackBarStatus: "success",
        snackBarOpen: true,
      },
      submit: true,
    });
    setTimeout(() => {
      navigate("/hostels");
    }, 2000);
  }
  }


const handleClose = () => {
  setState({...state,
    open_loader: false,
  });
  
};
const handleToggle = () => {
  setState({...state,
    open_loader: true,
  })
};
  //mui
  //close snackBar
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };

 //alert for material ui
 const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
  return (
    <>
       <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={4500}
        onClose={handleCloseSnackbar}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%"}}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>
        <Header />

        <div className="bookingdetails">
          <div className="bookingdetails1">
            <div>
              <h2 style={{ color: "blue" }}>You are almost there.........</h2>
            </div>
            <div>
              <img
               src={HostelIMG}
               alt="" 
               style={{width:"95%",height:"90%"}}/>
            </div>
            <div className="message">
              <p>
                <span style={{ color: "blue" }}>Dear Gaston,</span> <br />
                Feel free to complete your booking proces, You shall be mailed
                and called back to confirm to you that your room has been
                isorated for you. On your arrival, you shall find a custodian at
                our offices at the trading center of the university and shall
                direct you to your hostel.
                <br />
                <span style={{ color: "blue" }}>
                  Thanks for booking with us.
                </span>
                <br />
                <span style={{ color: "gray" }}>For more information;</span>
                <br />
                Call / Whatsapp :
                <span style={{ color: "gray" }}>
                  0787299525 / 0778089708
                </span>
                <br />
                Email:
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
            <div className="booking-inputs-ctr">
              <form onSubmit={submit_booking_form}>
                <div style={{}}></div>
                <div>
                  <TextField
                    required
                    label="Full Name"
                    name="name"
                    variant="outlined"
                    id="outlined-basic"
                    fullWidth="true"
                    helperText={`Like: "Aggi peter"`}
                    color = "primary"
                    style={{ width: "100%", margin: "10px 0px" }}
                  />
                  back
                </div>
                <div className="bking-inputs-ctr-d">
                  <TextField
                    label="Telephone Number"
                    variant="outlined"
                    required
                    name="telephone_number"
                    id="outlined-basic"
                    helperText={`Eg: "0778089708"`}
                    color="primary"
                    style={{ width: "48%" }}
                  />
                   <TextField
                    label="Name of hostel booked"
                    variant="outlined"
                    id="outlined-basic"
                    required
                    name="name_of_hostel"
                    color="primary"
                    style={{ width: "48%", margin: "20px 0px" }}
                  />
                </div>
                <div className="bking-inputs-ctr-hw">
                  <TextField
                    label="Room Number Booked"
                    name="room_number"
                    id="outlined-basic"
                    required
                    variant="outlined"
                    color="primary"
                    helperText={`Note: "No characters"`}
                    style={{ width: "100%", margin: "10px 0px" }}
                  />
                </div>
                <div className="bking-inputs-ctr-d">
                  <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    id="outlined-basic"
                    required
                    color="primary"
                    helperText={`gmail account`}
                    style={{ width: "48%", margin: "20px 0px" }}
                  />
                    <TextField
                    label="Level: (council / degree / depromer / masters"
                    variant="outlined"
                    id="outlined-basic"
                    required
                    name="level_of_study"
                    color="primary"
                    style={{ width: "48%" }}
                  />
                </div>
                <div className="bking-inputs-ctr-d">
                  <TextField
                    id="outlined-basic"
                    required
                    label="Type of entry (private / government)"
                    name="type_of_entry"
                    variant="outlined"
                    color="primary"
                    style={{ width: "48%" }}
                  />
                    <TextField
                    id="outlined-basic"
                    label="Location / district"
                    name="location"
                    required
                    variant="outlined"
                    color="primary"
                    style={{ width: "48%" }}
                  />
                </div>

                <div className="tf">
                  <Button
                    id="booking-btn"
                    variant="contained"
                    className="btn-btn"
                    size="medium"
                    type="submit"
                    // onClick={handleToggle}
                  >
                    PROCCED TO PAYMENT
                  </Button>
                </div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={state.open_loader}
                    onClick={handleClose} 
                    >
                  <CircularProgress color="inherit" />
                </Backdrop>
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
    </>
  );
};
