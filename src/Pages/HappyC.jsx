import React, { useState } from "react";
import { Box, SimpleGrid,Heading, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import styles from "./Middle.module.css";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const HappyC = () => {
  const [sliderRef, setSliderRef] = useState(1);
  const sliderSettings = 
    {
        arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      responsive: [
        {
          breakpoint: '1024px',
          settings: {
            slidesToShow: 4,
            
            
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            
          }
        }
        ]
    }
      


  return (
    <div>
      <Flex>
        <Box p="4" >
          <Text
          overflow='scroll'
            fontSize="3xl"
            fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
          >
            Happy customers
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

      <Slider ref={setSliderRef} {...sliderSettings}height="100%" width="100%" display='flex' gap='20px' borderRadius='12px'>
        <Box  height="325px" width='90%'borderRadius='12px'  >
        <Box  height="325px" width='90%' borderRadius='12px'>
        <Box width="100%" bg='white'borderRadius='12px' height='100%' boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;' >
              <Heading overflow={"hidden"} bg='white'
                as='h2' size='2xl'
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px"
                p='2'
              >
                Prateek Srivastava
              </Heading>
              <Text  overflow='scroll' bg='white'
                width="80%"
                lineHeight="2"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px"  ml='2'
              >
                Nice service with on time pickup and delivery. Good customer support with friendly and very helpful staff. 
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius='12px'height="325px" width='90%' >
        <Box borderRadius='12px'  height="325px" width='90%' >
        <Box borderRadius='12px' width="100%" bg='white' height='100%' boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'>
              <Heading overflow={"hidden"} bg='white'
              justifyContent='center'
               as='h2' size='2xl'
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px" p='2'
              >
                Roshan Raval
              </Heading>
              <Text bg='white'
              overflow={"hidden"}
                width="80%"
                lineHeight="2"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px" ml='2'
              >
                The car delivery was done on time and we were satisfied with the entire booking entire experience. We also got instant refund and the overall service was Revv
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius='12px'  height="325px" width='90%' >
        <Box borderRadius='12px' height="325px" width='90%' >
        <Box borderRadius='12px' width="100%" bg='white' height='100%' boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'>
              <Heading overflow={"hidden"} bg='white'
               as='h2' size='2xl'
                fontWeight="600"
                lineHeight="24px"
                margin="12px 12px 12px 12px"
                fontFamily="Poppins"
                fontSize="18px" p='2'
              >
                Sanjib Sarkar
              </Heading>
              <Text overflow={"hidden"} bg='white'
                width="80%"
                lineHeight="2"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px" ml='2'
              >
                Very good service. I could not expect that I can get a car at 4.30 in the morning. Even they have paid for fuel which I filled more. Very transparent ❤️
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius='12px'  height="325px" width='90%' >
        <Box borderRadius='12px' height="325px" width='90%' >
        <Box borderRadius='12px' width="100%" bg='white' height='100%' boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;' >
              <Heading overflow={"hidden"} bg='white'
               as='h2' size='2xl'
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px" p='2'
              >
                Arijit Sarkar
              </Heading>
              <Text overflow={"hidden"} bg='white'
                width="80%"
                lineHeight="2"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px" ml='2'
              >
                Sanitized car was provided. The delivery and pickup boy was very polite and helpful. This company is honest with their customers
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius='12px' height="325px" width='90%' >
        <Box borderRadius='12px'  height="325px" width='90%' >
        <Box borderRadius='12px' width="100%" bg='white' height='100%' boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;' >
              <Heading overflow={"hidden"} bg='white'
               as='h2' size='2xl'
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px" p='2'
              >
               Vijay S
              </Heading>
              <Text overflow={"hidden"} bg='white'
                width="80%"
                lineHeight="2"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px" ml='2'
              > 
               Booked for 4 days for a family trip. I strongly recommend Revv. Looking forward to using Revv car again
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius='12px'  height="325px"width='90%' >
        <Box borderRadius='12px' height="325px" width='90%' >
        <Box borderRadius='12px' width="100%" bg='white' height='100%' boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'>
              <Heading overflow={"hidden"} bg='white'
               as='h2' size='2xl'
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px" p='2'
              >
                Rohit Ray
              </Heading>
              <Text overflow={"hidden"} bg='white'
                width="80%"
                lineHeight="2"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px" ml='2'
              >
                The app is as user friendly as the policies. The process is as easy as nursury rhyme. Nicely maintaied cars
              </Text>
            </Box>
          </Box>
        </Box>
        <Box borderRadius='12px' height="325px" width='90%' >
        <Box borderRadius='12px'  height="325px" width='90%' >
        <Box borderRadius='12px' width="100%" bg='white' height='100%'  boxShadow='rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;'>
              <Heading overflow={"hidden"} bg='white'
               as='h2' size='2xl'
                fontWeight="600"
                lineHeight="24px"
                margin="8px 0px 8px 8px"
                fontFamily="Poppins"
                fontSize="18px" p='2'
              >
               Sanjeev Rawat
              </Heading>
              <Text overflow={"hidden"} bg='white'
                width="80%"
                lineHeight="2"
                margin="4px 0px 8px 8px"
                color="rgba(18, 34, 50, 0.7)"
                fontFamily="Poppins"
                fontSize="16px" ml='2'
              >
                Booked one during new year time, for an outstation trip. Were really happy with the clean, sanitized, mileage friendly, and well maintained car. 
              </Text>
            </Box>
          </Box>
        </Box>
        
        
      </Slider>
    </div>
  );
};

export default HappyC;
