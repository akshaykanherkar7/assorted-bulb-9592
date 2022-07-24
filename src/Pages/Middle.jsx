import React from "react";
import Day3 from "./Day3";
import Download from "./Download";
import Faqsfooter from "./Faqsfooter";
import Features from "./Features";
import Footer from "./Footer";
import Fqa from "./Fqa";
import HappyC from "./HappyC";
import Investor from "./Investor";
import Lowest from "./Lowest";
import styles from "./Middle.module.css";
import Sanitizer from "./Sanitizer";
import Serviceable from "./Serviceable";
import Why from "./Why";

const Middle = () => {
  return (
    <div style={{ backgroundColor: "#f1f4f8" }}>
      <div className={styles.MainShra}>
        <Features />
        <Sanitizer />
        <Why />
        <Fqa/>
        <HappyC />
        <Download />
        <Day3 />
        <Investor />
        <Serviceable />
        <Footer></Footer>
        <Lowest></Lowest>
      </div>
    </div>
  );
};

export default Middle;
