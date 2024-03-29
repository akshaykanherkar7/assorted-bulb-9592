import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Navbar from "../Components/Navbar";
import ReqAuth from "../Hoc/ReqAuth";
import BookingDetails from "./BookingDetails";
import CarBooking from "./CarBooking";
import Faqs from "./Faqs";
import MyProfile from "./MyProfile";
import Payment from "./Payment";
import Product from "./Product";
import Subscription from "./Subscription";
import Success from "./Success";
import Upi from "./Upi";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/profile"
          element={
            <ReqAuth>
              <MyProfile />
            </ReqAuth>
          }
        ></Route>
        <Route path="/mybookings" element={<BookingDetails />}></Route>
        <Route path="/cars" element={<Product />}></Route>
        <Route path="/booking-summary" element={<CarBooking />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/upi" element={<Upi />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/subscription" element={<Subscription />}></Route>
        <Route path="/faq" element={<Faqs/>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
