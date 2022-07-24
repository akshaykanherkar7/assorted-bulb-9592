import React, { useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logOutAPI } from "../Redux/AuthReducer/auth.action";
import { useNavigate } from "react-router-dom";
import { deleteBookingData, getBookingData } from "../Redux/Dashboard/action";

const BookingDetails = () => {
  const user = JSON.parse(localStorage.getItem("LoginData"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutAPI());
    navigate("/");
  };

  // const carDetail = JSON.parse(localStorage.getItem("CarProduct"));
  // const { start_date, end_date, city } = useSelector(
  //   (state) => state.dashboard
  // );
  const { booking } = useSelector((state) => state.dashboard);
  console.log("booking:", booking);

  const duration = localStorage.getItem("duration");

  useEffect(() => {
    dispatch(getBookingData());
  }, [dispatch]);

  const handleRemove = (id) => {
    dispatch(deleteBookingData(id)).then((res) => {
      dispatch(getBookingData());
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <Box
        width="95%"
        margin="auto"
        // border="1px solid black"
        display="flex"
        gap="90px"
      >
        <Box
          bg="blackAlpha.700"
          h="300px"
          w="20%"
          mt="50px"
          border="1px solid black"
          borderRadius="10px"
        >
          <Text fontSize="35px" ml="20px" mt="20px" color="white">
            {user.fname}
          </Text>
          <Text fontSize="20px" ml="20px" color="white">
            {user.lname}
          </Text>
          <hr style={{ marginTop: "15px", backgroundColor: "black" }} />

          <Flex
            display="flex"
            alignItems="center"
            mt="15px"
            ml="15px"
            gap="20px"
            cursor="pointer"
          >
            <i class="fa-solid fa-user" style={{ color: "white" }}></i>
            <Text color="white">My Profile</Text>
          </Flex>
          <hr style={{ marginTop: "15px" }} />
          <Flex
            display="flex"
            alignItems="center"
            mt="15px"
            ml="15px"
            gap="20px"
            cursor="pointer"
          >
            <i class="fa-solid fa-key" style={{ color: "white" }}></i>
            <Text color="white">Change Password</Text>
          </Flex>
          <hr style={{ marginTop: "15px" }} />
          <Flex
            display="flex"
            alignItems="center"
            mt="15px"
            ml="15px"
            gap="20px"
            cursor="pointer"
          >
            <i
              class="fa-solid fa-right-from-bracket"
              style={{ color: "white" }}
            ></i>
            <Text color="white" onClick={handleLogOut}>
              Log out
            </Text>
          </Flex>
          <hr style={{ marginTop: "15px" }} />
        </Box>

        <Box h="200px" w="70%" mt="80px">
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Booking Details</TableCaption>
              <Thead>
                <Tr>
                  <Th>Car Model</Th>
                  <Th>Id</Th>
                  <Th>start date</Th>
                  <Th>end date</Th>
                  <Th>duration</Th>
                  <Th>city</Th>
                </Tr>
              </Thead>
              <Tbody>
                {booking.length > 0 &&
                  booking.map((el) => (
                    <Tr key={el.id}>
                      <Td>{el.title}</Td>
                      <Td>{el.id}</Td>
                      <Td>{el.start_date}</Td>
                      <Td>{el.end_date}</Td>
                      <Td>{el.duration}</Td>
                      <Td>{el.city}</Td>
                      <Button
                        onClick={() => handleRemove(el.id)}
                        colorScheme={"teal"}
                      >
                        Remove
                      </Button>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};

export default BookingDetails;
