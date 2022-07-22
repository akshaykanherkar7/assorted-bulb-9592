import React from "react";
import styles from "./Navbar.module.css";
import SignIn from "../Pages/SignIn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("LoginData"));
  const navigate = useNavigate();

  const handleMyProfile = () => {
    navigate("/profile")
  };
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.div1}>
          <div className={styles.imgDiv}>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
              alt="rev_logo"
            />
            <p className={styles.subtitle}>Sanitised. Safe</p>
          </div>
        </div>
        <div className={styles.div2}>
          <div className={styles.innerDiv1}>
            <p style={{ fontWeight: "bold", fontSize: "17px" }}>Hyundai</p>
            <p style={{ marginLeft: "5px", fontSize: "14px" }}>Subscription</p>
          </div>
          <div className={styles.innerDiv1}>
            <p style={{ fontWeight: "bold", fontSize: "17px" }}>Mahindra</p>
            <p style={{ marginLeft: "5px", fontSize: "14px" }}>Subscription</p>
          </div>
          <div className={styles.innerDiv2}>FAQs</div>

          {isAuth ? (
            <Menu>
              <Flex
                marginLeft="-50px"
                display="flex"
                gap="10px"
                alignItems="center"
              >
                <Box>
                  <i class="fa-solid fa-user"></i>
                </Box>
                <MenuButton>
                  {user.fname} <i class="fa-solid fa-angle-down"></i>
                </MenuButton>
              </Flex>
              <MenuList>
                <MenuItem minH="48px" gap="30px" onClick={handleMyProfile}>
                  <i class="fa-solid fa-user"></i>
                  <span>My Profile</span>
                </MenuItem>
                <MenuItem minH="40px" gap="30px">
                  <i class="fa-solid fa-car"></i>
                  <span>My Bookings</span>
                </MenuItem>
                <MenuItem minH="40px" gap="30px">
                  <i class="fa-solid fa-car-side"></i>
                  <span>My Subscriptions</span>
                </MenuItem>
                <MenuItem minH="40px" gap="30px">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <span>Logout</span>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <div className={styles.innerDiv3}>
              <span class="material-symbols-outlined">login</span>
              <div style={{ marginLeft: "10px", marginTop: "-17px" }}>
                <Link to="/login">
                  <SignIn></SignIn>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
