import React from 'react';
import { Flex, Icon, Link, Text } from '@chakra-ui/react';
import { LandingSection } from '../LandingSection';
import { MockData } from '../../../utils/mock-data';
import { OurFeaturesItem } from './OurFeaturesItem';
import { FiChevronRight } from 'react-icons/fi'

export default function OurFeaturesSection() {
    const displayFeatureData = React.useMemo(() => {
        return MockData.ourFeatureItemData
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
                    w='538px'
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
                        Our Features
                    </Text>
                    <Text
                        textAlign='center'
                        fontFamily={'Inter'}
                        fontWeight={400}
                        fontSize='20px'
                        lineHeight='28px'
                        color='#5F5F5F'
                    >
                        Unleash your creativety with a visual collaboration plattorm that enables effective ideation
                    </Text>
                </Flex>

                <Flex
                    w='full'
                    h='100%'
                    gap='100'
                    flexDirection='row'
                    alignItems='flex-start'
                >
                    {displayFeatureData.map((item, index) => (
                        <OurFeaturesItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </Flex>

                <Flex
                    w='full'
                    h='100%'
                    justifyContent='center'
                    alignItems='center'
                    color='#0056D6'
                >
                    <Link
                        href='#'
                        fontWeight={400}
                        fontSize='20px'
                        lineHeight='28.4px'
                    >
                        Learn more <Icon><FiChevronRight /></Icon>
                    </Link>
                </Flex>
            </Flex>
        </LandingSection>
    );
}