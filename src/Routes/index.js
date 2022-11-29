import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "../Components/Hostels/BookingForm/Booking";
import Account from "../Routes/Account";
import Home from "../Routes/Home";
import Hostel from "../Routes/Hostel";
import NotFound from "../Routes/NotFound";
import Login from "../Routes/Login"
import Itemcards from "../Routes/itemcards";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hostel/:id" element={<Hostel />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/itemcards" element={<Itemcards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
