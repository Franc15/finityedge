import { Box, Flex, Image, Link, Spacer } from '@chakra-ui/react'
import React from 'react'
import Logo from '/logo.png'

const Navbar = () => {
  return (
      <Flex color='white' align='center'>
        <Image src={Logo} alt='logo' />
        <Spacer />
        <Link px={7} href='#'>Home</Link>
        <Link px={7} href='#'>About</Link>
        <Link px={7} href='#'>What We Do</Link>
        <Link px={7} href='#'>Technologies</Link>
        <Link px={7} href='#'>Contact</Link>
      </Flex>
  )
}

export default Navbar
