import React from "react";

import { LandingSection } from "../LandingSection";
import { Flex, Text } from "@chakra-ui/react";
import { ReviewSlideShow } from "./Swiper";

export const ReviewSection = () => {
  return (
    <LandingSection
        sectionProps={{
            paddingTop: '50px',
            paddingBottom: '50px',
            minHeight: '0'
        }}
    >
        <Flex
            gap='50' 
            flexDirection='column' 
            alignItems='center'
            justifyContent='center'
        >
            {/* Title and sub title */}
            <Flex
                w='full'
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
                    data-aos-duration='800'
                    data-aos='fade-down'
                >
                    What our Customers say
                </Text>
                <Text
                    textAlign='center'
                    fontFamily={'Inter'}
                    fontWeight={400}
                    fontSize='20px'
                    lineHeight='28px'
                    color='#9598A0'
                    data-aos-duration='800'
                    data-aos='fade-down'
                >
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.
                </Text>
            </Flex>

            <ReviewSlideShow />
        </Flex>
    </LandingSection>
  );
}
