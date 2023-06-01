import { Box, Button, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Select, Text } from "@chakra-ui/react"
import { MdKeyboardArrowDown } from 'react-icons/md'

export const Header = () => {
    return (
        <Flex
            w='full'
            backdropFilter='blur(20px)'
            position='fixed'
            px='120px'
            zIndex='99'
        >
            <Flex
                py='25px'
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
                <Menu>
                    <MenuButton
                        as={Button}
                        variant={'link'}
                        cursor={'pointer'}
                        rightIcon={<Image src='/landing-page/icon-polygon-down.png' />}
                    >
                        <Text
                            fontFamily='Inter'
                            fontWeight='400'
                            fontSize='15px'
                            lineHeight='18.15px'
                            color='#6C768D'
                        >
                            Services
                        </Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            as={Flex}
                        >
                            <Link
                                fontFamily='Inter'
                                fontWeight='400'
                                fontSize='15px'
                                lineHeight='18.15px'
                                color='#6C768D'
                            >
                                Link 1
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                fontFamily='Inter'
                                fontWeight='400'
                                fontSize='15px'
                                lineHeight='18.15px'
                                color='#6C768D'
                            >
                                Link 1
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                fontFamily='Inter'
                                fontWeight='400'
                                fontSize='15px'
                                lineHeight='18.15px'
                                color='#6C768D'
                            >
                                Link 1
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Text
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='15px'
                    lineHeight='18.15px'
                    color='#6C768D'
                >
                    <Link>About Us</Link>
                </Text>
                <Text
                    fontFamily='Inter'
                    fontWeight='400'
                    fontSize='15px'
                    lineHeight='18.15px'
                    color='#6C768D'
                >
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
                    <option value='VN'>VN</option>
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