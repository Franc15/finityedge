import { Box, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'


const Logo = (props) => {
  return (
    <Box {...props}>
        {/* <Image src={logo} /> */}
        <Text fontSize='xl' fontWeight='bold'>
            Finity
            <Text color={'blue.400'} as={'span'}>
                Edge
            </Text>
        </Text>
    </Box>
  )
}

export default Logo
