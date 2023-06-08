import { Box, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'

function Services() {
    return (
        <VStack m={24} spacing={16} textAlign='center' >
            <Heading as='h1' size='2xl' color='gray.600'>
                Services
            </Heading>
            <Text w='63%' color='gray.500'>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual mockups.
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and visual mockups.
            </Text>
            <Grid templateColumns='repeat(3, 1fr)' gap={10} w='80%'>
                <GridItem w='100%' rounded='3xl' shadow='2xl' overflow='hidden'
                    borderWidth='1px' _hover={{ transform: "scale(1.03)", cursor: "pointer" }} >
                    <Box
                        bgImage="url('/webdev.jpg')"
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        height='200'
                        mb='10'
                    ></Box>
                    <VStack m={15} spacing={4}>
                        <Heading as='h3' size='xs' fontWeight='bold' color='gray.500' letterSpacing={2}>
                            WEB DEVELOPMENT
                        </Heading>
                        <Text color='gray.700'>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual mockups.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem w='100%' rounded='3xl' shadow='2xl' overflow='hidden'
                    borderWidth='1px' _hover={{ transform: "scale(1.03)", cursor: "pointer" }} >
                    <Box
                        bgImage="url('/mobiledev.jpg')"
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        height='200'
                        mb='10'
                    ></Box>
                    <VStack m={15} spacing={4}>
                        <Heading as='h3' size='xs' fontWeight='bold' color='gray.500' letterSpacing={2}>
                            MOBILE DEVELOPMENT
                        </Heading>
                        <Text color='gray.700'>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual mockups.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem w='100%' rounded='3xl' shadow='2xl' overflow='hidden'
                    borderWidth='1px' _hover={{ transform: "scale(1.03)", cursor: "pointer" }} >
                    <Box
                        bgImage="url('/ux.jpg')"
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        height='200'
                        mb='10'
                    ></Box>
                    <VStack m={15} spacing={4}>
                        <Heading as='h3' size='xs' fontWeight='bold' color='gray.500' letterSpacing={2}>
                            UI/UX DESIGN
                        </Heading>
                        <Text color='gray.700'>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual mockups.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem w='100%' rounded='3xl' shadow='2xl' overflow='hidden'
                    borderWidth='1px' _hover={{ transform: "scale(1.03)", cursor: "pointer" }} >
                    <Box
                        bgImage="url('/marketing.jpg')"
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        height='200'
                        mb='10'
                    ></Box>
                    <VStack m={15} spacing={4}>
                        <Heading as='h3' size='xs' fontWeight='bold' color='gray.500' letterSpacing={2}>
                            DIGITAL MARKETING
                        </Heading>
                        <Text color='gray.700'>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual mockups.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem w='100%' rounded='3xl' shadow='2xl' overflow='hidden'
                    borderWidth='1px' _hover={{ transform: "scale(1.03)", cursor: "pointer" }} >
                    <Box
                        bgImage="url('/software.jpg')"
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        height='200'
                        mb='10'
                    ></Box>
                    <VStack m={15} spacing={4}>
                        <Heading as='h3' size='xs' fontWeight='bold' color='gray.500' letterSpacing={2}>
                            SOFTWARE SOLUTIONS
                        </Heading>
                        <Text color='gray.700'>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual mockups.
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem w='100%' rounded='3xl' shadow='2xl' overflow='hidden'
                    borderWidth='1px' _hover={{ transform: "scale(1.03)", cursor: "pointer" }} >
                    <Box
                        bgImage="url('/consulting.jpg')"
                        bgPosition='center'
                        bgRepeat='no-repeat'
                        bgSize='cover'
                        height='200'
                        mb='10'
                    ></Box>
                    <VStack m={15} spacing={4}>
                        <Heading as='h3' size='xs' fontWeight='bold' color='gray.500' letterSpacing={2}>
                            TECH CONSULTING
                        </Heading>
                        <Text color='gray.700'>
                            Lorem ipsum is placeholder text commonly used in the graphic,
                            print, and publishing industries for previewing layouts and visual mockups.
                        </Text>
                    </VStack>
                </GridItem>

            </Grid>
        </VStack>
    )
}

export default Services