import {Box, Container,Image} from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import {  } from '@chakra-ui/icons'
function Navbar() {
  return (
  <Box backgroundColor="#011e29" color='white'padding={5}>
    <Container border='2px solid white' >
      <Box>
        <Box>
          <Box></Box>
          <Box></Box>
        </Box>
        <Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
      <Box>
      <Image src={'https://www.hindustantimes.com/res/images/ht-logo.svg'} alt={'Hindustan Times News'} />
      </Box>
      <Box></Box>
    </Container>
  </Box>
  );
}

export default Navbar;