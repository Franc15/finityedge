import { Flex } from '@chakra-ui/react'

const NavbarContainer = ({ children, isOpen, ...props }) => {
  return (
    <Flex
      as="nav"
      align={{base: '', md: 'center'}}
      justify="space-between"
      wrap="wrap"
      w="100%"
      minH={{base: isOpen ? '100vh': 'auto', md: 'auto'}}
      mb={8}
      p={2}
      bg={'gray.900'}
      color={'white'}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavbarContainer
