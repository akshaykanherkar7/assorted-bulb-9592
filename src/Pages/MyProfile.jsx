import React from "react";
import { Text } from "@chakra-ui/react";
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
  FormLabel,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logOutAPI } from "../Redux/AuthReducer/auth.action";

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("LoginData"));
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutAPI());
  };
  return (
    <div>
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

        <Box
          //  border="1px solid red"
          h="300px"
          w="70%"
          mt="80px"
        >
          <Flex gap=" 70px">
            <Box cursor="no-drop">
              <FormLabel cursor="no-drop" color="gray">
                Name
              </FormLabel>
              <Text
                borderRadius="5px"
                color="gray"
                border="1px solid lightgray"
                p="10px"
                w="100%"
              >
                {user.fname + " " + user.lname}
              </Text>
            </Box>
            <Box cursor="no-drop">
              <FormLabel cursor="no-drop" color="gray">
                E-mail
              </FormLabel>
              <Text
                borderRadius="5px"
                color="gray"
                border="1px solid lightgray"
                p="10px"
                w="100%"
              >
                {user.email}
              </Text>
            </Box>
          </Flex>
          <Box cursor="no-drop" mt="30px">
            <FormLabel cursor="no-drop" color="gray">
              Phone-Number
            </FormLabel>
            <Text
              borderRadius="5px"
              color="gray"
              border="1px solid lightgray"
              p="10px"
              w="15%"
            >
              {`+91-${user.mobile}`}
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MyProfile;
