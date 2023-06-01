import React from 'react';
import { Card, CardHeader, CardBody, Flex, Avatar, Box, Text, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineStar } from 'react-icons/ai'

export const AgentsCard = ({ avatar, name, place, phoneNumber, email, totalCard, agentsCardProps }) => {
    console.log(totalCard)
    return (
        <Flex
            w='full'
            h='100%'
            justifyContent='center'
            data-aos-offset={totalCard * 100}
            data-aos-duration={totalCard * 600}
            data-aos='fade-down'
            {...agentsCardProps}
        >
            <Card
                w='362px' 
                h='435px'
                bg='#FFF'
                borderRadius='5px'
                boxShadow='0px 20px 50px rgba(198, 217, 225, 0.3)'
                userSelect='none'
                _hover={{
                    boxShadow: '0 30px 30px rgba(0, 86, 214, 0.2)'
                }}
            >
                <CardHeader
                    p='0'
                    pt='30px'
                    px='30px'
                >
                    <Flex
                        w='full'
                        h='100%'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Icon
                            fontSize='24px'
                            bg='#FFF'
                            _hover={{
                                background: '#FFF',
                            }}
                        ><AiOutlineStar /></Icon>
                        <Menu>
                            <MenuButton 
                                p='16px'
                                pr='0'
                                bg='#FFF'
                                fontSize='24px'
                                _hover={{
                                    background: '#FFF'
                                }}
                            ><BsThreeDotsVertical /></MenuButton>
                            <MenuList>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>Contact</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </CardHeader>
                <CardBody
                    pt='18px'
                >
                    <Flex
                        flexDirection='column'
                        alignItems='center'
                        textAlign='center'
                        pb='50px'
                    >
                        <Avatar name='Segun Adebayo' w='120px' h='120px' src={avatar} />
                        <Box>
                            <Text
                                pt='22px'
                                pb='5px'
                                fontFamily='Inter'
                                fontWeight='500'
                                fontSize='26px'
                                lineHeight='31.47px'
                                color='#343951'
                            >
                                {name}
                            </Text>
                            <Text
                                fontFamily='Inter'
                                fontWeight='500'
                                fontSize='14px'
                                lineHeight='16.94px'
                                color='#343951'
                            >
                                {place}
                            </Text>
                        </Box>
                    </Flex>
                    <Text
                        pb='14px'
                        textAlign='center'
                        fontFamily='Inter'
                        fontWeight='500'
                        fontSize='18px'
                        lineHeight='21.78px'
                        color='#343951'
                    >
                        {phoneNumber}
                    </Text>
                    <Text
                        textAlign='center'
                        fontFamily='Inter'
                        fontWeight='500'
                        fontSize='17px'
                        lineHeight='20.57px'
                        color='#0056D6'
                    >
                        {email}
                    </Text>
                </CardBody>
            </Card>
        </Flex>
    )
}