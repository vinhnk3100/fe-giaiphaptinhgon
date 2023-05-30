import { Button, Flex, Image, Link, Select, Text } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex
            w='full'
            position='absolute'
            px='120px'
            zIndex='99'
        >
            <Flex
                py='41px'
                flex='1'
                h='100%'
                alignItems='center'
                justifyContent='center'
            >
                <Image 
                    w='120px' 
                    style={{
                        objectFit: 'cover',
                    }}
                    src={'/landing-page/Logo.png'}
                />
            </Flex>
            <Flex
                flex='2'
                gap='36px'
                alignItems='center'
                justifyContent='center'
            >
                <Select w='' 
                cursor='pointer' placeholder='Services' border='0'>
                    <option value='option1'>Ipsum</option>
                    <option value='option1'>Ipsum</option>
                </Select>
                <Text>
                    <Link>About Us</Link>
                </Text>
                <Text>
                    <Link>Blog</Link>
                </Text>
            </Flex>
            <Flex
                flex='1'
                gap='18px'
                alignItems='center'
                justifyContent='flex-end'
                
            >
                <Select maxW='86px' borderRadius='22px' placeholder='EN'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Button
                    bg={'blue.400'}
                    rounded={'full'}
                    color={'white'}
                    _hover={{ bg: 'blue.500' }}>
                    Contact Us
                </Button>
            </Flex>
        </Flex>
    )
}