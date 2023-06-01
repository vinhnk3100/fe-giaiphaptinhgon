import React from 'react';
import { Text, Flex, Box, Image } from '@chakra-ui/react';
import { LandingSection } from '../LandingSection';
import CountUp from 'react-countup';
import { FeatureItem } from './FeatureItem';
import { MockData } from '../../../utils/mock-data';

function StatsCard(props) {
    const { title, stat } = props;

    return (
      <Flex
        w='221px'
        gap='15px'
        flexDirection='column'
      >
        <Box
            position='relative'
            fontFamily='Inter'
            fontWeight='600'
            fontSize='70px'
            lineHeight='77px'
            color='#FFF'
        >
          <CountUp
            delay={2}
            duration={4}
            end={title}
            suffix="%"
          />
          <Box 
            position='absolute' 
            borderBottom='5px solid #FFF'
            left='0'
            right='50%'
          />
        </Box>
        <Text
            fontFamily='Inter'
            fontWeight='400'
            fontSize='20px'
            lineHeight='28px'
            color='#FFF'
        >
          {stat}
        </Text>
      </Flex>
    );
}

export default function DataAnalysis() {
    const displayFeatureData = React.useMemo(() => {
        return MockData.featureItemData
    }, [])

    return (
        <LandingSection>
            <Flex gap='99' flexDirection='column'>
                <Flex
                    w='full'
                    h='100%'
                    gap='100'
                    flexDirection='row'
                    alignItems='flex-start'
                >
                    {displayFeatureData.map((item, index) => (
                        <FeatureItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                            totalItem={index+1}
                        />
                    ))}
                </Flex>
                <Flex
                    pb='120px'
                    pt='98px'
                    borderRadius='20px' 
                    bg='#0056D6' 
                    flexDirection='column'
                    gap='73px'
                >
                    <Text
                        px='232px'
                        textAlign='center'
                        fontFamily='Inter'
                        fontWeight='600'
                        fontSize='60px'
                        lineHeight='60px'
                        color='#FFF'
                        data-aos-duration='600'
                        data-aos='fade-down'
                    >
                        Journey of our Success
                    </Text>
                    <Flex
                        w='full'
                        px='120px'
                        gap='110'
                        justifyContent='center'
                        alignItems='center'
                        data-aos-duration='600'
                        data-aos='fade-down'
                    >
                        <StatsCard title={85} stat={'manage communication more efficiently'} />
                        <StatsCard title={95} stat={'improve communication with customers and clients'} />
                        <StatsCard title={75} stat={'average improvement in team efficiency'} />
                    </Flex>
                </Flex>
            </Flex>
        </LandingSection>
    );
}