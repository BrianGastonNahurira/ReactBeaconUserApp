import React from "react";

//importing stylings
import "../../../Designs/Home.css";
import "../AllHostels/Hostels.css";

//import Assets
import Room from "../../../Assets/room.jpg";

//imports from mui
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

//importing json file
import { Data } from "../../../Components/JSONFILE/db";

export default () => {
  return (
    <>
      <div className="allhostels">
        <div className="allhostels-description">
          {/* <h3 style={{ color: "gray" }}>
            The Beacon Hostels | See all our hostels
          </h3> */}
        </div>
        <div className="allhostels-cards">
          {Data.map((host) => (
            <div key={host.id} className="card-design">
              <div>
                <Link to={`/hostel/${host.id}`}>
                  <img
                    className="allhostels-image"
                    style={{ width: "100%" }}
                    src={Room}
                    alt=""
                  />
                </Link>
              </div>
              <div className="allhostels-description-db ">
                <div style={{ display: "flex", gap: "7px" }}>
                  <p style={{ color: "blue" }}>{host.Name} </p>
                  <p style={{ color: "blue" }}> Ugshs{host.Amount}</p>
                  <ThumbUpIcon color="primary" />
                  <Button variant="text">VIEW</Button>
                </div>
                <p>{host.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
