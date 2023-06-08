import { Box, Image } from '@chakra-ui/react'
import logo from '../assets/logo.png'


const Logo = (props) => {
  return (
    <Box {...props}>
        <Image src={logo} />
    </Box>
  )
}

export default Logo
