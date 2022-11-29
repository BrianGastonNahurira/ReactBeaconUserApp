import React from "react";
import { useParams } from "react-router-dom";

//imports from drawables
import HostelImg from "../Assets/hostel1.jpg";
import Room1 from "../Assets/room1.jpg";
import Room2 from "../Assets/room2.jpg";
import Room3 from "../Assets/room3.jpg";
import Room4 from "../Assets/room4.jpg";

//component imports
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

// imports from designs
import "../Designs/Home.css";

//imports from mui
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";

//swiper requirements
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// import required modules
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

//import json file
import { Data } from "../Components/JSONFILE/db";
import Home from "./Home";

export default () => {
  const params = useParams();
  //   console.log(JSON.stringify(params));
  console.log(params.id);
  const myhostel = Data.filter((hostel) => {
    return hostel.id == params.id;
  });
  console.log(myhostel);

  return (
    <>
      <div className="hostel-page">
        <Header />
        <div className="hostel-page-div1-2">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 3,
              },

              576: {
                slidesPerView: 7,
              },
              //   600: {
              //     slidesPerView: 6,
              //   },

              //   900: {
              //     slidesPerView: 7,
              //   },
              //   1200: {
              //     slidesPerView: 7,
              //   },
            }}
            autoplay={{ delay: 2000 }}
            // slidesPerView={7}
            spaceBetween={0}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={Room1}
                style={{ width: "40vh", height: "20vh" }}
                alt=""
              />
              <p>Room 2</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Room2}
                alt=""
                style={{ width: "40vh", height: "20vh" }}
              />
              <p>Room 1</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Room3}
                alt=""
                style={{ width: "40vh", height: "20vh" }}
              />
              <p>Room 3</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Room4}
                alt=""
                style={{ width: "40vh", height: "20vh" }}
              />
              <p>Room 4</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Room2}
                alt=""
                style={{ width: "40vh", height: "20vh" }}
              />
              <p>Room 5</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Room3}
                alt=""
                style={{ width: "40vh", height: "20vh" }}
              />
              <p>Room 6</p>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Room2}
                alt=""
                style={{ width: "40vh", height: "20vh" }}
              />
              <p>Room 7</p>
            </SwiperSlide>
          </Swiper>
        </div>
        {myhostel.map((home) => (
          <div className="hostel-page-content">
            <div className="hostel-page-div1">
              <div className="hostel-page-div1-1">
                <div>
                  <div>
                    <h2 style={{ color: "Blue" }}>
                      Welcome to :{home.Name} Hostel
                    </h2>
                  </div>

                  {/* {myhostel.map((host) => { */}
                  {/* <h2>WELCOME TO HOSTEL{myhostel}</h2>;// })} */}
                </div>
                <div>
                  <img
                    src={HostelImg}
                    style={{ width: "70vh", height: "50vh" }}
                    alt=""
                  />
                  <p style={{ color: "Blue" }}>
                    The Beacon home of accademicians
                  </p>
                </div>
              </div>
            </div>
            <div className="hostel-page-div2">
              <p>
                <span style={{ color: "Blue" }}>Hello dear Beaconian!</span>{" "}
                Welcome to this hostel. This is a registred hostel around Lira
                University that has been authorized to house Lira university
                students and LDC students at Lira main You are free to book a
                room here.
              </p>

              <div style={{ padding: "10px" }}>
                <h2>Hostel Details:</h2>
                <h3 style={{ color: "gray" }}>
                  HOSTEL NAME:
                  <span style={{ color: "blue" }}>{home.Name}</span>
                </h3>
                <h4 style={{ padding: "20px" }}>Hostel Description</h4>
                <p>{home.Description}</p>
              </div>
              <p>
                <span style={{ color: "blue" }}>Single Rooms Available:</span>{" "}
                10 rooms
              </p>
              <p>
                <span style={{ color: "blue" }}>Double Rooms Available:</span> 2
                rooms
              </p>
              <p>
                <span style={{ color: "blue" }}>Booking Fee:</span> Ugshs:50,000
              </p>
              <Button
                variant="contained"
                size="medium"
                href="/login"
                id="booking-btn"
              >
                BOOK A ROOM NOW
              </Button>
            </div>
            <div className="hostel-page-div3">
              <hr className="vertical-line" />
              <h3>Procedures for booking</h3>
              <p>1: Create an accout with the system</p>
              <p>2: Loin to your account</p>
              <p>3: Verify your phone number</p>
              <p>4: Select the method of payment</p>
              <p>
                4: Use the manchat code *134*5*6*6# to innitiate your booking
                fee payment
              </p>
              <p>5: Check out </p>
              <h3>Thanks for booking with us</h3>
            </div>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
};
