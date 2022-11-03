import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainFooter from "./Components/Footer/Footer";
import Booking from "./Components/Hostels/BookingForm/Booking";
import Account from "./Routes/Account";
import Home from "./Routes/Home";
import Hostel from "./Routes/Hostel";
import Login from "./Routes/Login";
import NotFound from "./Routes/NotFound";

export const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/hostel/:id" element={<Hostel />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};
