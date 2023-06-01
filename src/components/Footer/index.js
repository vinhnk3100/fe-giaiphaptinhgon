import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Button,
    Image,
  } from '@chakra-ui/react';
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
export const Footer = () => {
  return (
      <Box
          bg='#0157D6'
          color='#FFF'
      >
          <Flex
            w='703px'
            mx='auto'
            py='131px' 
            gap='62px' 
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Text
              textAlign='center'
              fontFamily='Inter'
              fontWeight='500'
              fontSize='60px'
              lineHeight='75px'
            > 
                People who are ready took these courses!
            </Text>
            <Button
              w='276px'
              h='65px'
              bg='#FFF'
              borderRadius='10px'
            >
              <Text
                textAlign='center'
                fontFamily='Inter'
                fontWeight='500'
                fontSize='18px'
                lineHeight='21.78px'
                color='#161C28'
              > 
                Schedule Appointment
              </Text>
            </Button>
          </Flex>
          <Flex 
            px='205px'
            pb='132px'
            w='full'
          >
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap='161px'>
                <Flex
                  gap='35px'
                  flexDirection='column'
                >
                    <ListHeader><Image src='/landing-page/logo-white.png' /></ListHeader>
                    <Link href={'#'}>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</Link>
                </Flex>
                <Flex
                  gap='35px'
                  flexDirection='column'
                >
                    <ListHeader>Link</ListHeader>
                    <Flex
                      gap='26px'
                      flexDirection='column'
                    >
                      <Link href={'#'}>Overons</Link>
                      <Link href={'#'}>Social Media</Link>
                      <Link href={'#'}>Counters</Link>
                      <Link href={'#'}>Contact</Link>
                    </Flex>
                </Flex>
                <Flex
                  gap='35px'
                  flexDirection='column'
                >
                    <ListHeader>Company</ListHeader>
                    <Flex
                      gap='26px'
                      flexDirection='column'
                    >
                      <Link href={'#'}>Terms & Conditions</Link>
                      <Link href={'#'}>Privacy Policy</Link>
                      <Link href={'#'}>Contact</Link>
                    </Flex>
                </Flex>
                  
                <Flex
                  gap='35px'
                  flexDirection='column'
                >
                    <ListHeader>Get in touch</ListHeader>
                    <Flex
                      gap='26px'
                      flexDirection='column'
                    >
                      <Link href={'#'}>Crechterwoord K12 182 DK Alknjkcb</Link>
                      <Link href={'#'}>085-132567</Link>
                      <Link href={'#'}>info@lobar.net</Link>
                    </Flex>
                </Flex>
              </SimpleGrid>
          </Flex>
          <Text
            pb='27px'
            textAlign='center'
            fontFamily='Inter'
          >
              © 2021 ar-shakir. All rights reserved
          </Text>
      </Box>
  );
}