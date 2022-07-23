import { Box, Center, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Investor = () => {
  return (
    <div style={{ width: "100%",marginBottom:"50px" }}>
      <Box width="100%">
        <Box p="4">
          <Text
            fontSize="3xl"
            fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
          >
            Our investors
          </Text>
        </Box>
        <Box
          width="100%"
          // height="230px"
          margin="auto"
          backgroundColor="white"
          borderRadius="12px"
        >
          <Grid
            templateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(4, 1fr)"}}
            width="100%"
            //  height="100%"
            backgroundColor="white"
            margin={"auto"}
          >
            <Box width="45%" 
            // height="230px" 
            backgroundColor="white">
              <Box
                backgroundColor="white"
                margin="50px 50px 20px 80px"
                width="55%"
              >
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px",height: "100px" }}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/hyundai.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" width="250px">
                <Text
                  fontFamily='apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
                  line-height="1.43"
                  backgroundColor="white"
                  size="14px"
                >
                  Hyundai Motor Company
                </Text>
              </Center>
            </Box>

            <Box width="45%" backgroundColor="white">
              <Box
                backgroundColor="white"
                margin="50px 50px 20px 80px"
                width="55%"
              >
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px", height: "100px" }}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/edelweissFinancialServices.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" width="250px">
                <Text
                  fontFamily='apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
                  line-height="1.43"
                  backgroundColor="white"
                  size="14px"
                >
                  Edelweiss Financial Services
                </Text>
              </Center>
            </Box>

            <Box width="45%"  backgroundColor="white">
              <Box
                backgroundColor="white"
                margin="50px 50px 20px 80px"
                width="55%"
              >
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px" ,height: "100px"}}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/dreamIncubator.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" marginTop="20px" width="250px">
                <Text
                  fontFamily='apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
                  line-height="1.43"
                  backgroundColor="white"
                  size="14px"
                >
                  Dream Incubator
                </Text>
              </Center>
            </Box>

            <Box width="45%" backgroundColor="white">
              <Box
                backgroundColor="white"
                margin="50px 50px 20px 80px"
                width="55%"
              >
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px", height: "100px" }}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/beenext.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" marginTop="20px" width="250px">
                <Text
                  fontFamily='apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
                  line-height="1.43"
                  backgroundColor="white"
                  size="14px"
                >
                  Beenext
                </Text>
              </Center>
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Investor;
