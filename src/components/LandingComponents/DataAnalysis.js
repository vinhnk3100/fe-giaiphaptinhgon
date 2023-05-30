import { Icon, Text, Flex, Box } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { LandingSection } from './LandingSection';


const Feature = ({ title, text, icon }) => {
  return (
    <Flex flexDirection='column'>
        <Flex
            w='full'
            h={16}
            alignItems={'center'}
            justifyContent={'center'}
            color={'white'}
            mb='40px'
        >
            {icon}
        </Flex>
        <Flex
            gap='18px'
            flexDirection='column'
        >
            <Text 
                textAlign='center'
                fontWeight={600}
            >
                {title}
            </Text>
            <Text
                textAlign='center'
                color={'gray.600'}
            >
                {text}
            </Text>
        </Flex>
    </Flex>
  );
};

function StatsCard(props) {
    const { title, stat } = props;
    return (
      <Flex
        w='221px'
        gap='15px'
        flexDirection='column'
      >
        <Text
            position='relative'
            fontFamily='Inter'
            fontWeight='600'
            fontSize='70px'
            lineHeight='77px'
            color='#FFF'
        >
          {title}
          <Box 
            position='absolute' 
            borderBottom='5px solid #FFF'
            left='0'
            right='50%'
          ></Box>
        </Text>
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
  return (
    <LandingSection>
        <Flex gap='99' flexDirection='column'>
            <Flex flexDirection='row' gap='100'>
            <Feature
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title={'Lifetime Support'}
                text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                }
            />
            <Feature
                icon={<Icon as={FcDonate} w={10} h={10} />}
                title={'Unlimited Donations'}
                text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                }
            />
            <Feature
                icon={<Icon as={FcInTransit} w={10} h={10} />}
                title={'Instant Delivery'}
                text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                }
            />
            </Flex>
            <Flex borderRadius='20px' bg='#0056D6' flexDirection='column'>
                <Text
                    pt='98px'
                    px='232px'
                    pb='73px'
                    textAlign='center'
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='60px'
                    lineHeight='60px'
                    color='#FFF'
                >
                    Journey of our Success
                </Text>
                <Flex
                    w='full'
                    px='120px' 
                    pb='120px' 
                    gap='110'
                    justifyContent='center'
                    alignItems='center'
                >
                    <StatsCard title={'85%'} stat={'manage communication more efficiently'} />
                    <StatsCard title={'95%'} stat={'improve communication with customers and clients'} />
                    <StatsCard title={'75%'} stat={'average improvement in team efficiency'} />
                </Flex>
            </Flex>
        </Flex>
    </LandingSection>
  );
}