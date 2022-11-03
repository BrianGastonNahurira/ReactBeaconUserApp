import React from "react";

import Typical from "react-typical";

/* 
importing designs 
*/
import "../Banner/Banner.css";

export default () => {
  return (
    <>
      <div className="banner ">
        <h2>
          Hello Beaconian ?{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Are you looking for a room",
              2000,
              "Do you wish to see all hostels here",
              2000,
              "Are you looking for a secure hostel",
              2000,
              "Do you need to tour around",
              2000,
              "Do you need to know more about Beacon",
              2000,
              "We got you covered",
              2000,
              "Find a perfect room",
              2000,
              "Book now",
              2000,
              "Stay here! We shall help you find a perfect room",
              2000,
            ]}
          />
        </h2>
      </div>
    </>
  );
};
