import { Flex, Heading, Box, Button, Text, Spacer, HStack, Stack } from '@chakra-ui/react'
import NavbarContainer from './NavbarContainer'
import Logo from './Logo'
import { useState } from 'react'
import {
    CloseIcon,
    HamburgerIcon,
} from '@chakra-ui/icons'

const Navbar = (props) => {
    
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <NavbarContainer isOpen={isOpen} {...props} >
        <Logo
            w={{base: '150px'}}
            color={'white'}
        />
        <MenuToggle isOpen={isOpen} toggle={toggle} />
        <MenuItems isOpen={isOpen} />
    </NavbarContainer>
  )
}

const MenuItems = ({ isOpen }) => {
    const buttonStyles = {
        bg: 'blue.400',
        color: 'white',
        _hover: {
            bg: 'white',
            color: 'blue.500'
        }
    }

    return (
      <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
      >
          <Stack
              spacing={6}
              align='center'
              justify={["center", "center", "flex-end", "flex-end"]}
              direction={["column", "column", "row", "row"]}
              pt={[4, 4, 0, 0]}
          >
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Services</Text>
              <Text>Technologies</Text>
              <Button sx={buttonStyles} w={{base: '100%'}}>Get in Touch</Button>
          </Stack>
      </Box>
    )
  }

  const MenuToggle = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon/> }
      </Box>
    )
  }

export default Navbar
