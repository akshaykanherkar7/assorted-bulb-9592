import React, { useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import {
  checkLoginorNotAPI,
  getLoginDataAPI,
} from "../Redux/AuthReducer/auth.action";

export const SignIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loginData } = useSelector((state) => state.auth);
  const { isAuth, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  //   const [isAuth, setIsAuth] = useState(false);
  //   console.log("isAuth:", isAuth);

  useEffect(() => {
    dispatch(getLoginDataAPI());
  }, []);

  const handleLogin = () => {
    // let flag;
    // for (let i = 0; i < loginData.length; i++) {
    //   if (loginData[i].email === email && loginData[i].password === password) {
    //     flag = true;
    //     localStorage.setItem("LoginData", JSON.stringify(loginData[i]));
    //     break;
    //   } else {
    //     flag = false;
    //   }
    // }

    // if (flag === true) {
    //   alert("Login Success");
    //   setIsAuth(true);
    // } else {
    //   alert("Login Failed");
    //   setIsAuth(false);
    // }
    dispatch(checkLoginorNotAPI({ email, password }));
  };
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <Text mt={4} onClick={onOpen}>
        Login or Signup
      </Text>
      <Modal
        height="100%"
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent w="20%">
          <ModalHeader>
            <Center>LOGIN</Center>
          </ModalHeader>
          <ModalCloseButton onClick={handleNavigate} />
          <ModalBody h="sm">
            <Flex
              align={"center"}
              justify={"center"}
              //   bg={useColorModeValue("gray.50", "gray.800")}
            >
              <Stack spacing={1} mx={"auto"} maxW={"lg"} py={2} px={1}>
                <Box
                  //   width="140%"
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  p={1}
                  //   border="1px solid red"
                >
                  <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                        onClick={handleLogin}
                        isLoading={isLoading}
                      >
                        Login
                      </Button>
                    </Stack>
                    <Stack pt={6}>
                      <Flex justifyContent="space-evenly">
                        <Text align={"center"}>Don't have account? </Text>
                        <RouterLink
                          to="/signup"
                          color={"blue.400"}
                          alignItems="center"
                        >
                          <SignUp></SignUp>
                        </RouterLink>
                      </Flex>
                    </Stack>
                    <Center p={1}>
                      <Stack
                        spacing={2}
                        align={"center"}
                        maxW={"md"}
                        w={"full"}
                      >
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

export default SignIn;
