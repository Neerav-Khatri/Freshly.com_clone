import { Box, Grid, Text, Heading, Image, Flex, Input, Button } from "@chakra-ui/react";
import Questions from "./common_ques";
import Navbar from "./navbar";
import BackImg from "../Sign_up_bgImage.jpg";
import { Link } from "react-router-dom";

export default function Sign_up() {
    return (
        <>
        <Navbar />

        {/* Sign Up form */}

        <Box w="100%" pos="relative">
            <Image src={BackImg} alt="Image" w="100%"/>
            <Grid pos="absolute" bgColor="whiteAlpha.800" w="50%" top="20%" left="25%" p="30px 40px" justifyItems="left">
                <Heading fontSize="5xl" mb="20px">Dinner’s ready!</Heading>
                <Text fontSize="3xl" fontWeight="bold" mb="20px">Chef-prepared, healthy meals delivered weekly</Text>
                <Flex gap="20px" w="100%" mb="30px">
                    <Input w="60%" type="email" placeholder="Email" bgColor="white" fontSize="xl" p="20px"/>
                    <Input w="20%" type="number" placeholder="Zip" bgColor="white" fontSize="xl" p="20px"/>
                    <Button colorScheme="blue" cursor="pointer" fontSize="xl" p="20px">Continue</Button>
                </Flex>
                <Text fontSize="sm" mb="5px">Already have an account? <Link to="/login"><span style={{color:"blue"}}>Log In</span></Link></Text>
                <Text fontSize="sm">By continuing, you agree to our <span style={{color:"blue", cursor:"pointer"}}>Terms</span> and <span style={{color:"blue", cursor:"pointer"}}>Privacy Policy </span> & will receive emails from Hunger Saviour.</Text>
            </Grid>
        </Box>

        <Questions />
        </>
    )
}