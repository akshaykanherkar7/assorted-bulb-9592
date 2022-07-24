import React from "react";
import {
  Box,
  Button,
  Center,
  Input,
  Table,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styled from "../style/Booking.module.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { postBookingData } from "../Redux/Dashboard/action";

const CarBooking = () => {
  const carDetail = JSON.parse(localStorage.getItem("CarProduct"));
  const duration = localStorage.getItem("duration");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { end_date, start_date, city } = useSelector(
    (state) => state.dashboard
  );
  const handlePayPage = () => {
    const payload = {
      title: carDetail.title,
      city: city,
      start_date: start_date,
      end_date: end_date,
      duration: duration,
    };
    navigate("/payment");
    dispatch(postBookingData(payload));
  };

  // localStorage.setItem("Total", carDetail.priceLabel3 + 400 + 2000);
  // main div

  return (
    <div>
      <Navbar></Navbar>
      <Box className={styled.mainBox_Booking}>
        <Box width={"80%"} boxSizing="border-box" paddingBottom={"2%"}>
          {/* {/* main box for booking details */}

          <Box
            display={"flex"}
            gap="20px"
            height={"250px "}
            width={"100%"}
            marginBottom="2%"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          >
            {/* left box */}
            <Box width={"35%"} h="250px">
              {/* name cwhich come through map */}
              <h3 paddingLeft="10%">{carDetail.title}</h3>
              <img className={styled.img} src={carDetail.imgsrc} alt="" />
            </Box>

            {/* right box  */}
            <Box w={"65%"}>
              {/* heading */}

              <p className={styled.booking_details_heading}>
                <span className={styled.heading_span}>BOOKING DETAILS</span>
              </p>

              {/* satrt day */}

              <Box display={"flex"} justifyContent="space-evenly">
                <Box font-size="16px">{start_date}</Box>
                <Box> to </Box>
                {/* end day */}
                <Box font-size="16px">{end_date}</Box>
              </Box>

              {/* duration */}

              <Box className={styled.duration}>
                Total Duration: {duration} Day
              </Box>

              {/* city  */}

              <Box className={styled.city}>
                <p className={styled.heading}>
                  <b> {city}</b>
                </p>
                <p className={styled.p}>Change City</p>
              </Box>

              {/* plans  */}
              <Box
                display={"flex"}
                marginTop="4%"
                justifyContent="space-evenly"
              >
                <p className={styled.heading}>
                  <b>Pricing Plan: Includes Unlimited kms, excludes fuel</b>
                </p>
                <p className={styled.p}>Change plan</p>
              </Box>
            </Box>
          </Box>

          {/* IMPORTANT POINTS TO REMEMBER */}

          <Box marginTop={"3%"}>
            <Box
              height={"468px"}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              marginTop={"3%"}
            >
              <p className={styled.booking_details_heading}>
                <span className={styled.heading_span}>
                  IMPORTANT POINTS TO REMEMBER
                </span>
              </p>

              <Table>
                <Tbody>
                  <Tr>
                    <Td className={styled.left_td}>CHANGE IN PRICING PLAN:</Td>
                    <Td border={"2px dotted #e9ecef"} fontSize="12.9px">
                      The pricing plan (15 kms/hr, with fuel) cannot be changed
                      after the booking is made
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className={styled.left_td}>FUEL:</Td>
                    <Td className={styled.right_td}>
                      Included. If you need to refuel during your trip, we will
                      reimburse the fuel bills (while returning the car, please
                      let our executive take a pic of them. Hand-written bills
                      are NOT valid)
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className={styled.left_td}>
                      TOLLS, PARKING, INTER-STATE TAXES:
                    </Td>
                    <Td className={styled.right_td}>To be paid by you.</Td>
                  </Tr>
                  <Tr>
                    <Td className={styled.left_td}>ID VERIFICATION:</Td>
                    <Td className={styled.right_td}>
                      Please keep your original Driving License handy. While
                      delivering the car to you, our executive will verify your
                      original Driving License and ID proof (same as the ones
                      whose details were provided while making the booking).
                      This verification is mandatory. In the unfortunate case
                      where you cannot show these documents, we will not be able
                      to handover the car to you, and it will be treated as a
                      late cancellation (100% of the fare would be payable).
                      Driving license printed on A4 sheet of paper (original or
                      otherwise) will not be considered as a valid document.
                    </Td>
                  </Tr>
                  <Tr>
                    <Td className={styled.left_td}>PRE-HANDOVER INSPECTION:</Td>
                    <Td className={styled.right_td}>
                      Please inspect the car (including the fuel gauge and
                      odometer) thoroughly before approving the checklist.
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
            <p paddingLeft="25px" fontSize="13px">
              Change pricing plan
            </p>
          </Box>
        </Box>

        {/* FARE DETAILS  right part */}

        <Box className={styled.fareDetailsRight}>
          <h3 className={styled.booking_details_heading}>
            <span className={styled.heading_span}> FARE DETAILS </span>
          </h3>

          <Table>
            <Tbody>
              <Tr>
                <Td className={styled.left_td_Fare}>Base fare</Td>

                {/* price which come throung with map  */}
                <Td className={styled.right_td_Fare}>
                  ₹ {carDetail.priceLabel3}
                </Td>
              </Tr>
              <Tr>
                <Td className={styled.left_td_Fare}>
                  Doorstep delivery & pickup
                </Td>
                <Td className={styled.right_td_Fare}>₹ 400</Td>
              </Tr>
              <Tr>
                <Td className={styled.left_td_Fare}>Insurance & GST</Td>
                <Td className={styled.right_td_Fare}>₹ Included</Td>
              </Tr>
              <Tr>
                <Td className={styled.left_td_Fare}>
                  Refundable security deposit
                </Td>
                <Td className={styled.right_td_Fare}>₹ 2000</Td>
              </Tr>

              <Tr>
                <Td></Td>
                <Td></Td>
              </Tr>
              <Tr>
                <Td>
                  {/* promo code */}
                  <Box>
                    <label className={styled.promo_lable}>Promo code</label>
                    <input type="text" className={styled.promo_codo_inp} />
                    <Box>
                      <hr aria-hidden="true" className={styled.hr1} />
                      <hr aria-hidden="true" className={styled.hr2} />
                    </Box>
                  </Box>
                </Td>

                <Td paddingTop={"20px"}>
                  <button label="Apply" className={styled.btn}>
                    Apply
                  </button>
                </Td>
              </Tr>
              <Tr>
                <Td colSpan="2" h={"10px"}></Td>
              </Tr>

              {/* total priice */}

              <Tr>
                <Td className={styled.left_td_Fare}>Total</Td>
                <Td className={styled.right_td_Fare}>
                  ₹ {carDetail.priceLabel3 + 400 + 2000}
                </Td>
              </Tr>
              <Tr>
                <Td className={styled.left_td_Fare}> Kms limit</Td>
                <Td className={styled.right_td_Fare}> unlimited kms</Td>
              </Tr>
              <Tr>
                <Td className={styled.left_td_Fare}> Fuel</Td>
                <Td className={styled.right_td_Fare}> Excluded</Td>
              </Tr>
              <Tr>
                <Td className={styled.left_td_Fare}>Extra kms charge</Td>
                <Td className={styled.right_td_Fare}> {carDetail.extrakm}</Td>
              </Tr>
              <Tr>
                <Td className={styled.left_td_Fare}>
                  Tolls, Parking & Inter-state taxes
                </Td>
                <Td className={styled.right_td_Fare}>To be paid by you</Td>
              </Tr>
            </Tbody>
          </Table>
          <Center>
            <Button onClick={handlePayPage} colorScheme="teal" size="md">
              Pay
            </Button>
          </Center>
        </Box>
      </Box>
    </div>
  );
};

export default CarBooking;
