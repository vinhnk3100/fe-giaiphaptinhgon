import {
    Stack,
    Button,
    Text,
    useBreakpointValue,
    Image,
    Box,
    Flex,
    VStack,
  } from '@chakra-ui/react';
import { LandingSection } from '../LandingSection';
import { motion } from 'framer-motion';
import { FramerAnimationKeyframes } from '../../../constants/framer-keyframe.constant';
  
  export default function WithBackgroundImage() {
    return (
        <LandingSection
            sectionProps={{
                position: 'relative',
            }}
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                backgroundSize={{ base: 'unset', md: 'cover' }}
                backgroundPosition="center"
                bgGradient={'linear(to-t, blackAlpha.600, blackAlpha.50, transparent)'}
            />
            <Box
                position="absolute"
                left='50%'
                top='20%'
            >
                <Image
                    src="/landing-page/img-bg-hero-card.png"
                    w='full'
                    h='100%'
                    alt=""
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Box
                position="absolute"
                zIndex="-1"
                top="0"
                left="0"
                w="full"
                h="full"
                backgroundSize={{ base: 'unset', md: 'cover' }}
                backgroundPosition="center"
            >
                <Image
                    src="/landing-page/img-hero-banner.png"
                    w='full'
                    h='100%'
                    alt=""
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Stack
                w='586px'
                position="relative"
                color="white"
            >
                <Text
                    fontFamily='Inter'
                    fontWeight='700'
                    fontSize='60px'
                    lineHeight='72px'
                    color='#424242'
                    pb='2px'
                >
                    Find & Hire Expert Freelancers
                </Text>
                <Text
                    maxW='462px'
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='18px'
                    lineHeight='26px'
                    color='#5B5B5B'
                    py='18px'
                >
                    Work with the best freelance talent from around the world on our secure flexible and cost-effective platform.
                </Text>
                <Flex
                    gap='20px'
                    flexDirection='row'
                >
                    <Button
                        rounded="full"
                        width="148px"
                        height="48px"
                        fontSize="14px"
                        fontWeight="600"
                        lineHeight="24px"
                        fontFamily=""
                        bg='#0056D6'
                        _hover={{
                            bg: '#033d93',
                            color: '#FFF'
                        }}
                    >
                        Contact Us
                    </Button>
                    <Button
                        rounded="full"
                        width="148px"
                        height="48px"
                        fontSize="14px"
                        fontWeight="600"
                        lineHeight="24px"
                        fontFamily=""
                        bg='transparent'
                        border='1px solid #0056D6'
                        color='#0056D6'
                        _hover={{
                            bg: '#033d93',
                            color: '#FFF'
                        }}
                    >
                        Learn more
                    </Button>
                </Flex>
            </Stack>
            <Stack
                    spacing="6"
                    position="absolute"
                    bottom={useBreakpointValue({ base: '34px', md: '48px' })}
                    left="0"
                    w="full"
                    justifyContent="center"
                >
                    <VStack spacing="8px" color="white">
                        <Box
                            as={motion.div}
                            animation={`${FramerAnimationKeyframes.bouncingIcon} 2s ease-in-out infinite`}
                        >
                            <Image
                                py="4px"
                                src="/landing-page/img-mouse-scrolldown.png"
                                alt=""
                            />
                        </Box>
                        <Text
                            fontFamily=""
                            textAlign="center"
                            alignItems="center"
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight="24px"
                        >
                            Scroll down
                        </Text>
                    </VStack>
                </Stack>
        </LandingSection>
    );
  }