import { Box, Flex, Image, Text } from '@chakra-ui/react';

export const Card = ({ thumbnail, title, description, projectType }) => {
    return (
        <Flex 
            w="full"
            position="relative"
            h='100%'
        >
            <Box
                overflow="hidden"
                position="relative"
                transition=".75 ease-in-out"
                w="full"
                h='100%'
                borderRadius='10px'
            >
                <Image
                    display="flex"
                    alt="Hero Image"
                    fit="cover"
                    align="center"
                    pointerEvents="none"
                    w="full"
                    h='100%'
                    src={thumbnail}
                    transition=".75s ease"
                    _groupHover={{
                        transform: 'scale(1.1)',
                        transition: '.75s ease',
                    }}
                />
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="full"
                    h="full"
                    backgroundSize={{ base: 'unset', md: 'cover' }}
                    backgroundPosition="center"
                    bgGradient={'linear(to-t, blackAlpha.700, blackAlpha.50, transparent)'}
                />
                <Flex
                    p='15px'
                    position='absolute'
                    flexDirection="column"
                    bottom='0'
                    w="full"
                    color={'#FFF'}
                >
                    <Text>
                        {title}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                </Flex>
            </Box>
        </Flex>
    );
};
