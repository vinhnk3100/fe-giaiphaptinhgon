import { Avatar, Card, CardBody, CardHeader, Text } from "@chakra-ui/react"

export const CustomerCard = () => {
    return (
        <Card 
            w='full' 
            h='100%'
            px='80px'
            py='54px'
            alignItems='center'
        >
            <CardHeader
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Avatar mb='4' w='106px' h='106px' src='https://bit.ly/code-beast' />
                <Text
                    mb='2'
                    fontFamily='Inter'
                    fontWeight='600'
                    fontSize='30px'
                    lineHeight='36.31px'
                    color='#171C2C'
                >
                    Stephen Louis
                </Text>
                <Text
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize='20px'
                    lineHeight='24.2px'
                    color='#9598A0'
                >
                    Software Developer
                </Text>
            </CardHeader>
            <CardBody p='0'>
                <Text
                    textAlign='center'
                    fontFamily='Inter'
                    fontWeight='500'
                    fontSize='18px'
                    lineHeight='32px'
                    color='#9598A0'
                >
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                </Text>
            </CardBody>
        </Card>
    )
}