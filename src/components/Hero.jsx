import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Skeleton,
    SkeletonText
  } from '@chakra-ui/react';
  import { useState, useEffect } from 'react'
  
  export default function Hero() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [])

    const showSkeleton = () => {
        return (
            <Stack direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Skeleton h='40px'>
                                Tech Solutions
                            </Skeleton>
                        </Heading>
                        <SkeletonText>Lorem ipsum is placeholder text commonly used in the graphic,</SkeletonText>
                        <SkeletonText>Lorem ipsum is placeholder text commonly used in the graphic,</SkeletonText>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                            <Skeleton w='150px' h='40px'>Button</Skeleton>
                            <Skeleton w='150px' h='40px'>Button</Skeleton>
                        </Stack>
                    </Stack>
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Skeleton w='100%' h='100%'>image</Skeleton>
                </Flex>
            </Stack>
        )
    }

    const showContent = () => {
        return (
            <Stack direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                    <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                        content: "''",
                        width: 'full',
                        // height: useBreakpointValue({ base: '20%', md: '30%' }),
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'blue.400',
                        zIndex: -1,
                        }}>
                        Tech Solutions
                    </Text>
                    <br />{' '}
                    <Text color={'blue.400'} as={'span'}>
                        for Startups & Small Businesses
                    </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                    Lorem ipsum is placeholder text commonly used in the graphic, 
                    print, and publishing industries for previewing layouts and visual mockups.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                    <Button
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                        bg: 'blue.500',
                        }}>
                        Get in Touch
                    </Button>
                    <Button rounded={'full'}>See our Process</Button>
                    </Stack>
                </Stack>
                </Flex>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Image
                    alt={'Tech guys'}
                    objectFit={'cover'}
                    borderRadius='md'
                    src={
                    'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                />
                </Flex>
            </Stack>
        )
    }
        
    return isLoading ? showSkeleton() : showContent()
  }