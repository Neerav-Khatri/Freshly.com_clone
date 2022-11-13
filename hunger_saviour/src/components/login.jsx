import { Box, Button, Flex, Grid, Heading, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./navbar";


export default function Login () {
    return (
        <>
        <Navbar />

        {/* Login form */}

        <Box w="100%" fontFamily="sans-serif" backgroundColor="#fffdf7">
            <Grid gap="20px" w="40%" m="3% auto 4% auto" p="20px">
                <Heading fontSize="5xl">Log In</Heading>
                <Box textAlign="left" lineHeight="30px" fontWeight="bold">
                    <Text> Email </Text>
                    <Input type="email" placeholder="user@name.com"/>
                </Box>
                <Box textAlign="left" lineHeight="30px" fontWeight="bold">
                    <Text> Password </Text>
                    <Input type="password" placeholder="password"/>
                </Box>
                <Button colorScheme="blue" cursor="pointer">Log In</Button>
                <Flex fontSize="sm" justifyContent="space-between" mt="10px">
                    <Link color="blue" cursor="pointer">Forgot Password?</Link>
                    <Text>Don’t have an account? <span style={{color:"blue"}}><Link to="/sign_up">Get Started</Link></span></Text>
                </Flex>
            </Grid>
        </Box>

        <Footer />
        </>
    )
}