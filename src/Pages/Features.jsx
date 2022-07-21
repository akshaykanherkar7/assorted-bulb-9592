import React, { useState } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import styles from "./Middle.module.css";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Features = () => {
  const [sliderRef, setSliderRef] = useState(1);
  const sliderSettings = 
    {
        arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      responsive: [
        {
          breakpoint: '1024px',
          settings: {
            slidesToShow: 2,
            
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            
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
            Featured
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
        <Box  height="180px" width='90%'>
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/offers/Banner-Flat+500+off+blue.png"
            alt="aa"
          />
        </Box>
        <Box height="180px" width='90%'>
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png"
            alt="aa"
          />
        </Box>
        <Box  height="180px" width='90%'>
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png"
            alt="aa"
          />
        </Box>
        <Box  height="180px" width='90%'>
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png"
            alt="aa"
          />
        </Box>
        <Box height="180px" width='90%'>
          {" "}
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_01-min.jpg"
            alt="aa"
          />
        </Box>
        <Box  height="180px"width='90%'>
          {" "}
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_02-min.jpg"
            alt="aa"
          />
        </Box>
        <Box height="180px" width='90%'>
          {" "}
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_03-min.jpg"
            alt="aa"
          />
        </Box>
        <Box  height="180px" width='90%'>
          {" "}
          <img
            className={styles.imageShra}
            src="https://revvselfdrivecar.s3-us-west-2.amazonaws.com/staging_images/subscriptions_banners_04-min.jpg"
            alt="aa"
          />
        </Box>
      </Slider>
    </div>
  );
};

export default Features;
