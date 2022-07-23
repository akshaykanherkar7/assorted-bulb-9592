import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const Logo = (props: any) => {
    return (
    <img style={{width:"96px",height:"71px",backgroundColor:"white"}} src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/revv-logo.png' alt='a'/>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
        
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'1230px'} py={10} margin='auto' marginTop='50px'  backgroundColor='white' borderRadius='12px' boxShadow='0 2px 2px 0 rgb(0 0 0 / 7%)'>
          <SimpleGrid backgroundColor='white'
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}  width='350px' height='250px' backgroundColor='white'>
              <Box backgroundColor='white' >
                <Logo backgroundColor='white' />
              </Box>
              <Text fontSize={'sm'} backgroundColor='white'>
              © 2022 Primemover Mobility Technologies Pvt Ltd. All rights reserved
              </Text>
             
            </Stack>
            <Stack  align='flex-start' backgroundColor='white'>
             
              <Link href={'#'} backgroundColor='white'>Home</Link>
              <Link href={'#'} backgroundColor='white'>FAQs</Link>
              <Link href={'#'} backgroundColor='white'>Policy</Link>
              <Link href={'#'} backgroundColor='white'>  Blog</Link>
              
            </Stack>
          
            <Stack align={'flex-start'} backgroundColor='white'>
              <Text fontWeight='bold' fontSize='xl' backgroundColor='white' bg='white'>Social</Text>
            
             
              <Stack direction={'row'} spacing={6}backgroundColor='white'>
              <SocialButton label={'Facebook'} href={'#'}backgroundColor='white'>
              <FaFacebook />
            </SocialButton>
              <SocialButton label={'Twitter'} href={'#'}backgroundColor='white'>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}backgroundColor='white'>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}backgroundColor='white'>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}backgroundColor='white'>
              <FaLinkedin />
            </SocialButton>
            </Stack>

            <Stack paddingTop={'30px'} backgroundColor='white' >
            <b style={{backgroundColor:"white"}} >Download the Revv App!</b>
            <Stack direction={'row'} spacing={3} border='0.5px solid #e6e6e6' padding={'5px'} backgroundColor='white'>
                <img style={{width:"23px",height:"23px",backgroundColor:"white"}} src='https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/appstore_apple.webp' alt='a'/>
                <Text backgroundColor='white'>Download  
                <b style={{backgroundColor:"white"}}  >  App Store
                </b> </Text>
            </Stack>
            <Stack backgroundColor='white' direction={'row'} spacing={3} border='0.5px solid #e6e6e6' padding={'5px'}>
            <img style={{width:"23px",height:"23px",backgroundColor:"white"}} src=' https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/playstore_google.webp' alt='a'/>
            <Text backgroundColor='white'>Download  
            <b style={{backgroundColor:"white"}} >  App Store
            </b> </Text>
        </Stack>
            </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
 