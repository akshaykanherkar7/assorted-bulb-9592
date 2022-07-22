import { Box, Container, Spacer } from '@chakra-ui/layout';
import styled from '../style/payment.module.css'
import React from 'react';
import { Button, Input,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertDescription,
    AlertTitle,
 } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Upi = () => {
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //   alert("Order Placed");
   
          navigate("/sucess");
      }
    return<Container h={'500px'} margin='auto' w='35%' boxSizing='border-box' className={styled.contan}  >
        

        <Box className={styled.header}>
        <img className={styled.imglog} src="https://cdn.razorpay.com/logos/EM3w4wVw6CAP6s_medium.png" alt="" /> 
        </Box>

        <form onSubmit={handleFormSubmit}>

        <Box className={styled.contanUpi}>
            <Box className={styled.contanUpiChildBox}>
         <h3 className={styled.UpiPaymentP}> VPA</h3>
         <Spacer className={styled.UpiPaymentspan}>You can create your VPA from any UPI app like Google Pay, PhonePe, BHIM etc.</Spacer>
         <Input className={styled.inputUpi} placeholder='Your VPA (someone@abc)' required/>
            </Box>

            {/* go to paymet sucess */}
            <Button className={styled.upipayButton} type='submit'>
                {/* <Link to='/checkout'>Pay</Link> */}
                pay

            </Button>


        </Box>
        </form>
    


        <Box className={styled.scanheading}>
            <span className={styled.span}>PAY USING QR CODE</span>
            <Box className={styled.scanBox}>
                <Button className={styled.scanBtn}>
                    <h3>Show QR Code</h3>
                    <span className={styled.spanScanBox}>Scan the QR code using your UPI App</span>
                </Button>
            </Box>
        </Box>

    </Container>
}



export default Upi;