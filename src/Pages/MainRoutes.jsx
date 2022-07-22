import React from "react";

import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/"></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
