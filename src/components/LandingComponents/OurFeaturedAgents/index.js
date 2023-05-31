import { Flex, Text } from "@chakra-ui/react";
import { LandingSection } from '../LandingSection';
import { MockData } from '../../../utils/mock-data';
import React from "react";

export const OurFeaturedAgents = () => {

    return (
        <LandingSection
            sectionProps={{
                paddingTop: '100px',
                paddingBottom: '100px'
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
                        Our Featured Agents
                    </Text>
                    <Text
                        textAlign='center'
                        fontFamily={'Inter'}
                        fontWeight={400}
                        fontSize='20px'
                        lineHeight='28px'
                        color='#5F5F5F'
                    >
                        Meet our amazing team members
                    </Text>
                </Flex>
            </Flex>
        </LandingSection>
    );
}