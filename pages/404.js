import NextLink from 'next/link'
import {
    Box,
    Heading,
    Container,
    Text,
    Divider,
    Button
} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Box mt={5}>
                <Heading as="h1">
                    Not Found
                </Heading>
            </Box>
            <Text> Oops ! the page you're looking for was not found. </Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal"> Main page </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound