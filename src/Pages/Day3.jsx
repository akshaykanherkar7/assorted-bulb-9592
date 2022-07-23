import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Day3 = () => {
  return (
    <div style={{ width: "100%", marginBottom: "50px" }}>
      <Box width="100%" marginTop="6.5%">
        <Box p="4">
          <Text
            fontSize="3xl"
            fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
          >
            Our journey so far
          </Text>
        </Box>
        <Box
          width="100%"
          margin="auto"
          backgroundColor="white"
          borderRadius="12px"
        >
          <Grid
            width="100%"
            backgroundColor="white" 
            margin='auto'
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
          >
            <Box width="45%" backgroundColor="white">
              <Box  backgroundColor="white"  margin="50px 50px 20px 80px"
              width="55%">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "60px"  }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5qwbVtYOFG7hWx-wXCw5Y2i8FjytK2xt5tA&usqp=CAU"
                    alt=""
                  />
                </Center>
              </Box>
              <Center backgroundColor="white" marginTop="20px" width="250px">
                <Heading backgroundColor="white" lineHeight="48px" size="md">
                  1 Mn +
                </Heading>
              </Center>
              <Center backgroundColor="white" width="250px">
                <Text backgroundColor="white" size="14px">
                  Happy Revvers
                </Text>
              </Center>
            </Box>
            <Box width="45%"backgroundColor="white">
              <Box  margin="50px 50px 20px 80px" width="55%" backgroundColor="white">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </Center>
              </Box>
              <Center backgroundColor="white" width="250px">
                <Heading backgroundColor="white" lineHeight="48px" size="md">
                  22+ cities
                </Heading>
              </Center>
              <Center backgroundColor="white" width="250px">
                <Text backgroundColor="white" size="14px">
                  Across India
                </Text>
              </Center>
            </Box>

            <Box width="45%" backgroundColor="white">
              <Box  backgroundColor="white"  margin="50px 50px 20px 80px"
              width="55%">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </Center>
              </Box>
              <Center backgroundColor="white" marginTop="20px" width="250px">
                <Heading backgroundColor="white" lineHeight="48px" size="md">
                  50 Mn +
                </Heading>
              </Center>
              <Center backgroundColor="white" width="250px">
                <Text backgroundColor="white" size="14px">
                  Kms travelled
                </Text>
              </Center>
            </Box>

            <Box width="45%" backgroundColor="white">
              <Box   margin="50px 50px 20px 80px"
              width="55%" backgroundColor="white">
                <Center backgroundColor="white">
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src="data:image/png;base64,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"
                    alt=""
                  />
                </Center>
              </Box>
              <Center backgroundColor="white" marginTop="20px" width="250px">
                <Heading backgroundColor="white" lineHeight="48px" size="md">
                  4.8 / 5
                </Heading>
              </Center>
              <Center backgroundColor="white" width="250px">
                <Text backgroundColor="white" size="14px">
                  20K+ reviewers
                </Text>
              </Center>
            </Box>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Day3;
