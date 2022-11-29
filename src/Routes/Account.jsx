import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Backdrop, Button, CircularProgress, TextField} from "@mui/material";
import { Base64 } from "js-base64";
import Logo from "../Assets/logo.png";
import "../Designs/Home.css";
import FormsApi from "../api/api";
import Header from "../Components/Header/Header";
import user from "../app.config";
export default () => {
  const nav = useNavigate();

  const [state, setState] = useState({
    submit: false,
    apiFeedBackError: false,
    apiEmailUsed: false,
    open_loader: false,
    mui: { snackBarPosition: { vertical: "top", horizontal: "right" } },
    }); 

  const form_submit = async (e) => {
    e.preventDefault();
    setState({...state,
    submit: true,
    open_loader: true,
    });
    const fd = new FormData(e.target);
    let _fc = {};
    fd.forEach((value, key) => {
    _fc[key] = value;
  });
  let api = new FormsApi();
  let res = await api.post("/newuser", _fc);
  if (res === "Error") {
    setState({...state,
    submit: false,
    apiFeedBackError: true,
    })
    return;
  }
  if (res.status === false) {
    if (res.data === "Emailtaken") {
      setState({...state,
      apiEmailUsed: true,
      submit:false,
      });
      return;
    } else {
      setState({...state,
        apiFeedBackError: true,
        submit:false,
        });
      return;
    }
  } else {
    const data = Base64.encode(JSON.stringify({ ...res.result }));
    localStorage.setItem("token", data);
    setState({...state,
      submit:false,
      })
    nav("/login");
  }
  }

  // useEffect(() => {
  //   if (user) {
  //     nav(-1);
  //   }
  // }, []);

  // if (user) return <Header />;

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


  return (
    <main>
        <div className="register-logo-ctr">
           <img
              src={Logo}
              alt="Beacon hostels"
              // style={{ height: "60%", width: "50%" }}
            />
          </div>
          <div className="_logo_txt"> 
             <p>Create Beacon Hostels Account</p>
               <small>
                  Thanks for choosing Us<br />
                  <i style={{ fontSize: "13.5px", color: "#3F51B5" }}>
                  Aggi - Beacon Technician</i>
              </small>
           </div>  
          <div className="register-ctr">
            <div className="form_ctr">
              <form onSubmit={form_submit}>
                <div>
                  <TextField
                    label="Your Full Name"
                    name="user_name"
                    variant="outlined"
                    required
                    id="outlined-basiccs"
                    color="primary"
                    style={{ width: "100%", margin: "10px 0px" }}
                  />
                </div>
                <div className="register-inputs-ctr-divided">
                  <TextField
                    label="Phone Number"
                    name="phone_number"
                    id="outlined-basiccs"
                    variant="outlined"
                    required
                    color="primary"
                    style={{ width: "48%" }}
                  
                  />
                  <TextField
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    id="outlined-basiccs"
                    color="primary"
                    required
                    style={{ width: "48%" }}
                    helperText={
                      state.apiEmailUsed ? "Email already in use" : ""
                    }
                  />
                </div>
                <div>
                  <TextField
                    label="Your Password"
                    name="password"
                    variant="outlined"
                    id="outlined-basiccs"
                    color="primary"
                    required
                    style={{ width: "100%", margin: "10px 0px" }}
                  />
                </div>
           
                <div className="_btn">
                  <Button
                    variant="contained"
                    type="submit"
                    id="btn"
                    color={state.apiFeedBackError ? "secondary" : "primary"}
                    style={{ width: "50%", margin: "15px 0px" }}
                  >
                     {state.submit
                      ? "Please Wait..."
                      : state.apiFeedBackError
                      ? "Something Went Wrong, Try again"
                      : "Submit"}
                  </Button>
                </div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={state.open_loader}
                    onClick={handleClose} 
                    >
                  <CircularProgress color="inherit"
                      thickness={5}
                      size={70}

                    />
                </Backdrop>
                <div style={{ width: "100%", marginBlock: "10px", textAlign: "center", }}>
                  Already having an account?
                  <Link to="/login">
                    <span
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                        marginLeft: "5px",
                      }}
                    >
                      Sign in here
                    </span>
                  </Link>
                </div>
              </form>
            </div>
            </div>
      </main>
  );
};
