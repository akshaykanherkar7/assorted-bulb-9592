import React from 'react'
// import { Fade,  Box } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    // AccordionIcon,
    Box,
    Link,
    UnorderedList,
    ListItem,
    Spacer,
    Flex,
    Text,
    Center,Image
  } from '@chakra-ui/react'
  import styles from "./Faqsfooter.module.css";
// import Faqsfooter from './Faqsfooter'
// import { useDisclosure } from '@chakra-ui/react'
// import Serviceablecities from './Serviceablecities'

const Faqs = () => {
   console.log("hello")
    
  return (
    <Box  pl="20px" pr="20px">
        <Flex gap="10px">
            <Box w='300px'  >
            <Box pt="10px" mb="3px" fontSize='xs' bg="#f1f1f1" h="40px"  ><Link href="#data1"><Center>About Revv</Center></Link></Box>
            <Link href="#about"><Box bg="#f1f1f1" pt="10px" mb="3px" fontSize='xs' h="40px"  ><Text><Center>Your Booking</Center></Text></Box></Link>
                <Box bg="#f1f1f1" pt="10px" mb="3px" h="40px" fontSize='xs'><Link href="#data2"><Center>Payment & Refunds</Center></Link></Box>
                <Box bg="#f1f1f1"pt="10px" h="40px" fontSize='xs' ><Link href="#data3"><Center>Your Trip</Center></Link></Box>
                
                </Box>
            
            <Box w="1200px">
             {/* heading 1 */}

             <Box id="data1">ABOUT REVV</Box>   
             <Flex>
              <Spacer/>
              <Box color="#0ebfc7"><b>EXPAND ALL</b></Box>
             </Flex>
              <Box>
         
              <Accordion  allowMultiple>
                 {/* 1 */}
                 <AccordionItem mb="10px" bg="#f1f1f1">               
                  <h2 bg="#f1f1f1" >
                     <AccordionButton bg="#f1f1f1" border="gray" h="40px">
                       <Box fontSize='sm' w="800px" bg="#f1f1f1" flex='1' textAlign='left'>What is Revv?</Box>
                       {/* <AccordionIcon /> */}
                     </AccordionButton>
                  </h2>
                 <AccordionPanel bg="#f1f1f1" boxShadow='base' ml="10px" mr="10px" fontSize='12px' color='#7f868e'>Revv is a self drive car rental service that provides you with all the privacy, fun and convenience of your own car, without the hassles of owning and maintaining one. We drop and pick-up cars from your doorstep, so that you can spend time on the more important thing - your drive! The doorstep drop and pick-up of cars is our standard way of serving you, and is available throughout the areas served by us.</AccordionPanel>
                 </AccordionItem>
                 {/* 2 */}
                 <AccordionItem mb="10px"  bg="#f1f1f1">
                   <h2 bg="#f1f1f1">
                     <AccordionButton bg="#f1f1f1" border="gray" h="40px">
                       <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>Am I eligible to use Revv's services?</Box>
                       {/* <AccordionIcon /> */}
                     </AccordionButton>
                   </h2>
                   <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base' color='#7f868e'>To avail Revv's services, you must be at least 21 years old, and your driving license for "Light Motor Vehicles" must be at least 1 year old (at the time of starting the trip). Driving license printed on A4 sheet of paper (original or otherwise), driving license on Digilocker or M-Parivaahan app and commercial driving licenses will not be accepted.</AccordionPanel>
                 </AccordionItem>
                 {/* 3 */}
  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box bg="#f1f1f1" fontSize='sm' flex='1' textAlign='left'>
        Which are the areas where I can avail Revv's services?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box> We are currently serving in Bangalore, Hyderabad, Chennai, Mumbai, Pune, Delhi NCR, Chandigarh, Jaipur, Visakhapatnam, Mysore, Coimbatore, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati , Vijayawada, Bhubaneswar, Nagpur & Vadodara.</Box> <br/>
    <Box> Delhi NCR : We are covering most parts of Delhi & Gurgaon and some parts of Noida & Ghaziabad.</Box> <br/>
    <Box>Hyderabad, Bangalore, Mumbai, Pune, Jaipur, Chennai, Visakhapatnam, Mangalore, Kolkata, Kochi, Ahmedabad, Trivandrum, Surat, Tirupati, Vijayawada, Bhubaneswar, Nagpur & Vadodara : We serve the main city and the airport area.</Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box bg="#f1f1f1"  fontSize='sm'flex='1' textAlign='left'>
        Is there a "Kilometres limit" to how much I can drive?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box> This depends on the pricing plan that you select. If you go for the “Unlimited kms” pricing plans (available only without fuel, and only for bookings whose duration is more than 24 hours), there is absolutely no limit to the kilometres that you can drive, and you have complete flexibility of driving the car as much as you want. Revv it up! Other pricing plans have a "Kilometres limit", which varies based on the plan selected. You can still drive beyond the kilometres limit, but the additional kilometres clocked will attract an additional charge.</Box>
    </AccordionPanel>
  </AccordionItem>
  

  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
        Are there restrictions on where I can travel?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>All of our cars are equipped with an All India Tourist Permit, so you are free to drive anywhere in the country. All India Tourist Permit means that the car is legally permitted to ply in any state in the country, after paying the inter-state taxes at the state borders. However, we do not permit taking Revv vehicles to Leh/Ladakh region, Kaza/Nako region and spiti valley. We also advise you to avoid bad terrains (especially in non- SUV cars) and areas affected by civil unrest.</Box> <br/>
    <box>Please note: Interstate taxes at the state borders are to be paid and borne by the customer. Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred during your trip will be billed to you in your invoice.</box>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
        Do I have to bring the car back to the same location?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base' color='#7f868e'>
    <Box>No, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges.</Box>
    </AccordionPanel>
  </AccordionItem>
  

  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box bg="#f1f1f1" flex='1' textAlign='left' fontSize='sm'>
        Can I book a one-way trip?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>Yes, you can choose different delivery and pickup locations within the same city, without any extra cost other than the standard delivery/pickup charges. However, this option needs to be availed while creating of the booking, before it is confirmed. You may also modify the booking later, however, it will then attract applicable modification charges.</Box>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
        Can I book for any duration of time?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>For rentals, the minimum booking duration is 10 hours, and the maximum is upto 90 days.</Box><br/>
    <Box>If you need a car for longer period of time, please try Revv subscriptions, wherein you can subscribe to a car for minimum of 1 month and maximum of 36 months. Check out our</Box>
    <Box> <Link color='blue' href='#'>subscription</Link></Box>
    <Box>page for more details.</Box>
    </AccordionPanel>
  </AccordionItem>
  

  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
        What is Peak Season? Are the prices different during Peak Season?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>Peak season refers to festive periods of very high demand. Our hourly rental tariffs are different for weekdays (Mon-Fri), weekends (Sat-Sun) and the Peak Season. The dates and prices for the Peak Season are dynamically decided based on the demand.</Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
        What kind of cars can I choose from?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>We have a curated selection of cars, which includes block-buster models across segments such as SUVs, ultra-luxury cars, hatchbacks and sedans. We are constantly increasing our portfolio; so keep a close watch for your favourite car, just in case we don’t have it already.</Box>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box  fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
        In the event of an accident or damage to the vehicle, what is my maximum liability?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base' color='#7f868e'>
    <Box>In the event of damages, your liability is limited to a maximum of Rs 10000. You will need to pay Damage Fee equivalent to the repair cost (as estimated by an authorized dealership) and downtime losses, upto a maximum of Rs 10000. This is independent of the nature and terms of the insurance cover that Revv has on the cars.</Box><br/>
    <Box>Please note that the maximum liability policy is intended to benefit and protect the responsible user. In situations of irresponsible or unsafe or negligent usage, there could be discretionary exceptions to this policy, whereby the user could be liable for all damages irrespective of whether or not Revv is able to claim insurance in such cases. Examples of such situation include, but are not limited to:</Box><br/>
    <UnorderedList>
      <ListItem>When the User is not in compliance with the laws and/or with terms of the Revv User Agreement</ListItem>
      <ListItem>When the User is found to be under the influence of alcohol/narcotics while driving</ListItem>
      <ListItem>When the User is over-speeding (i.e. above prescribed speed limit of road or 125 Kms/Hr, whichever is lower)</ListItem>
      <ListItem>When the User is in violation of traffic rules or of the Motor Vehicles Act (for example, if the User has not paid the inter-state tax while crossing a state border)</ListItem>
      
  <ListItem>When the person driving the vehicle at the time of the incident is found to be different than the one who made the booking</ListItem>
  <ListItem>When the vehicle workshop and/or insurance company deem the damage to be consequential in nature (this will be clearly stated in the accident report). Consequential damage occurs when the User continues driving the vehicle even when it is performing abnormally</ListItem>
  <ListItem>When the number of people in the car at the time of the incident exceed the standard seating capacity of the car</ListItem>
  <ListItem>When the incident happened in a state for which the user had failed to pay the inter-state tax while entering the state</ListItem>
  <ListItem>When there is misrepresentation of information in the driving license and ID proof details shared by the user</ListItem>
  <ListItem>Where there is clear evidence of extremely rash and negligent driving on the user’s part</ListItem>  
    </UnorderedList>
    <br/>

    <Box>
    In cases where the estimated damage charges exceed the security deposit, we will request the user to pay the same at the time of returning the car. In cases of non-payment, Revv reserves the right of legal action, reporting to credit bureau and reporting to other authorities or persons, irrespective of their direct relevance to the case   
    </Box><br/>
    <Box>
    In cases of accident, fare for the unused hours will not be refunded.
    </Box><br/>
    <Box>Revv typically avoids charging for very minor damages (e.g., minor scratches and dents), and covers the vast majority of damage incidents under the maximum liability policy.</Box><br></br>
    <Box>In cases of collision or User failure, towing and impounding charges will be paid by the User. In cases of vehicle failure, towing and impounding charges will be paid by us.</Box> <br></br>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box  fontSize='sm'bg="#f1f1f1" flex='1' textAlign='left'>
        Is Revv 24/7?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>Yes, we are accessible 24x7. But as of now, we don’t allow bookings starting or ending between 12 midnight and 4 am.</Box>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1" border="gray" h="40px">
        <Box bg="#f1f1f1" fontSize='sm' flex='1' textAlign='left'>
        Can I take a pet along with me?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>While we love pets, some of our customers might be allergic to them so we can’t allow pets in cars.</Box>
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem mb="10px" bg="#f1f1f1">
    <h2>
      <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
        <Box bg="#f1f1f1" flex='1' textAlign='left' fontSize='sm'>
        Is there any speed limit?
        </Box>
        {/* <AccordionIcon /> */}
      </AccordionButton>
    </h2>
    <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
    <Box>125 Kms/Hr is the speed limit. Exceeding it will attract a penalty for over-speeding. In some states (e.g., Karnataka, Maharashtra, Delhi-NCR), some cars might be equipped with speed governors, which will automatically restrict the speed to 80Kms/Hr. This is as per government directives.</Box>
    </AccordionPanel>
  </AccordionItem>
  
              </Accordion>
{/* day3-part1 */}

<Box id="about">
  

<Box id="about" mt="20px">YOUR BOOKINGS</Box>   
<Flex><Spacer/>
        <Box color="#0ebfc7">
            <b>

        EXPAND ALL
            </b>
        </Box>
        </Flex>
        <Accordion  allowMultiple>


<AccordionItem mb="10px" bg="#f1f1f1">
  <h2 bg="#f1f1f1">
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
      How do I make a booking?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  

  Booking with us is quick and easy. You can make a booking through our app (android or iOS), website or by giving us a call at +91-9250035555. Just select your city, date and time of your trip, key in your location and choose the type of car you want. Then enter your payment details, confirm payment and you are ready to go!

  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2 bg="#f1f1f1">
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
      What if I need to modify or cancel my booking?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  

  You can modify or cancel your booking through either our app, website or by calling us. Our ability to modify/cancel the booking and the relevant charges depend upon your time of informing us and availability of cars. Please refer to our Fee policy for more details on the allowable modifications and applicable charges.

  </AccordionPanel>
</AccordionItem>

<AccordionItem mb="10px" bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box bg="#f1f1f1" fontSize='sm' flex='1' textAlign='left'>
      What happens if I return the car late?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box> We understand that sometimes there can be last-minute changes in your plans, and we will try our best to accommodate them. But in situations where it can cause trouble to the next user (ie, the person whose booking starts after your ends), we cannot allow late returns. Please refer to our Fee policy for more details on late fees and extension charges</Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem mb="10px" bg="#f1f1f1" >
  <h2>
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box bg="#f1f1f1"  fontSize='sm'flex='1' textAlign='left'>
      If I return the car before the scheduled end time of my booking, do I get any refunds?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base' color='#7f868e'>
  <Box> In case of shortening, we can try arranging an earlier pickup of the car, if you inform us at least 3 hours before your preferred pick-up time. However, no charges or refunds will be applicable on the base fare for the original trip.</Box>
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
      What all is included in my booking?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>Our prices include the rental charge, insurance and GST. You have the option of “with fuel” and “without fuel” pricing. In “with fuel” pricing, prices include fuel. In “without fuel” pricing, prices exclude fuel.</Box> <br/>
  <Box>Our prices do not include tolls, inter-state taxes and parking. No hidden charges!</Box>
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px" bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
      Is fuel included in my booking?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>For “with fuel” pricing: Prices include fuel. If you need to refuel during your journey, we will reimburse the cost. Just show the fuel bills to our delivery executive at the time of returning the car, and allow him to take a photograph of them. Please do NOT hand-over the original bill to the delivery executive, we will not be responsible for loss of bills handed over to the delivery executive. Please note that:</Box>
  <UnorderedList>
      <ListItem>Fuel bills need to be shown to our delivery executive at the time of return, we will NOT be able to reimburse fuel bills shared with us later.</ListItem>
      <ListItem>The fuel expense needs to reconcile reasonably with the distance travelled.</ListItem>
      <ListItem> The fuel expense needs to reconcile reasonably with the standard fuel efficiency of the car. For the purpose of this reconciliation and for the benefit of the user, we assume a lower mileage than what is defined by ARAI (Automotive Research Association of India).</ListItem>
      <ListItem>The date on the fuel bill should fall within the booking period.</ListItem>
      <ListItem>Hand-written fuel bills will be considered invalid.</ListItem>
  </UnorderedList>
  <Box>For “without fuel” pricing: Prices exclude fuel. In case you are returning the car at a lower fuel level than what was received, we will charge a flat Rs 500 refuelling service charge + actual fuel cost to get the tank to the same level as what was received.</Box>
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px" bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' textAlign='left' fontSize='sm'>
      Can I club two discount vouchers?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>You can only use one offer/promo per booking.</Box>
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px" bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
      Can I create a booking with Revv if I have international DL?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>A person who is having an International DL, can definitely create a booking with Revv under the condition that He/She must have an IDP (International Driving Permit) alongwith International DL and passport.</Box>
  </AccordionPanel>
</AccordionItem>




</Accordion>
</Box>


{/* day3 -part2*/}

<Box id="data2">
  

<Box id="about" mt="20px">PAYMENTS & REFUNDS</Box>   
<Flex><Spacer/>
        <Box color="#0ebfc7">
            <b>

        EXPAND ALL
            </b>
        </Box>
        </Flex>
        <Accordion  allowMultiple>


<AccordionItem mb="10px" bg="#f1f1f1">
  <h2 bg="#f1f1f1">
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
      What modes of payments are accepted?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  

  We accept payments by credit cards, debit cards, net-banking, UPI and popular wallets. Payments need to be made in advance through our website or mobile app.

  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2 bg="#f1f1f1">
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
      Do I get any reimbursement for the fuel I fill in my Revv car?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  

  <Box>For “with fuel” pricing: If you need to refuel during your journey, we will reimburse the cost. Just show the fuel bills to our delivery executive at the time of returning the car, and allow him to take a photograph of them. Please do NOT hand-over the original bill to the delivery executive, we will not be responsible for loss of bills handed over to the delivery executive. Please note that:</Box><br/>
  <UnorderedList>
    <ListItem>For “with fuel” pricing: If you need to refuel during your journey, we will reimburse the cost. Just show the fuel bills to our delivery executive at the time of returning the car, and allow him to take a photograph of them. Please do NOT hand-over the original bill to the delivery executive, we will not be responsible for loss of bills handed over to the delivery executive. Please note that:</ListItem>
    <ListItem>The fuel expense needs to reconcile reasonably with the distance travelled.</ListItem>
    <ListItem>The fuel expense needs to reconcile reasonably with the standard fuel efficiency of the car. For the purpose of this reconciliation and for the benefit of the user, we assume a lower mileage than what is defined by ARAI (Automotive Research Association of India).</ListItem>
    <ListItem>The date on the fuel bill should fall within the booking period.</ListItem>
    <ListItem>Hand-written fuel bills will be considered invalid.</ListItem>
  </UnorderedList>
  <Box>For “without fuel” pricing: We give you a full tank, and we need the same back from you. Hence there is no need for any fuel reimbursements. In the rare instances where we give you less-than- full tank fuel, and you return us more fuel than what you got from us, we will reimburse the difference.</Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem mb="10px" bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box bg="#f1f1f1" fontSize='sm' flex='1' textAlign='left'>
      Who pays for parking and tolls/inter-state entry taxes?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>These expenses depend on your usage, hence you need to pay for them.</Box><br/>
  <Box>Our cars are equipped with Fast tag devices for your convenience. The toll charges incurred during your trip will be billed to you in your invoice.</Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem mb="10px" bg="#f1f1f1" >
  <h2>
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box bg="#f1f1f1"  fontSize='sm'flex='1' textAlign='left'>
      Do I need to pay the fines incurred during my booking, due to parking/traffic violations?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>Yes.</Box>
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
      How much time does it take to get my refund back?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>All refunds are typically made within 10 days of completing the bookings. However, in some cases, there might be some procedural delays from the banks. Please do let us know in case your refund has not been credited to your account within 10 days and we will make sure we do everything we can to expedite it.</Box> <br/>
  
  </AccordionPanel>
</AccordionItem>


</Accordion>
</Box>


{/* day3-part-3 */}

<Box id="data3">
  

<Box id="about" mt="20px">YOUR TRIP</Box>   
<Flex><Spacer/>
        <Box color="#0ebfc7">
            <b>

        EXPAND ALL
            </b>
        </Box>
        </Flex>
        <Accordion  allowMultiple>


<AccordionItem mb="10px" bg="#f1f1f1">
  <h2 bg="#f1f1f1">
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
      What documents do I need to take the delivery of my Revv car?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  

  We accept payments by credit cards, debit cards, net-banking, UPI and popular wallets. Payments need to be made in advance through our website or mobile app.

  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2 bg="#f1f1f1">
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box fontSize='sm' bg="#f1f1f1" flex='1' textAlign='left'>
      How do I check-in for my booking?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  

  <Box>Our delivery executive will deliver the car to your doorstep. Before he hands- over the car to you, he will share with you a pre-filled checklist that summarises the car’s condition at that time. Please confirm the details in the checklist, sign it and you are good to go. In case any information in the checklist is not correct, please notify the delivery executive or call us.</Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem mb="10px" bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box bg="#f1f1f1" fontSize='sm' flex='1' textAlign='left'>
      What do I do if the vehicle breaks down or if I meet with an accident?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>In such cases, please notify us Revv immediately (by calling) and we will guide you through the entire process. We will coordinate with the road-side assistance and insurance. Unless unavoidable, please do not leave the scene of the accident until proper support has arrived. You may be required to file/sign formality documents associated with the accident.</Box>
  </AccordionPanel>
</AccordionItem>

<AccordionItem mb="10px" bg="#f1f1f1" >
  <h2>
    <AccordionButton bg="#f1f1f1"  border="gray" h="40px">
      <Box bg="#f1f1f1"  fontSize='sm'flex='1' textAlign='left'>
      How do I check-out from my booking?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>On your return, please check-out from your booking using our app. You also have the option of calling us to notify. Even if you forget to notify us, you will be charged only till the actual end time of your booking.</Box>
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
      What are the requirements when I drive across a State border?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>Each State has different procedures and regulations. Most States will require a commercially registered vehicle to stop at the border RTO station to pay the relevant tolls/taxes. All Revv cars are equipped with original copies of the RC Card, Insurance Note, Self-Drive License, and the All India Permit, which will help you get through this conveniently. For many states, the state entry tax can be paid online as well.</Box> <br/>
  
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
      What is the amount that I must pay at a State border crossing?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>Prices vary depending on State and vehicle type (larger vehicles have higher tolls/taxes).</Box> <br/>
  
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
      What do I do if a border officer at the State RTO crossing is causing a problem?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>This should not occur since all of Revv's vehicles are equipped with all the necessary documents. In the event that an incident arises, please give us a call, and we will do our best to help you get back to driving</Box> <br/>
  
  </AccordionPanel>
</AccordionItem>


<AccordionItem mb="10px"  bg="#f1f1f1">
  <h2>
    <AccordionButton bg="#f1f1f1" border="gray" h="40px">
      <Box bg="#f1f1f1" flex='1' fontSize='sm' textAlign='left'>
      What if I leave something in Revv's car?
      </Box>
      {/* <AccordionIcon /> */}
    </AccordionButton>
  </h2>
  <AccordionPanel ml="10px" mr="10px" fontSize='12px' bg="#f1f1f1" boxShadow='base'  color='#7f868e'>
  <Box>Well, we will do our best to help you find your belongings if you inform us soon enough. But as you can imagine, we cannot guarantee it since finding it back is not fully in our control. So, please check the car thoroughly before handing it back to us.</Box> <br/>
  
  </AccordionPanel>
</AccordionItem>


</Accordion>
</Box>


</Box>  
</Box>

               
</Flex>
{/* <Serviceablecities /> */}
{/* <Faqsfooter/> */}

<Box className={styles.faqcontainer}>
    <Box className={styles.Logobox}>
       <Image src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="pic"/> 
       <Flex className={styles.bb}>
        <Link href="https://www.facebook.com/revvindia/">
            <Image style={{marginLeft:"15px",width:"35px", height:"35px", borderRadius:"50%"}}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEVA4ND///9Z49Qt385F4dFo5djh+fbU9/Q24M9S49Sf7eTJ9fD1/fza+fW/8+6n7uaC6d7s/PqX7eN36Nyx8eqO6+HG9fCl7+d+6d3o+vlg5Ne58+yQ6+Hg+fYUA9HpAAAFKUlEQVR4nO3dbXeiPBAG4KSBdngVkG5ddp///zefUMSigkaMZGZ27q97tifXyYQRDUHpe8mLclfFXRIpTImSLq52ZZHfHb+6+a911sTGACgILZqJHRUYEzdZvVqYVarX4Y5VqipbI8zTyGDXjQETpYvluiCsGzK8IWCahWKdF6boi/M6AKmzMEvo+fpAMrceZ4R7E3qoq2P2DsKC6AQOgaS4J2wJrsBpANrbwoZuhY4xzS1hRR9oidWy8MABaImHJSGLGexzNosTIYM1OGa6Fn+ELR+gJbbXwoJ2l7gMFFdC0o3+OpBcCve8gJa4PxdmnBbhEJOdCZPQ43lBkqkw5VajfY73i9/CmiPQEuuTsGEqbEZhzu8yM8TkRyHLVdjneyX2QlzfZvtMNAgZ9sIxfU+0woprkdoyrXphHXoYL01thYyL9LtMFddmOMS2RKVj1sJYK7btfojJVcFcWKiSc5HaMi3Vjrlwp6rQY3hxKsX6UtpfTFUXegwvTqc4fkMzTaL43joNQekbtgLdTOghPhEwoN72Tfun/JV9LCf0MFcGTLT/yn5rh5BsAEZ93tmhRltokvb+NkPCQkh+PcCjJwT4esxHTTizy4eX0N6GPx5KQqjue0gL1wEpCbtVQEJCeKQJUhSaB9sgOSHMbHhlJnxnLlx5HaUkXD2FVIRrPsyQEpqSvXA9kIjwcB9CW3j12AA7oVl/JSUiTFZ+JKUjXP2JjYoQPtkLXS80+XvZ7r7S84QevUvMh5OvOKj+UevLhB69S+A/F2BK7GHds7j8PrGj/CNT5PAbRU54At3aYUl5ClVyH6g/Sc/hm4NwH3qQT8VFGIce5FNxEb6FHuRTcRGi3EfhHBch6QuNCEVIICIUIf6IUIT4I8J/Q0j6Fp+nMJrEaasQRPMJDVmKcdrf7JA8tGQpT/2cNs071ur1JvxgL/yDtYt4E6I9A8KbEO0Xxd6EaL8o9ibsuM9hjrfj+xJinUJvwt9Y26E3Id6DPHwJ0TZ8b0K8Jwj4Ev5lL0Tb8L0J8T5f70uItki9CdE2C19CtHf43oRo7/C9CRFvlPIkxNvwfQnxNnxfQrwNXxmnPbN3g3mjVBdP4rJV/+w/jAmtuJnpTm23X2aud3jjXYWXYfnb01lEKEL8EaEI8UeEIsQfEYoQf0QoQvwRoQjxR4QixB8RihB/RChC/BGhCPFHhCLEHxGKEH9EKEL8EaEI8UeEIsQfEYoQf0QoQvwRoQjxR4QixB8R+hOGOuxlK2GkQj2/v5UwUZ2Hv7ImWwk7FQd6oG8jIcSqev6vrMpWc1ipUA9/bzWHO1UyF5aqCNRWNxKaQuXMhbnSgS6m2wgh1ko3rIWNFQY6/mwbocmssPYw3BXZaB3WVqirIGW6ibB/a7QKdUrfJkJbpL0wzEuHNhFGehCGOZd34TRynyeTQ3oUhmr6L4/Jj8JQLfHVsc1wFNZMhfVJiPeE7GfyvQpHIeLTFtfn+A7JoxDvybWr0/fCiVDvudUpjEdtjUKd8CLC6T2nJ2HBTFhcCXXLaSman7d+/wh1w4doGj0n1BUXoqn0vFAfeBDNQS8Jeczi2QxeCjmsxekanBHqltDRi3MBaPVtoS5It35IikvQldB+gKNbqWbmVNQZoc6ITiMk2YxmTtjfL9IzwvF+0E2o68bQMoJp6nnKglDrPI3IIMFEab4EWRTaZJUy6MsVwKhqbv25CG2xZk1seiVGJ/Q6EzfZQnk6CfvkRbmr4i7B9R6pKOnialcWi8V5yv+/AkCMDK8HZQAAAABJRU5ErkJggg==" alt="pic"/>
        </Link>
        <Link href="https://twitter.com/revv_india">
            <Image style={{marginLeft:"5px",width:"35px", height:"35px",borderRadius:"50%"}} src="data:image/png;base64,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" alt="pic"/>
        </Link>
        <Link href="https://www.instagram.com/revv_india/">
             <Image style={{marginLeft:"5px",width:"35px", height:"35px",borderRadius:"50%"}} src="data:image/png;base64,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" alt="pic"/>
        </Link>
        <Link href="https://www.youtube.com/channel/UCdASUGQcRPefuQYO6rT331Q">
              <Image style={{marginLeft:"5px",width:"35px", height:"35px",borderRadius:"50%"}}src="data:image/jpeg;base64,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" alt="pic"/>
        </Link>
        <Link href="https://www.linkedin.com/company/revv-self-drive-car">
              <Image style={{marginLeft:"5px",width:"35px", height:"35px",borderRadius:"50%"}} src="data:image/jpeg;base64,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" alt="pic"/>
        </Link>
    </Flex>
        
       


    </Box>
<Box className={styles.faqcontentBox}>
    <p>Home</p>
    <p>Subscriptions</p>
    <p>FAQ</p>
    <p>Policy</p>
    <p>Blogs</p>
</Box>
<Box className={styles.faqsocialBox}>
    
    <Box>
        <Box color='white'>Have Questions?<br/>24/7 Customer Support</Box>
    </Box>
    <br/>
    <Box >
    <Box color='#0ebaba' fontSize='3xl'>
        <b>Contact us</b><br/>
        <b>+91-9250035555</b><br/>
        <b>care@revv.co.in</b>
    </Box>
    </Box>

   
</Box>
</Box>


</Box>
  )
}

export default Faqs
