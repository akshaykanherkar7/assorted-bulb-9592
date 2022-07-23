import React from "react";
import styles from "./Navbar.module.css";
import SignIn from "../Pages/SignIn";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { logOutAPI } from "../Redux/AuthReducer/auth.action";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isAuth } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("LoginData"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMyProfile = () => {
    navigate("/profile");
  };

  const handleNavigate = () => {
    navigate("/");
  };

  const handleBooking = () => {
    navigate("/mybookings");
  };

  const handleLogout = () => {
    dispatch(logOutAPI());
    navigate("/");
  };

  const handleFAQ = () => {
    navigate("/faq");
  };
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.div1}>
          <div className={styles.imgDiv}>
            <img
              onClick={handleNavigate}
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
          <div className={styles.innerDiv2} onClick={handleFAQ}>
            FAQs
          </div>

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
                <MenuItem minH="40px" gap="30px" onClick={handleBooking}>
                  <i class="fa-solid fa-car"></i>
                  <span>My Bookings</span>
                </MenuItem>
                <MenuItem minH="40px" gap="30px">
                  <i class="fa-solid fa-car-side"></i>
                  <span>My Subscriptions</span>
                </MenuItem>
                <MenuItem minH="40px" gap="30px" onClick={handleLogout}>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  <span>Logout</span>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <div className={styles.innerDiv3}>
              <span class="material-symbols-outlined">login</span>
              <div style={{ marginLeft: "10px", marginTop: "-17px" }}>
                {/* <Link to="/login"> */}
                <SignIn
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                ></SignIn>
                {/* </Link> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
