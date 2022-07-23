import React from "react";
import Middle from "../Pages/Middle";
import HomeRentalFinal from "./HomeRentalFinal";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomeRentalFinal></HomeRentalFinal>
      <Middle></Middle>
    </div>
  );
};

export default HomePage;
