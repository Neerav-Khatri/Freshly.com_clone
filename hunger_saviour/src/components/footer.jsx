import { Box, Text, Stack, Image, Grid } from "@chakra-ui/react";
import logo from "../logo/Logo.png";

export default function Footer() {
    return (
        <>

            <Stack h="400px" borderTop="1px solid grey">
                <Grid h="300px" w="70%" m="auto" templateColumns="repeat(4,1fr)" textAlign="left" p="20px">
                    <Box>
                        <Image src={logo} alt="Logo" w="80%"/>
                    </Box>
                    <Box lineHeight="30px">
                        <Text fontWeight="bold" fontSize="lg" mb="20px">Company</Text>
                        <Text>Careers</Text>
                        <Text>Contact Us</Text>
                        <Text>Press</Text>
                        <Text>Terms</Text>
                        <Text>Privacy</Text>
                        <Text>Affiliations</Text>
                        <Text>Partnerships</Text>
                    </Box>
                    <Box lineHeight="30px">
                        <Text fontWeight="bold" fontSize="lg" mb="20px">Learn More</Text>
                        <Text>Plan & Menu</Text>
                        <Text>Why Hunger Saviour?</Text>
                        <Text>Gifts</Text>
                        <Text>FAQs</Text>
                        <Text>Blog</Text>
                        <Text>Students</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="bold" fontSize="lg" mb="10px">Join Us</Text>
                        <Grid templateColumns="repeat(4,1fr)" w="80%" m="auto" mb="40px">
                            <Image w="30px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f52423bbc67c09879c5a19b_5d795c37fedbb6017d824b02_icons8-facebook-old-30.jpg" alt="Facebook"/>
                            <Image w="30px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f52423ad92101de48f410c7_5d10dfc0ef515f74b875a42c_icons8-instagram-50.jpg" alt="Instagram"/>
                            <Image w="30px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f52423bd050163202b341e8_5d10dfc00442bfc99d3d6828_icons8-twitter-filled-50.jpg" alt="Twitter"/>
                            <Image w="30px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f52423a6b26e039d505425e_5d10dfbfef515faad975a42b_icons8-pinterest-filled-50.jpg" alt="Pinterest"/>
                        </Grid>
                        <Image w="150px" mb="10px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d6439d4fb92e7630e46976b_Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Apple App Store"/>
                        <Image w="150px" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5d643dd558306bfe1df5ef8b_google-play-badge.png" alt="Google Play Store"/>
                    </Box>
                </Grid>
            </Stack>

        </>
    )
}