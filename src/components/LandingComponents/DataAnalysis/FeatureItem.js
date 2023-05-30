import { Flex, Image, Text } from "@chakra-ui/react";

export const FeatureItem = ({ title, text, icon }) => {
    return (
      <Flex
          w='full'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
      >
          <Flex
              w='full'
              alignItems='center'
              justifyContent='center'
              color='#FFF'
              mb='40px'
          >
              <Image src={icon} w={84} h={84} />
          </Flex>
          <Flex
              gap='18px'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
          >
              <Text
                  textAlign='center'
                  fontWeight={500}
                  fontSize='24px'
                  lineHeight='24px'
              >
                  {title}
              </Text>
              <Text
                  w='260px'
                  textAlign='center'
                  fontWeight={500}
                  fontSize='18px'
                  lineHeight='28px'
                  color='#757575'
              >
                  {text}
              </Text>
          </Flex>
      </Flex>
    );
  };