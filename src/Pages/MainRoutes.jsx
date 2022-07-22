import React from "react";

import { Routes, Route } from "react-router-dom";
import ReqAuth from "../Hoc/ReqAuth";
import MyProfile from "./MyProfile";


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
      </Routes>
    </div>
  );
};

export default MainRoutes;
