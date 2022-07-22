import React from "react";
import { Routes, Route } from "react-router-dom";
import ReqAuth from "../Hoc/ReqAuth";
import MyProfile from "./MyProfile";
import Product from "./Product"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/"></Route>
        <Route
          path="/profile"
          element={
            <ReqAuth>
              <MyProfile />
            </ReqAuth>
          }
        ></Route>
        <Route path="/mybookings"></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
