import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Download = () => {
  return (
    <div style={{ width: "100%", height: "365px",backgroundColor:"white" }}>
      <Box
        width="100%"
        height="90%"
       
        margin="auto"
        marginTop="6.5%"
        marginBottom='80px'
        backgroundColor='white'
      >
        <Flex width="100%" height="100%" backgroundColor='white'>
          <Box  width="50%" height="100%" backgroundColor='white'>
          <Box p="4" backgroundColor='white'>
            <Center backgroundColor='white'>
              <Text backgroundColor='white'
                fontSize="3xl"
                fontFamily="Poppins"
                color="rgba(152, 166, 179, 0.81)"
                fontWeight="600"
                marginTop='150px'>
                Download the Revv app
              </Text>
            </Center>
            </Box>
            <Flex  margin='10px 0px 30px 0px'  backgroundColor='white'>
            <Box margin='0px 80px 0px 60px' backgroundColor='white'>
                <img style={{width:"196px",height:"62px",backgroundColor:"white"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/app_store.webp" alt=""/>
            </Box>
            <Box backgroundColor='white'>
                <img style={{width:"196px",height:"62px"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/google_play.webp" alt=""/>
            </Box>
            </Flex>
          </Box>
          <Box  width="50%" height="80%" backgroundColor='white'>
          <Box margin='60px 0px 0px 30px'backgroundColor='white' >
                <img style={{width:"525px",height:"300px"}} src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/downloadApp/xapp_preview_desk.png.pagespeed.ic.SlqPBPQ6An.png" alt=""/>
            </Box>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Download;
