import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import logo from "../logo/Logo.png";

export default function Navbar() {
    return(
        <>
            <Box position="fixed" zIndex="1" w="100%">
            <Flex h="80px" backgroundColor="white" fontFamily="sans-serif">
                <Box w="20%" >
                    <Image src={logo} alt="Logo" w="150px" ml="30px" />
                </Box>
                <Flex w="60%" justifyContent="center" alignItems="center" gap="30px" fontWeight="bold" fontSize="sm">
                    <Text _hover={{color:"#4074ff"}}>Plans & Menu</Text>
                    <Text _hover={{color:"#4074ff"}}>How it Works</Text>
                    <Text _hover={{color:"#4074ff"}}>Gifts</Text>
                    <Text _hover={{color:"#4074ff"}}>Refer a Friend</Text>
                    <Text _hover={{color:"#4074ff"}}>Help</Text>
                </Flex>
                <Flex w="20%" justifyContent="center" alignItems="center" gap="30px" fontWeight="bold" fontSize="sm">
                    <Text _hover={{color:"#4074ff"}}>Login</Text>
                    <Button colorScheme="blue" >Sign Up</Button>
                </Flex>
            </Flex>
            </Box>
        </>
    )
}