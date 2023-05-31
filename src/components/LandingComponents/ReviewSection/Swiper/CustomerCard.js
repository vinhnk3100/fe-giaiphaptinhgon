import { Avatar, Card, CardBody, CardHeader, Text } from "@chakra-ui/react"

export const CustomerCard = () => {
    return (
        <Card 
            w='full' 
            h='100%' 
            alignItems='center'
        >
            <CardHeader
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
            >
                <Avatar w='106px' h='106px' src='https://bit.ly/code-beast' />
                <Text size='md'> Stephen Louis</Text>
                <Text size='md'> Software Developer</Text>
            </CardHeader>
            <CardBody>
                <Text>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</Text>
            </CardBody>
        </Card>
    )
}