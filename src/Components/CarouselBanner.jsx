import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const CarouselBanner = () => {

    const [slider, setSlider] = React.useState(null);       //<Slider | null>

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    {src : "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp"},
    {src : "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp"},
    {src : "https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp"},
  ];

  return (
    
      <Box
        position={'relative'}
        height={'600px'}
        width={'full'}
        overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
            aria-label="left-arrow"
            colorScheme="#fff"
            borderRadius="full"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}>
            <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
            aria-label="right-arrow"
            colorScheme="#fff"
            borderRadius="full"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}>
            <BiRightArrowAlt />
        </IconButton>
        {/* Slider */}
        <Slider style={{backgroundColor:"teal"}} {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((url, index) => (
            <Box 
                key={index}
                height={'600px'}
                width={'100%'}
                position="relative"
                backgroundPosition="650px"
                backgroundRepeat="no-repeat"
                backgroundSize="600px"
                backgroundImage={url.src}
            />
            ))}
        </Slider>
      </Box>
    
  )
}

export default CarouselBanner;