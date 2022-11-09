import { Box, Flex, Stack, Image, Text, Button, Input, Link } from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Homepage_1() {
    return(
        <>
            <Navbar />

            <Stack pt="80px" fontFamily="sans-serif">
                <Flex>
                    <Box w="60%">
                        <Image w="100%" src="https://www.rd.com/wp-content/uploads/2019/08/chicken-lo-mein-with-carrots-and-broccoli-in-a-bowl-shutterstock_81175132.jpg?resize=768,480" alt="Image" />
                        <Box pos="relative">
                            <Text w="350px" color="black" fontWeight="bold" fontSize="4xl" pos="absolute" top="-130" left="550">Delivered to you fresh, not frozen.</Text>
                        </Box>
                    </Box>
                    <Box w="40%" backgroundColor="#85e5c6" p="30px" textAlign="left">
                        <Text fontSize="5xl" fontWeight="bold" mb="20px">Balanced meals for busy lives.</Text>
                        <Button backgroundColor="white" colorScheme="blue" variant="outline" mb="20px">Explore Meals</Button>
                        <Text fontSize="xl" fontWeight="bold" mb="20px">See meals available in your area!</Text>
                        <Flex mb="20px">
                            <Box w="60%">
                                <Text mb='8px' fontSize="lg" fontWeight="bold">Email Address</Text>
                                <Input w="90%" backgroundColor="white" placeholder="hunger@saviour.com" />
                            </Box>
                            <Box w="40%" fontSize="lg" fontWeight="bold">
                                <Text mb='8px'>Zip Code</Text>
                                <Input w="70%" backgroundColor="white" placeholder="1111" />
                            </Box>
                        </Flex>
                        <Button colorScheme="blue" mb="40px">Get Started</Button>
                        <Text>By continuing, you agree to our <Link color="blue">Terms</Link> and <Link color="blue">Privacy Policy</Link> & will receive emails from Hunger Saviour.</Text>
                    </Box>
                </Flex>
            </Stack> 

            <Footer />
        </>
    )
}

