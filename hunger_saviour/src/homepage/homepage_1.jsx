import { Box, Flex, Stack, Image, Text, Button, Input, Link, Heading, Grid } from "@chakra-ui/react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import logo from "../logo/Logo.png";
import storage from "../Storage_image.jpg";

export default function Homepage_1() {
    return(
        <>
            <Navbar />

            <Stack fontFamily="sans-serif">
                <Flex>
                    <Box w="60%">
                        <Image w="100%" src="https://www.themealkitcomparison.com/wp-content/uploads/2020/12/oven-ready-hello-fresh.jpg" alt="Image" />
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

            {/* How its Works */}

            <Stack fontFamily="sans-serif" m="2% auto 2% auto">
                <Heading fontSize="5xl" color="#333333" m="20px auto 20px auto">How it works</Heading>
                <Box>
                    <Grid templateColumns="repeat(4,20%)" justifyContent="space-between" w="90%" m="auto">
                        <Box textAlign="center" lineHeight="30px">
                            <Box h="200px" display="flex" justifyContent="center" alignItems="center"><Image w="60%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg" alt="Meals" /></Box>
                            <Text color="#333333" fontWeight="bold" fontSize="xl">Choose Your Meals</Text>
                            <Text fontSize="sm">Rotating menu of 50+ balanced dishes.</Text>
                        </Box>
                        <Box>
                            <Box h="200px" display="flex" justifyContent="center" alignItems="center"><Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg" alt="Deliver" /></Box>
                            <Text color="#333333" fontWeight="bold" fontSize="xl">We Cook & Deliver</Text>
                            <Text fontSize="sm">Fully-cooked meals sent fresh, never frozen.</Text>
                        </Box>
                        <Box>
                            <Box h="200px" display="flex" justifyContent="center" alignItems="center"><Image w="60%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg" alt="Reheat" /></Box>
                            <Text color="#333333" fontWeight="bold" fontSize="xl">Chill & Reheat</Text>
                            <Text fontSize="sm">Refrigerate meals & reheat in 3 minutes.</Text>
                        </Box>
                        <Box>
                            <Box h="200px" display="flex" justifyContent="center" alignItems="center"><Image w="60%" src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62f258373288e30c31c265b2_Group%2023.svg" alt="Repeat" /></Box>
                            <Text color="#333333" fontWeight="bold" fontSize="xl">Eat & Repeat</Text>
                            <Text fontSize="sm">Change meals, skip a week or cancel at any time.</Text>
                        </Box>
                    </Grid>
                </Box>
            </Stack>

            {/* On the Menu */}

            <Box mt="4%" pos="relative">
                <Image src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/9/2/0/hnyglzcarr_199.jpg.rend.hgtvcom.966.725.suffix/1393013558191.jpeg" alt="Image" w="100%" />
                <Grid bgColor="white" pos="absolute" top="10%" left="20%" w="60%" justifyItems="left" p="20px 30px">
                    <Heading fontSize="5xl">On the menu</Heading>
                    <Text fontSize="xl" mt="10px" align="left">Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</Text>
                    <Grid templateColumns="repeat(3,1fr)" templateRows="repeat(2,1fr)" gap="20px" mt="30px" p="10px">
                        <Box  transition="transform 0.3s" _hover={{transform: "scale(1.1)"}} textAlign="left">
                            <Image borderRadius="20px" w="100%" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb765dff2da0c2e1fb_635823f4ce4929328b1f96f9_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg" alt="Image" />
                            <Text fontSize="xl" fontWeight="bold" mt="10px" >BBQ Bison Burger</Text>
                            <Text color="#678387">610 Cal | Gluten Free |</Text>
                            <Text color="#678387">Single-Serve</Text>
                        </Box>
                        <Box  transition="transform 0.3s" _hover={{transform: "scale(1.1)"}} textAlign="left">
                            <Image borderRadius="20px" w="100%" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8cd4f9d87ba86916_635823f4ce492977d91f974a_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg" alt="Image" />
                            <Text fontSize="xl" fontWeight="bold" mt="10px" >Sausage Baked Penne</Text>
                            <Text color="#678387">470 Cal | Gluten Free |</Text>
                            <Text color="#678387">Single-Serve</Text>
                        </Box>
                        <Box  transition="transform 0.3s" _hover={{transform: "scale(1.1)"}} textAlign="left">
                            <Image borderRadius="20px" w="100%" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb5ae22f4680ff53d8_635823f4ce492947161f9738_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg" alt="Image" />
                            <Text fontSize="xl" fontWeight="bold" mt="10px" >Homestyle Chicken</Text>
                            <Text color="#678387">560 Cal | Gluten Free |</Text>
                            <Text color="#678387">Single-Serve</Text>
                        </Box>
                        <Box  transition="transform 0.3s" _hover={{transform: "scale(1.1)"}} textAlign="left">
                            <Image borderRadius="20px" w="100%" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb8b1f5aa9b139be56_635823f4ce492904901f973e_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg" alt="Image" />
                            <Text fontSize="xl" fontWeight="bold" mt="10px" >Cauliflower Shell Beef Bolognese</Text>
                            <Text color="#678387">490 Cal | Gluten Free |</Text>
                            <Text color="#678387">Single-Serve</Text>
                        </Box>
                        <Box  transition="transform 0.3s" _hover={{transform: "scale(1.1)"}} textAlign="left">
                            <Image borderRadius="20px" w="100%" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb7be30f1df3054aa2_635823f4ce492958261f9755_production-meal-image-29e2b6e1-12af-405d-8b33-91e19b2a0fef.jpeg" alt="Image" />
                            <Text fontSize="xl" fontWeight="bold" mt="10px" >Tricolor Beef Lasagna</Text>
                            <Text color="#678387">640 Cal | Gluten Free |</Text>
                            <Text color="#678387">Single-Serve</Text>
                        </Box>
                        <Box  transition="transform 0.3s" _hover={{transform: "scale(1.1)"}} textAlign="left">
                            <Image borderRadius="20px" w="100%" src="https://assets-global.website-files.com/5d03b4e13011831ae4624b37/636a66bb684a20a3c8466513_635823f4ce492969991f9772_production-meal-image-25f9ce2d-ca21-499e-a140-8d59b4733ec2.jpeg" alt="Image" />
                            <Text fontSize="xl" fontWeight="bold" mt="10px" >Flame-Seared Top Blade Steak</Text>
                            <Text color="#678387">610 Cal | Gluten Free |</Text>
                            <Text color="#678387">Single-Serve</Text>
                        </Box>
                    </Grid>
                    <Button colorScheme="blue" w="100%" m="30px auto 10px auto">View Plans & Menu</Button>
                </Grid>
            </Box>

            {/* Flexible Plans */}

            <Stack w="85%" m="2% auto 2% auto" textAlign="center" fontFamily="sans-serif">
                <Image src={logo} alt="Logo" w="200px" m="1% auto auto auto"/>
                <Heading>Flexible plans that fit your life</Heading>
                <Box><Text w="60%" m="1% auto 2% auto">We offer anywhere from 4–12 meals per week, with meals as low as $9.58 each. The bigger your box, the more you’ll save—and you can always pause or change your plan at any time.</Text></Box>
                <Box><Grid templateColumns="repeat(5,18%)" justifyContent="space-between" m="2% auto 2% auto">
                    <Box>
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png" alt="Delicious" />
                        <Text color="#357471" fontSize="3xl" fontWeight="bold" mt="10px">4-5 Meals</Text>
                    </Box>
                    <Box>
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png" alt="Delicious" />
                        <Text color="#357471" fontSize="3xl" fontWeight="bold" mt="10px">6-7 Meals</Text>
                    </Box>
                    <Box>
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png" alt="Delicious" />
                        <Text color="#357471" fontSize="3xl" fontWeight="bold" mt="10px">8-9 Meals</Text>
                    </Box>
                    <Box>
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png" alt="Delicious" />
                        <Text color="#357471" fontSize="3xl" fontWeight="bold" mt="10px">10-11 Meals</Text>
                    </Box>
                    <Box>
                        <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png" alt="Delicious" />
                        <Text color="#357471" fontSize="3xl" fontWeight="bold" mt="10px">12 Meals</Text>
                    </Box>
                </Grid></Box>
                <Text>Shipping and tax added at checkout. Prices are rounded for your convenience.</Text>
                <Box><Button colorScheme="blue" m="1% auto 2% auto">Sign Up Now</Button></Box>
            </Stack>

            {/* About */}

            <Stack w="90%" m="3% auto 3% auto" fontFamily="sans-serif">
                <Grid templateColumns="40% 60%" alignItems="center">
                    <Box w="130%" backgroundColor="white" pos="relative" h="300px" textAlign="left" p="20px 40px 20px 0">
                        <Heading fontSize="5xl" color="#343434">We believe eating right should be easy for everyone.</Heading>
                        <Text m="15px auto 30px auto" fontSize="lg">Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</Text>
                        <Button colorScheme="blue">Learn More</Button>
                    </Box>
                    <Image w="100%" src="https://www.tasteofhome.com/wp-content/uploads/2019/08/freshly-food-delivery-e1661810009964.jpg?resize=768,513" alt="Image" />
                </Grid>
            </Stack>

            <Stack w="90%" m="5% auto 3% auto" fontFamily="sans-serif">
                <Grid templateColumns="60% 40%" alignItems="center">
                    <Image w="100%" src={storage} alt="Image" />
                    <Box w="140%" backgroundColor="white" pos="relative" right="40%" h="500px" textAlign="left" p="30px 30px 30px 50px">
                        <Heading fontSize="5xl">Healthy Meals Delivered Weekly</Heading>
                        <Input placeholder="hunger@saviour.com" p="25px 25px 25px 20px" fontSize="lg" m="30px auto 20px auto"/>
                        <Input placeholder="zip" p="25px 25px 25px 20px" fontSize="lg" mb="20px"/>
                        <Button colorScheme="blue" w="50%" mb="40px">Get Started!</Button>
                        <Text fontSize="sm">Already have an account? <Link color="blue">Log in.</Link></Text>
                        <Text fontSize="sm">By continuing, you agree to our <Link color="grey">Terms</Link> and <Link color="grey">Privacy Policy.</Link> & will receive emails from Hunger Saviour</Text>
                    </Box>
                </Grid>
            </Stack>

            {/* Company Logos */}

            <Box mb="2%">
                <Grid templateColumns="repeat(6,13%)" justifyContent="space-around" p="20px" alignItems="center">
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e435aee2e3a4ab03e6f_The_Huffington_Post_logo.svg" alt="Huffington" />
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e412d98cd166a6c84e6_logo-header.64f3bdc15b1f321829f9f30c7853a1469f469d71.svg" alt="SELF" />
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e436b26e00a240533b1_Entrepreneur-01.svg" alt="Enterprenuer" />
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e432759db28ffaf924f_w-g-logo-black.svg" alt="Well+Good" />
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523f552759db186baf93d2_techcrunch-seeklogo.com%20%5BConverted%5D.svg" alt="TechCrunch" />
                    <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5f523e434bbecc1909457f48_logo-header.aeb2e510354d524c42a87c5d0a97d0a73c5d7581.svg" alt="Glamour" />
                </Grid>
            </Box>

            <Footer />
        </>
    )
}

