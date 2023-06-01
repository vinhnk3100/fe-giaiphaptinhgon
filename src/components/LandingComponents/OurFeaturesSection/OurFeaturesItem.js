import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
import { FramerAnimationKeyframes } from "../../../constants/framer-keyframe.constant";

export const OurFeaturesItem = ({ title, text, icon, totalItem }) => {
    console.log(totalItem)
    return (
      <Flex
          w='full'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          data-aos-duration={totalItem * 400}
          data-aos='fade-down'
      >
          <Flex
            as={motion.div}
            w='full'
            alignItems='center'
            justifyContent='center'
            color='#FFF'
            mb='40px'
            animation={`${FramerAnimationKeyframes.bouncingIcon} ${1.2 * totalItem}s ease infinite`}
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