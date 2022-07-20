import React, { useState } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import styles from "./Middle.module.css";
import Slider from "react-slick";

const Sanitizer = () => {
  const [sliderRef, setSliderRef] = useState(1);
  const sliderSettings = 
    {   
        infinite: true,
        arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      
      responsive: [
        {
          breakpoint: '1024px',
          settings: {
            slidesToShow: 3,
            
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            
          }
        }
        ]
    }
      


  return (
    <div>
      <Flex>
        <Box p="4">
          <Text
            fontSize="3xl"
            fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
          >
           Sanitized & safe cars
          </Text>
        </Box>
        <Spacer />
        <Box p="4">
          <button onClick={sliderRef?.slickPrev}>
            <ChevronLeftIcon width='30px' height='30px' />
          </button>
          <button onClick={sliderRef?.slickNext}>
            <ChevronRightIcon width='30px' height='30px' />
          </button>
        </Box>
      </Flex>

      <Slider ref={setSliderRef} {...sliderSettings}height="100%" width="100%">
        <Box  height="150px" width='100%'>
          <img
            className={styles.imageShra1}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/thumbnails/Group+84.png"
            alt="aa"
          />
        </Box>
        <Box  height="150px" width='100%'>
          <img
            className={styles.imageShra1}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_01-min.jpg"
            alt="aa"
          />
        </Box>
        <Box  height="150px" width='100%'>
          <img
            className={styles.imageShra1}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_02-min.jpg"
            alt="aa"
          />
        </Box>
        <Box  height="150px" width='100%'>
          <img
            className={styles.imageShra1}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_03-min.jpg"
            alt="aa"
          />
        </Box>
        <Box  height="150px" width='100%'>
          {" "}
          <img
            className={styles.imageShra1}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/banner_sanitised_04-min.jpg"
            alt="aa"
          />
        </Box>
        
      </Slider>
    </div>
  );
};

export default Sanitizer;
