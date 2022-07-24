import { Box, Flex , Text , Spacer  } from '@chakra-ui/react';
import React from 'react';
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'



const Fqa = () => {
  return (
    <div style={{width:'100%'}}>
    <Flex mb='1px'>
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
   
    <Link href='./Faq' isExternal>
    View All<ExternalLinkIcon mx='2px' />
  </Link>
    </Box>
  </Flex>
  <Box width='100%' bg='white' borderRadius='12px'>
  <ul><b style={{color:'#122232',fontSize:"20px",padding:"12px"}}>Is there a speed limit?</b>
  <Text style={{lineHeight:"30px",color:'rgba(18, 34, 50, 0.7)',padding:"12px"}}>Revv allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits.</Text>
  </ul>
  <ul><b style={{color:'#122232',fontSize:"20px",padding:"12px",}}>Can I extend/ cancel/ modify?</b>
  <Text  style={{lineHeight:"30px",color:'rgba(18, 34, 50, 0.7)',padding:"12px"}}>Yes, extensions are possible subject to availability & charges. Cancellations & modifications will attract nominal charges as per our policy.</Text>
  </ul>
  <ul><b style={{color:'#122232',fontSize:"20px",padding:"12px"}}>Booking criteria & documents?</b>
  <Text  style={{lineHeight:"30px",color:'rgba(18, 34, 50, 0.7)',padding:"12px"}}>Min. 21 years old, have valid original government ID (Aadhar, Passport, or PAN only) and a valid driving licence for “Light Motor Vehicles”, which is min. 1 year old at the time of starting the trip.</Text>
  </ul>
  <ul><b style={{color:'#122232',fontSize:"20px",padding:"12px"}}>Are there any restricted areas?</b>
  <Text style={{lineHeight:"30px",color:'rgba(18, 34, 50, 0.7)',padding:"15px"}}>Leh/Ladhakh, Spiti Valley & Kaza/Nako regions are not permitted to take Revv cars. Customer will be fully liable for any damages incurred to the car in that region.</Text></ul>
  </Box>
    </div>
  );
}

export default Fqa;
