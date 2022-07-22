import React from 'react'
import {Box,Flex,Text} from '@chakra-ui/react'

const Serviceable = () => {
  return (
    <div style={{width:'100%',height:'400px',border:'1px solid black',backgroundColor:'#2a2b36'}}>
    <Box  margin='auto' width='90%' height='90%' marginTop='6%' backgroundColor='#2a2b36' >
    <Box p="4" backgroundColor='#2a2b36'>
            
              <Text 
                fontSize="3xl"
                fontFamily="Poppins"
                color="white"
                fontWeight="600"
                backgroundColor='#2a2b36'
              >
              Serviceable cities
              </Text>
         
            </Box>
            <Flex width='100%' backgroundColor='#2a2b36'>
            <Box width='33%' backgroundColor='#2a2b36'>
                <Text fontFamily="Poppins"
                color="rgba(152, 166, 179, 0.81)"
                fontWeight="600"
                backgroundColor='#2a2b36'>
                Self Drive Car Rental in Bangalore
                </Text>
                <Text fontFamily="Poppins"
                color="rgba(152, 166, 179, 0.81)"
                fontWeight="600"
                lineHeight='40px'
                backgroundColor='#2a2b36'>
                Car Rental in Bangalore
                Car Rental in Hyderabad
                Car Rental in Mumbai
                Car Rental in Delhi-NCR
                Car Rental in Chennai
                </Text>
            </Box>
            <Box width='33%'backgroundColor='#2a2b36' >
            <Text fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
            backgroundColor='#2a2b36'>
            Self Drive Car Rental in Bangalore
            </Text>
            <Text fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
            lineHeight='40px'
            backgroundColor='#2a2b36'>
            Car Rental in Bangalore
            Car Rental in Hyderabad
            Car Rental in Mumbai
            Car Rental in Delhi-NCR
            Car Rental in Chennai
            </Text>
            </Box>
            <Box width='33%' backgroundColor='#2a2b36'>
            <Text fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
            backgroundColor='#2a2b36'>
            Self Drive Car Rental in Bangalore
            </Text>
            <Text fontFamily="Poppins"
            color="rgba(152, 166, 179, 0.81)"
            fontWeight="600"
            lineHeight='40px'
            backgroundColor='#2a2b36'>
            Car Rental in Bangalore
            Car Rental in Hyderabad
            Car Rental in Mumbai
            Car Rental in Delhi-NCR
            Car Rental in Chennai
            </Text>
            </Box>
            </Flex>
    </Box>
    </div>
  )
}

export default Serviceable