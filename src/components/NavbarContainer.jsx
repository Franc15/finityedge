import { Flex } from '@chakra-ui/react'

const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={2}
      bg={'brand.100'}
      color={'white'}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavbarContainer
