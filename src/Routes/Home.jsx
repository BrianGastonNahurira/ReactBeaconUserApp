import React from "react";

/*
  importing routes 
*/
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Hostels from "../Components/Hostels/AllHostels/Hostels";
import PopularHostels from "../Components/Hostels/PopularHostels/PopularHostels";

export default () => {
  return (
    <>
      <div className="home">
        {/* <Banner /> */}
        <Header />
        <PopularHostels />
        <Hostels />
        <Footer />
      </div>
    </>
  );
};
