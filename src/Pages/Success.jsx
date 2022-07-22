import React from 'react';
import {Alert,Box,AlertIcon,AlertTitle, AlertDescription, Button,} from '@chakra-ui/react'


import { useNavigate } from 'react-router-dom';


const Success = () => {


  const navigate = useNavigate();
  
    return<Box>
       <Alert
    status='success'
    variant='subtle'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    textAlign='center'
    height='600px'
    width={'50%'}
    margin='auto'
    backgroundColor={'white'}
  >
    <AlertIcon  mr={0} h='200px' w='546' backgroundColor={'white'}/>
    <AlertTitle mt={4} mb={1}  fontSize='30px' >
    Payment successfull !
    </AlertTitle>
    <AlertDescription maxWidth='sm' fontSize={'25px'} lineHeight='30px'>
      Thanks for Paying . Our team will get back to you soon.
    </AlertDescription>
    <Button backgroundColor={'teal'}   color='white' onClick={()=> navigate("/")}>Back to home</Button>
  </Alert></Box>   
}



export default Success;