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
    <NavbarContainer {...props} >
        <Logo
            w={{base: '150px'}}
            color={["gray.800", "gray.800", "primary.500", "primary.500"]}
        />
        <MenuToggle isOpen={isOpen} toggle={toggle} />
        <MenuItems isOpen={isOpen} />
    </NavbarContainer>
  )
}

const MenuItems = ({ isOpen }) => {
    const buttonStyles = {
        bg: 'brand.200',
        color: 'white',
        _hover: {
            bg: 'white',
            color: 'brand.100'
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
              pt={[2, 2, 0, 0]}
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
