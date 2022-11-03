import React from "react";

//importing assets
import Room from "../../../Assets/room.jpg";

//importing designs
import "../../../Designs/Home.css";

//swiper requirements
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css/autoplay";

//imports from mui
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";

export default () => {
  return (
    <div className="popular-ctr">
      <div className="popular-desc">
        <h3 style={{ color: "gray", padding: "20px", margin: "20px" }}>
          Popular Hostels | See what is most liked
        </h3>
      </div>
      <div className="swiper-hostels" style={{ padding: "20px" }}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            576: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },

            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 2000 }}
          // slidesPerView={3}
          loop={true}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {/* <div className="event-dsc"> */}
          {data.map((row) => (
            <SwiperSlide style={{ display: "flex" }}>
              <div
                className="swiper card"
                key={row.Name}
                // style={{ padding: "20px", background: "white" }}
              >
                <img
                  className="swiper-image"
                  // style={{ width: "70vh", height: "75%" }}
                  src={Room}
                  alt=""
                />
                <div className="description-p ">
                  <div style={{ display: "flex", gap: "20px" }}>
                    <p style={{ color: "blue" }}>{row.Name} </p>
                    <p style={{ color: "blue" }}> Ugshs{row.Amount}</p>
                    <ThumbUpIcon color="primary" />
                    <Button variant="text">VIEW</Button>
                  </div>
                  <p>{row.Description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* </div> */}
        </Swiper>
      </div>
    </div>
  );
};

const data = [
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
  {
    Name: "Northern Elite",
    Description:
      "This is a unisex hostel located half a km from the university premises. We welcome every one at this hostel. Please get your self a room here",
    Amount: " 400,000",
  },
];
