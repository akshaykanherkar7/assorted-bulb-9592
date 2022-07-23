import React from "react";
import {
  Box,
  Flex,
  Checkbox,
  Heading,
  Image,
  Button,
  Grid,
  Center,
  Link,
  Spacer,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCars } from "../Redux/CarReducer/action";
import { useNavigate } from "react-router-dom";
// import styles from "./Product.module.css"
import Productdown from "./Productdown";
import Navbar from "../Components/Navbar";

const Product = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.car);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  console.log(cars);

  const handleCarDetail = (el) => {
    console.log("IN CARDETAIL");
    localStorage.setItem("CarProduct", JSON.stringify(el));
    navigate("/booking-summary");
  };
  return (
    <Box>
      <Navbar></Navbar>
      {/* upper portion, part1 */}
      <Box>
        <Box pt="20px" fontSize="14px" pl="47px">
          <Link color="#7f868e">Car Rental </Link>
          <Link color="#7f868e"> Car Rental</Link>
          <Link color="#7f868e"> Rent a Car</Link>
          <Link color="#7f868e"> Car Rental in Bangalore</Link>
          <Link color="#7f868e"> Cars for Rent in Bangalore</Link>
        </Box>
      </Box>

      {/* upper portion, part2  */}

      <Box>
        <Flex>
          {/* p1  */}
          <Box pt="10px" pb="10px" w="300px">
            <Flex>
              <Box pl="50px" color="grey">
                <b>FILTERS</b>
              </Box>
              <Spacer />
              <Box pr="10px" color="teal" fontSize="12px" mt="4px">
                RESET ALL
              </Box>
            </Flex>
          </Box>

          {/* p2  */}
          <Box w="1255px">
            <Flex gap="30px">
              <Box w="500px" color="grey" pt="10px" pr="120px" fontSize="20px">
                <Center>Car Rental in Bangalore</Center>
              </Box>
              <Box>
                <Box w="400px" pt="10px" color="grey" pr="210px">
                  <Center>Prices exclude fuel cost</Center>
                </Box>
              </Box>
              <Box w="500px">
                <Flex pt="10px">
                  <Box color="grey">Sort by:</Box>
                  <Spacer />
                  <Box pr="80px">
                    {/* Popularity */}
                    <Popover>
                      <PopoverTrigger>
                        <Box>Popularity</Box>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Price: Low to High</PopoverHeader>
                        <PopoverHeader>Price: High to Low </PopoverHeader>
                        <PopoverHeader>
                          Extra Km Charges: Low to High{" "}
                        </PopoverHeader>
                        <PopoverHeader>
                          Extra Km Charges: Low to High
                        </PopoverHeader>
                      </PopoverContent>
                    </Popover>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box h="4250px">
        <Flex h="4200px" pt="20px" mb="20px">
          {/* left-box */}
          <Box w="300px" pl="50px">
            {/* heading1 */}
            <Heading as="h3" size="sm">
              Segments
            </Heading>
            <Box color="#7f868e" size="sm">
              <Checkbox size="sm">Hatchback</Checkbox>
              <br />
              <Checkbox size="sm">Sedan</Checkbox>
              <br />
              <Checkbox size="sm">SUV</Checkbox>
              <br />
              <Checkbox size="sm">MUV</Checkbox>
              <br />
              <br />
            </Box>
            {/* heading2 */}
            <Heading as="h3" size="sm">
              Brand
            </Heading>
            <Box color="#7f868e" size="sm">
              <Checkbox size="sm">Maruti</Checkbox>
              <br />
              <Checkbox size="sm">Hyundai</Checkbox>
              <br />
              <Checkbox size="sm">Mahindra</Checkbox>
              <br />
              <Checkbox size="sm">Honda</Checkbox>
              <br />
              <Checkbox size="sm">Toyota</Checkbox>
              <br />
              <Checkbox size="sm">Ford</Checkbox>
              <br />
              <br />
            </Box>

            {/* heading3 */}
            <Heading as="h3" size="sm">
              Fuel Type
            </Heading>
            <Box color="#7f868e" size="sm">
              <Checkbox size="sm">Diesel</Checkbox>
              <br />
              <Checkbox size="sm">Petrol</Checkbox>
              <br />
              <br />
            </Box>

            {/* heading4 */}
            <Heading as="h3" size="sm">
              Transmission Type
            </Heading>
            <Box color="#7f868e" size="sm">
              <Checkbox size="sm">Automatic</Checkbox>
              <br />
              <Checkbox size="sm">Manual</Checkbox>
              <br />
              <br />
            </Box>

            {/* heading4 */}
            <Heading as="h3" size="sm">
              Seating Capacity
            </Heading>
            <Box color="#7f868e" size="sm">
              <Checkbox size="sm">5 seats</Checkbox>
              <br />
              <Checkbox size="sm">7 seats</Checkbox>
              <br />
            </Box>
          </Box>
          {/* rigth-box   */}

          <Grid
            templateColumns="repeat(3, 380px)"
            h="500px"
            gap={6}
            borderRadius="10px"
          >
            <Grid templateColumns="repeat(1, 400px)" h="400px" gap={6}>
              <Box>
                <Image
                  borderRadius="10px"
                  w="380px"
                  h="400px"
                  border="1px solid #7f868e"
                  src="https://www.revv.co.in/imgs/plp_banner_web.png"
                ></Image>
              </Box>
            </Grid>
            {
              /* map through the fetched cars list, to form table rows */

              cars.map((ele, index) => {
                // console.log(ele)
                return (
                  <Box
                    key={index}
                    borderRadius="10px"
                    border="1px solid #7f868e"
                    h="400px"
                  >
                    <Heading
                      bg="#ededed"
                      borderRadius="10px 10px 0px 0px"
                      size="md"
                    >
                      <Center>{ele.title}</Center>
                    </Heading>
                    <Box bg="#ededed">
                      <Center>
                        <Image
                          w="300px"
                          h="250px"
                          src={ele.imgsrc}
                          alt="Dan Abramov"
                        />
                      </Center>
                    </Box>
                    {/* flex1 */}
                    <Flex bg="#ededed">
                      <Box w="150px">
                        <Center>
                          <Flex color="#7f868e" gap="5px">
                            <Box>
                              <Center>{ele.carbrief}</Center>{" "}
                            </Box>
                            <Box>
                              <Center>
                                <Image
                                  mt="5px"
                                  h="15px"
                                  src={ele.descriptioniconsrc}
                                  alt="Dan Abramov"
                                />
                              </Center>{" "}
                            </Box>
                          </Flex>
                        </Center>
                      </Box>
                      <Box w="150px">
                        <Center>
                          <Flex color="#7f868e" gap="5px">
                            <Box>
                              {" "}
                              <Center>{ele.carbrief2} </Center>
                            </Box>
                            <Box>
                              {" "}
                              <Center>
                                {" "}
                                <Image
                                  mt="5px"
                                  h="15px"
                                  src={ele.descriptioniconsrc2}
                                  alt="Dan Abramov"
                                />{" "}
                              </Center>
                            </Box>
                          </Flex>
                        </Center>
                      </Box>

                      <Box w="150px">
                        <Center>
                          <Flex color="#7f868e" gap="5px">
                            <Box>
                              <Center>{ele.carbrief3} </Center>
                            </Box>
                            <Box>
                              <Center>
                                <Image
                                  mt="5px"
                                  h="15px"
                                  src={ele.descriptioniconsrc3}
                                  alt="Dan Abramov"
                                />{" "}
                              </Center>
                            </Box>
                          </Flex>
                        </Center>
                      </Box>
                    </Flex>

                    {/* flex2 */}
                    <Flex gap="1px">
                      <Box w="300px">
                        <Box>
                          <Center>{ele.priceLabel}</Center>
                        </Box>
                      </Box>
                      <Box w="300px" bg="#cccccc">
                        <Box>
                          <Center>{ele.priceLabel2}</Center>
                        </Box>
                      </Box>
                      <Box w="300px" bg="#cccccc">
                        <Box>
                          <Center> {ele.priceLabel3} </Center>
                        </Box>
                      </Box>
                    </Flex>

                    {/* flex3  */}
                    <Flex gap="1px" fontSize="10px" mb="9px">
                      <Box w="300px">
                        <Box pb="10px">
                          <Center>{ele.kmSpan}</Center>
                        </Box>
                      </Box>
                      <Box w="300px" bg="#cccccc">
                        <Box pb="10px">
                          <Center>{ele.kmSpan2}</Center>
                        </Box>
                      </Box>
                      <Box w="300px" bg="#cccccc">
                        <Box pb="10px">
                          <Center>{ele.kmSpan3}</Center>
                        </Box>
                      </Box>
                    </Flex>

                    {/* flex3 */}
                    <Flex gap="40px" ml="20px">
                      <Box mr="2px" fontSize="10px" color="#7f868e" mt="8px">
                        {ele.extrakm}
                      </Box>

                      <Box>
                        <Button
                          ml="100px"
                          w="100px"
                          h="30px"
                          colorScheme="teal"
                          size="md"
                          onClick={() => handleCarDetail(ele)}
                        >
                          Book
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                );
              })
            }
          </Grid>
        </Flex>
      </Box>

      <Productdown />
    </Box>
  );
};

export default Product;
