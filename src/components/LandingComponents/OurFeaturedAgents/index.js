import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { LandingSection } from '../LandingSection';
import React from "react";
import { AgentsCard } from "./AgentsCard";
import { MockData } from "../../../utils/mock-data";

export const OurFeaturedAgents = () => {
    const displayOurFeaturedAgentsData = React.useMemo(() => {
        return MockData.ourFeaturedAgentsData
    }, [])
    return (
        <LandingSection
            sectionProps={{
                paddingTop: '100px',
                paddingBottom: '100px',
                position: "relative"
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
                    <Box
                        zIndex='-1'
                        position="absolute"
                        top="0"
                        left="0"
                        w="full"
                        h="full"
                        backgroundSize={{ base: 'unset', md: 'cover' }}
                        backgroundPosition="center"
                        bgGradient={'linear-gradient(173.96deg, #F6FBFD 15.4%, rgba(244, 248, 253, 0) 91.24%)'}
                    />
                    <Box
                        zIndex='-1'
                        position='absolute'
                        top='20%'
                        right='10%'
                        w='269px'
                        h='269px'
                    >
                        <Image w='full' h='100%' src='/landing-page/bg-dot.png' />
                    </Box>
                    <Text
                        mb='30px'
                        fontFamily={'Inter'}
                        fontWeight={600}
                        fontSize='60px'
                        lineHeight='61.8px'
                        color='#2E2E2E'
                        data-aos-duration='800'
                        data-aos='fade-down'
                    >
                        Our Featured Agents
                    </Text>
                    <Text
                        textAlign='center'
                        fontFamily={'Inter'}
                        fontWeight={400}
                        fontSize='20px'
                        lineHeight='28px'
                        color='#5F5F5F'
                        data-aos-duration='800'
                        data-aos='fade-down'
                    >
                        Meet our amazing team members
                    </Text>
                </Flex>

                <Flex 
                    h='535px'
                    gap='30px'
                >
                    {displayOurFeaturedAgentsData.map((item, index) => (
                        <AgentsCard
                            key={index}
                            totalCard={index+1}
                            avatar={item.avatar}
                            name={item.name}
                            place={item.place}
                            phoneNumber={item.phoneNumber}
                            email={item.email}
                            agentsCardProps={{ alignItems: item.alignFlex }}
                        />
                    ))}
                </Flex>
            </Flex>
        </LandingSection>
    );
}