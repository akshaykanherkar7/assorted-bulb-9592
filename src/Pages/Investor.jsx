import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const Investor = () => {
  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Box width="100%" height="90%" >
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
          height="230px"
          margin="auto"
          backgroundColor="white"
          borderRadius="12px"
        >
          <Flex width="100%" height="100%" backgroundColor="white"  flexWrap='wrap' boxSizing="border-box">
            <Box width="25%" height="230px" backgroundColor="white">
              <Box marginTop="40px" backgroundColor="white">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px", height: "100px" }}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/hyundai.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" marginTop='20px'>
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
          
            <Box width="25%" height="100%" backgroundColor="white" >
              <Box marginTop="40px" backgroundColor="white">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px", height: "100px" }}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/edelweissFinancialServices.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" marginTop='20px'>
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
         
            <Box width="25%" height="100%" backgroundColor="white">
              <Box marginTop="40px" backgroundColor="white">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px", height: "100px" }}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/dreamIncubator.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" marginTop='20px'>
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
            
            <Box width="25%" height="100%" backgroundColor="white" >
              <Box marginTop="40px" backgroundColor="white">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "180px", height: "100px" }}
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/investors/beenext.webp"
                    alt=""
                  />
                </Center>
              </Box>

              <Center backgroundColor="white" marginTop='20px'>
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
            
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Investor;
