import React, { useReducer } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerSignUpAPI } from "../Redux/AuthReducer/auth.action";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/auth.actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case "fname":
      return {
        ...state,
        fname: action.payload,
      };

    case "lname":
      return {
        ...state,
        lname: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "mobile":
      return {
        ...state,
        mobile: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  id: Date.now(),
  fname: "",
  lname: "",
  email: "",
  mobile: +91,
  password: "",
};

const SignUp = () => {
  //Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  //   SignUp
  const [showPassword, setShowPassword] = useState(false);
  const [state, setter] = useReducer(reducer, initialState);
  console.log("state:", state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupHandler = () => {
    dispatch(registerSignUpAPI(state));
    // .then((res) => {
    //     dispatch(getLoginData())
    // })
    // .then((res) => {
    //     if(res === REGISTER_SUCCESS){
    //         navigate("/login")
    //     }
    // })
  };
  return (
    <div>
      <Box ref={finalRef} tabIndex={-1} aria-label="Focus moved to this box">
        Some other content that'll receive focus on close.
      </Box>
      <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>

      {/* SignUp */}
      <Modal
        height="100%"
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>SIGN UP</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody h="sm">
            <Flex
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={1} mx={"auto"} maxW={"lg"} py={2} px={1}>
                <Center p={2}>
                  <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
                    {/* Google */}
                    <Button
                      w={"full"}
                      variant={"outline"}
                      leftIcon={<FcGoogle />}
                    >
                      <Center>
                        <Text>Sign in with Google</Text>
                      </Center>
                    </Button>
                    {/* Facebook */}
                    <Button
                      w={"full"}
                      colorScheme={"facebook"}
                      leftIcon={<FaFacebook />}
                    >
                      <Center>
                        <Text>Continue with Facebook</Text>
                      </Center>
                    </Button>
                  </Stack>
                </Center>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  p={2}
                >
                  <Stack spacing={4}>
                    <HStack>
                      <Box>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>First Name</FormLabel>
                          <Input
                            type="text"
                            value={state.fname}
                            onChange={(e) => {
                              setter({
                                type: "fname",
                                payload: e.target.value,
                              });
                            }}
                          />
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl id="lastName">
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            type="text"
                            value={state.lname}
                            onChange={(e) => {
                              setter({
                                type: "lname",
                                payload: e.target.value,
                              });
                            }}
                          />
                        </FormControl>
                      </Box>
                    </HStack>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        value={state.email}
                        onChange={(e) => {
                          setter({ type: "email", payload: e.target.value });
                        }}
                      />
                    </FormControl>
                    <Box>
                      <FormControl id="mobile" isRequired>
                        <FormLabel>Mobile</FormLabel>
                        <Input
                          type="number"
                          value={state.mobile}
                          onChange={(e) => {
                            setter({ type: "mobile", payload: e.target.value });
                          }}
                        />
                      </FormControl>
                    </Box>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          value={state.password}
                          onChange={(e) => {
                            setter({
                              type: "password",
                              payload: e.target.value,
                            });
                          }}
                        />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        onClick={signupHandler}
                      >
                        Sign up
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        Already a user? <Link color={"blue.400"}>Login</Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SignUp;
