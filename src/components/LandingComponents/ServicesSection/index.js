import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LandingSection } from '../LandingSection';
import { ServicesItem } from "./ServicesItem";
import { MockData } from '../../../utils/mock-data';
import React from "react";

export const ServicesSection = () => {
    const displayServicesData = React.useMemo(() => {
        return MockData.servicesItemData
    }, [])

    return (
        <LandingSection
            sectionProps={{
                minHeight: 'none',
                paddingTop: '50px'
            }}
        >
            <Flex 
                gap='50' 
                flexDirection='column' 
                alignItems='center'
                justifyContent='center'
            >
                <Flex
                    w='700px'
                    h='100%'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Text
                        mb='30px'
                        fontFamily={'Inter'}
                        fontWeight={600}
                        fontSize='60px'
                        lineHeight='61.8px'
                        color='#2E2E2E'
                    >
                        Services
                    </Text>
                    <Text
                        textAlign='center'
                        fontFamily={'Inter'}
                        fontWeight={400}
                        fontSize='20px'
                        lineHeight='28px'
                        color='#5F5F5F'
                    >
                        Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.
                    </Text>
                </Flex>

                {/* Services Data Cards */}
                <Flex
                    w='1118px'
                    h='100%'
                    gap='40px'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    color='#0056D6'
                    position='relative'
                >
                    <Box
                        position='absolute'
                        top='-25%'
                        left='-9%'
                        zIndex='-1'
                    >
                        <Image src='/landing-page/bg-dot.png' />
                    </Box>
                    <Box
                        position='absolute'
                        bottom='-20%'
                        right='-9%'
                        zIndex='-1'
                    >
                        <Image src='/landing-page/bg-dot.png' />
                    </Box>
                    <Flex
                        w='full'
                        gap='40px'
                        justifyContent='flex-start'
                        alignItems='center'
                    >
                        {
                            displayServicesData.slice(0, 2).map((item, index) => (
                                <ServicesItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    text={item.text}
                                    href={item.href}
                                />
                            ))
                        }
                        
                    </Flex>
                    <Flex
                        w='full'
                        gap='40px'
                        justifyContent='flex-end'
                        alignItems='center'
                    >
                        {
                            displayServicesData.slice(2).map((item, index) => (
                                <ServicesItem
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    text={item.text}
                                    href={item.href}
                                />
                            ))
                        }
                    </Flex>
                </Flex>
            </Flex>
        </LandingSection>
    );
}