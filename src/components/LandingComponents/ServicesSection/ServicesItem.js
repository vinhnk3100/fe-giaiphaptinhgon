import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const ServicesItem = ({ title, text, icon, totalItem, aosDirection }) => {
    return (
        <Box
            maxW='360px'
            w={'full'}
            py='40px'
            bg='#FFF'
            borderRadius='8px'
            border='1px solid #EFEFEF'
            boxShadow='0px 30px 30px rgba(99, 122, 166, 0.1)'
            userSelect='none'
            _hover={{
                boxShadow: '0 30px 30px rgba(0, 86, 214, 0.2)'
            }}
            data-aos-offset={totalItem * 100}
            data-aos-duration={totalItem * 400}
            data-aos={aosDirection}
        >
            <Flex
                w='full'
                gap='25.72px'
                align={'center'} 
                spacing={2}
            >
                <Flex
                        h='100%'
                        ml='28px'
                        align={'center'}
                        justify={'center'}
                        color={'white'}
                    >
                    <Image src={icon}  w='full' h='100%' />
                </Flex>
                <Flex
                    w='full'
                    flexDirection='column'
                    pr='20px'
                >
                    <Text
                        fontFamily='Inter'
                        fontWeight='700'
                        fontSize='20px'
                        lineHeight='35.74px'
                        color='#2C3847'
                        textTransform={'uppercase'}
                    >
                        {title}
                    </Text>
                    <Text
                        fontFamily='Inter'
                        fontWeight='400'
                        fontSize='16px'
                        lineHeight='26px'
                        color='#2C3847'
                    >
                        {text}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
  };