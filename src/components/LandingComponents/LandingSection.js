import { Container, Flex } from "@chakra-ui/react";

export const LandingSection = ({ children, sectionProps, containerProps }) => {
    return (
        <Flex
            w="100%"
            mx="auto"
            minH="100vh"
            pt='128px'
            pb='100px'
            my='auto'
            {...sectionProps}
        >
            <Container
                w="full"
                m='auto'
                maxW="1400px"
                px="5"
                minH="full"
                {...containerProps}
            >
                {children}
            </Container>
        </Flex>
    );
}