import { Box } from '@chakra-ui/react'
import {
    CloseIcon,
} from '@chakra-ui/icons'


const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <div>X</div>}
    </Box>
  )
}

export default MenuToggle
