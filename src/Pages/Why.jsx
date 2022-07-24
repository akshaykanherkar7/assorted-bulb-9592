import React, { useState } from "react";
import { Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import styles from "./Middle.module.css";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Why = () => {
  const [sliderRef, setSliderRef] = useState(1);
  const sliderSettings = {
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: "1024px",
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div >
      <Flex>
        <Box p="4">
          <Text
            fontSize="3xl"
            fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
          >
          Why Revv?
          </Text>
        </Box>
        <Spacer />
        <Box p="4">
          <button onClick={sliderRef?.slickPrev}>
            <ChevronLeftIcon width="30px" height="30px" />
          </button>
          <button onClick={sliderRef?.slickNext}>
            <ChevronRightIcon width="30px" height="30px" />
          </button>
        </Box>
      </Flex>

      <Slider ref={setSliderRef} {...sliderSettings} height="100%" width="100%" borderRadius='12px' overFlow='hidden'>
    
      
      <Box
       
        
         
          marginRight='20px'
          height="105px"
          width="100%"
        >
          <Flex  borderRadius='12px' height={'100%'} width='95%' >
            <Box width="30%" bg='white' height='100%' borderRadius='12px 0px 0px 12px'  >
              <img
                className={styles.imageShra12}
                src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/home.png"
                alt="aa"
              />
            </Box>

            <Box width="90%" bg='white' overflow='hidden' height='100%'  borderRadius='0px 12px 12px 0px' >
              <Heading bg='white'
                as="h4"
                size="3xl"
                width='80%'
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px"
               
              >
                Home delivery & return
              </Heading>
              <Text 
                width="80%"
                lineHeight="1.43"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px"
              >
                On-time doorstep service, at your preferred location and time
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box   height="105px" width="90%" borderRadius='12px' marginRight='20px'>
          <Flex height='100%' width='95%' borderRadius='12px'>
            <Box  borderRadius='12px 0px 0px 12px' width="30%" bg='white' height='100%'>
              <img
                className={styles.imageShra12}
                src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/price.png"
                alt="aa"
              />
            </Box>

            <Box width="70% " bg='white' height='100%' borderRadius='0px 12px 12px 0px'> 
              <Heading bg='white'
                as="h4"
                size="3xl"
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px"
              >
                Flexible pricing plans
              </Heading>
              <Text bg='white'
                width="80%"
                lineHeight="1.43"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px"
              >
                Choose ‘Unlimited kms’ or ‘with fuel’ plans
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box  height="105px" width="90%" borderRadius='12px' marginRight='20px'>
          <Flex width='95%' bg="white" borderRadius='12px' height='100%'>
            <Box  borderRadius='12px 0px 0px 12px' height='100%' width="30%" bg='white'>
              <img
                className={styles.imageShra12}
                src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/maintained.png"
                alt="aa"
              />
            </Box>

            <Box width="70%" bg='white' height='100%' borderRadius='0px 12px 12px 0px'>
              <Heading
                as="h4" bg='white'
                size="3xl"
                fontWeight="600"
                lineHeight="24px"
                fontFamily="Poppins"
                margin="8px 0px 8px 8px"
                fontSize="18px"
              >
                Well maintained cars
              </Heading>
              <Text bg='white'
                width="80%"
                lineHeight="1.43"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px"
              >
                Regular service & maintenance; Inspected before each trip
              </Text>
            </Box>
          </Flex>
        </Box>
        <Box  height="105px" width="90%" borderRadius='12px' marginRight='20px'>
          <Flex width='95%' bg="white" borderRadius='12px'height='100%'>
            <Box  borderRadius='12px 0px 0px 12px' width="30%" bg='white' height='100%'> 
              <img
                className={styles.imageShra12}
                src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/whyRevv/contact.png"
                alt="aa"
              />
            </Box>

            <Box width="70%" bg='white' height='100%' borderRadius='0px 12px 12px 0px'>
              <Heading bg='white'
                as="h4"
                size="3xl"
                fontWeight="600"
                lineHeight="24px"
                fontFamily="Poppins"
                margin="8px 0px 8px 8px"
                fontSize="18px"
              >
                Flexible pricing plans
              </Heading>
              <Text bg='white'
                width="80%"
                lineHeight="1.43"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px"
              >
                Choose ‘Unlimited kms’ or ‘with fuel’ plans
              </Text>
            </Box>
          </Flex>
        </Box>
      
        
      </Slider>
    </div>
  );
};

export default Why;
