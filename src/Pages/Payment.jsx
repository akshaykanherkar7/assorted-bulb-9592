import React from "react";
import styled from "../style/payment.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  Button,
  MenuItem,
  MenuList,
  MenuButton,
  AccordionButton,
  ccordionIcon,
  AccordionPanel,
  AccordionItem,
  AccordionIcon,
  Accordion,
  Box,
} from "@chakra-ui/react";
import Upi from "./Upi";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <Box>
      <Box className={styled.upiBox}>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
          alt=""
        />
      </Box>
      <Box className={styled.upiMainBox} >
        <Box className={styled.upiMainBoxFirstchild} >
          <Box marginLeft={"5%"}>
            <h4>Total amount to be paid</h4>
            <p style={{ fontSize: "12px" }}>(Inclusive of all taxes)</p>
          </Box>
          <Box marginRight={"5%"}>₹ 23014</Box>
        </Box>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box className={styled.upiDropDown}>
                  <Box className={styled.upiDropDownFirsChild}>
                    <img
                      height={"30px"}
                      width="8%"
                      src="data:image/png;base64,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"
                      alt="upi logo"
                    />
                    <h1>UPI</h1>
                  </Box>
                  <Box>
                    <AccordionIcon color={"#0EBABA"} />
                  </Box>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Button
                h={"50px"}
                backgroundColor="#0EBABA"
                width="100%"
                color={"#FFFFFF"}
              >
                {/* {" "} */}
                <Link to="/upi">pay</Link>

              </Button>
            </AccordionPanel>
          </AccordionItem>

          {/* cradit card */}

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Payment;
