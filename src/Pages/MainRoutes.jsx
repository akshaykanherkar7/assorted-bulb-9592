import React from "react";

import { Routes, Route } from "react-router-dom";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
import Product from "./Product"

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/"></Route> */}
        {/* <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route> */}
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
