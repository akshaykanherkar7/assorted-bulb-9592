import React from 'react';

import {Box,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel
    
} from '@chakra-ui/react'

import {

  
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
 
    Stack,
    Button,

    useColorModeValue,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
   


  } from '@chakra-ui/react';

  
  import { useState } from 'react';
  // import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import styled from "../style/payment.module.css";

import { useNavigate } from 'react-router-dom';
import {Link as RouterLink} from 'react-router-dom' ;

const Card = () => {
 

 
  const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    e.preventDefault();
      // alert("Order Placed");
    
      navigate("/sucess");
  }


  const [showPassword, setShowPassword] = useState(false);
  return <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box className={styled.upiDropDown}  >
        <Box> <img  height={'50px'} width='50%' src="https://www.revv.co.in/imgs/payment/web_dc_card.png" alt="" /></Box>
        <Box marginLeft={'-75%'}>  <b><h2>Debit card</h2> </b></Box>
        <AccordionIcon  color={"#0EBABA"} />
        </Box>
      </AccordionButton>
    </h2>


{/* card details  */}

{/* debit card  */}
    <AccordionPanel pb={4}>
   
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
     
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        
        <Stack spacing={4}>
        <form onSubmit={handleFormSubmit}>
       
          
          <FormControl id="email" isRequired>
            <FormLabel>Card number:</FormLabel>
            <Input type="number" placeholder='XXXX XXXX XXXX XXXX' required />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Card holder name:</FormLabel>
            <InputGroup>
              <Input type='text' placeholder='eg. Shweta Mishra'  required/>
              
            </InputGroup>
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Expiry date:</FormLabel>
                <Input type="number"  placeholder='MM/YY' required/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>CVV code:</FormLabel>
                <Input type="number" placeholder='3 digits' required />
              </FormControl>
            </Box>
          </HStack>
          <Stack spacing={10} pt={2}>
            <Button type='submit'
              loadingText="Submitting"
              size="lg"
              backgroundColor="#0EBABA"
              color={'white'}
              _hover={{
               
              }}>
                pay
           {/* <RouterLink to="/checkout">pay</RouterLink> */}
            </Button>
          </Stack>
         
         </form>
          
        </Stack>
       
      </Box>
    </Stack>


    </AccordionPanel>
  </AccordionItem>

  {/* paymet by credit card  */}

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box  className={styled.upiDropDown} flex='1' textAlign='left'>
        <Box> <img  height={'50px'} width='50%'  src="https://www.revv.co.in/imgs/payment/web_dc_card.png" alt="" /></Box>
        <Box marginLeft={'-75%'}>  <b><h2>Credit card</h2> </b></Box>
        <AccordionIcon color={"#0EBABA"}  />
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
     
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <form onSubmit={handleFormSubmit}>
          
          <FormControl id="card number" Required>
            <FormLabel>Card number:</FormLabel>
            <Input type="tel" placeholder='XXXX XXXX XXXX XXXX'  required/>
          </FormControl>
          <FormControl id="name" isRequired>
            <FormLabel>Card holder name:</FormLabel>
            <InputGroup>
              <Input type='text' placeholder='eg. Shweta Mishra'  required/>
              
            </InputGroup>
          </FormControl>
          <HStack>
            <Box>
              <FormControl id="firstName" Required>
                <FormLabel>Expiry date:</FormLabel>
                <Input type="tel"  placeholder='MM/YY' required/>
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>CVV code:</FormLabel>
                <Input type="tel" placeholder='3 digits' required />
              </FormControl>
            </Box>
          </HStack>
          <Stack spacing={10} pt={2}>
            <Button type='submit'
              loadingText="Submitting"
              size="lg"
              backgroundColor="#0EBABA"
              color={'white'}
            
              _hover={{
               backgroundColor:"#0EBABA"
              }}>
                pay
            {/* <RouterLink to="/checkout">pay</RouterLink> */}
            </Button>
          </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
    </AccordionPanel>
  </AccordionItem>

{/* PAYMET BY NET BANKING */}

<AccordionItem>
    <h2>
      <AccordionButton>
        <Box  className={styled.upiDropDown} flex='1' textAlign='left'>
        <Box> <img   height={'50px'} width='50%' src="https://www.revv.co.in/imgs/payment/web_net_banking.png" alt="" /></Box>
        <Box marginLeft={'-75%'}>  <b><h2>Net banking</h2> </b></Box>
        <AccordionIcon color={"#0EBABA"}  />
        </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
     
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <form onSubmit={handleFormSubmit}>
          
        
        <Box display={'flex'} justifyContent='space-evenly' marginBottom={'2%'}>
          <img src="https://cdn.razorpay.com/bank/HDFC.gif" alt="" />
          <img src="https://cdn.razorpay.com/bank/ICIC.gif" alt="" />
          <img src="https://cdn.razorpay.com/bank/UTIB.gif" alt="" />
          <img src="https://cdn.razorpay.com/bank/SBIN.gif" alt="" />
          <img src="https://cdn.razorpay.com/bank/KKBK.gif" alt="" />
        </Box>
         
         <Box h='40px' w='100%' margin={'auto'} border='1px solid black' color='teal' display={'flex'} justifyContent='space-between'>

          <Box color={"#0EBABA"}> Select for another bank </Box>
          <Box>      <AccordionIcon color={"#0EBABA"}  /></Box>
          
         </Box>
          <Stack spacing={10} pt={2}>
            <Button type='submit'
              loadingText="Submitting"
              size="lg"
              backgroundColor="#0EBABA"
              color={'white'}
            
              _hover={{
               backgroundColor:"#0EBABA"
              }}>
                pay
            {/* <RouterLink to="/checkout">pay</RouterLink> */}
            </Button>
          </Stack>
          </form>
        </Stack>
      </Box>
    </Stack>
    </AccordionPanel>
  </AccordionItem>


{/* PAYMET BY  Emi */}

<AccordionItem>
    <h2>
      <AccordionButton>
        <Box  className={styled.upiDropDown} flex='1' textAlign='left'>
        <Box> <img   height={'50px'} width='50%' src="https://www.revv.co.in/imgs/payment/web_emi.png" alt="" /></Box>
        <Box marginLeft={'-88%'}>  <b><h2>EMI</h2> </b></Box>
        <AccordionIcon color={"#0EBABA"}  />
        </Box>
      </AccordionButton>
    </h2>
  </AccordionItem>

  {/* amazon pay  */}
  

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box  className={styled.upiDropDown} flex='1' textAlign='left'>
        <Box> <img height={'50px'} width='50%' src="https://www.revv.co.in/imgs/payment/web_amazonpay.png" alt="" /></Box>
       
        <Box  color={"#0EBABA"} >Link Account</Box>
        </Box>
      </AccordionButton>
    </h2>
  
  </AccordionItem>

{/* paytem */}
<AccordionItem>
    <h2>
      <AccordionButton>
        <Box  className={styled.upiDropDown} flex='1' textAlign='left'>
        <Box> <img  height={'50px'} width='50%' src="https://www.revv.co.in/imgs/payment/web_paytm.png" alt="" /></Box>
       
        <Box  color={"#0EBABA"} >Link Account</Box>
        </Box>
      </AccordionButton>
    </h2>
  
  </AccordionItem>
  



  </Accordion>

{/* </form> */}
// </Box>
}

export default Card;