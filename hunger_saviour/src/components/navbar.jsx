import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Homepage_1 from "../homepage/homepage_1";
import logo from "../logo/Logo.png";
import Login from "./login";
import Sign_up from "./sing_up";

export default function Navbar() {
    return(
        <>
            <Box position="fixed" zIndex="1" w="100%">
                <Flex h="80px" backgroundColor="white" fontFamily="sans-serif">
                    <Box w="20%" >
                        <Link to="/">
                            <Image src={logo} alt="Logo" w="150px" ml="30px" />
                        </Link>
                    </Box>
                    <Flex w="60%" justifyContent="center" alignItems="center" gap="30px" fontWeight="bold" fontSize="sm">
                        <Text _hover={{color:"#4074ff"}}>Plans & Menu</Text>
                        <Text _hover={{color:"#4074ff"}}>How it Works</Text>
                        <Text _hover={{color:"#4074ff"}}>Gifts</Text>
                        <Text _hover={{color:"#4074ff"}}>Refer a Friend</Text>
                        <Text _hover={{color:"#4074ff"}}>Help</Text>
                    </Flex>
                    <Flex w="20%" justifyContent="center" alignItems="center" gap="30px" fontWeight="bold" fontSize="sm">
                        <Link to="/login">
                            <Text _hover={{color:"#4074ff"}}>Login</Text>
                        </Link>
                        <Link to="/sign_up">
                            <Button colorScheme="blue" >Sign Up</Button>
                        </Link>
                    </Flex>
                </Flex>
            </Box>
            <Box h="80px"></Box>
        </>
    )
}