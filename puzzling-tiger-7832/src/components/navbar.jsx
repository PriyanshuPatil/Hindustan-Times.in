import {Box, Container,Image,Grid,Flex,Spacer, Stack} from '@chakra-ui/react'
import { HamburgerIcon,SearchIcon } from "@chakra-ui/icons";
import {  } from '@chakra-ui/icons' ;
import Dateis from './date';
import Drawer1 from './drawer';
import {IoGameControllerOutline,IoNewspaper,IoPersonSharp,IoCaretDown} from "react-icons/io5" ;
function Navbar() {

  return (

  <Box  backgroundColor="#011e29" color='white' padding={5} fontSize={[ 'sm: "80px"','md: "150px"','lg: "700px"']} >
   
    <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']} fontWeight={'600'} gap={6} width="90%" m={"auto"}>
      <Box  margin='auto' fontSize={['10px','10px','15px','15px']}  >
      <Flex gap={'10'}>
         <Box _hover={{color:"blue.200"}}> 
           <Flex gap={'2'}>
            
            <Box margin={'auto'}><HamburgerIcon></HamburgerIcon></Box>
            <Box>Explore</Box> 
           </Flex>
        </Box>
       <Box _hover={{color:"blue.200"}}>
          <Flex gap={'2'}>
            <Box margin={'auto'}><SearchIcon></SearchIcon></Box>
            <Box>Search</Box>
          </Flex>
        </Box>
        </Flex>
        <Box display={"flex"} gap="2" mt={'10px'}>
      <Dateis/>   |   New Delhi 22°C
        </Box>
      </Box>

      <Box margin='auto' width={[300,380,400,400]} >
      <Image  objectFit='cover' src={'https://www.hindustantimes.com/res/images/ht-logo.svg'} alt={'Hindustan Times News'} />
      </Box>
      <Box margin='auto' fontSize={['13px','14px','15px','16px']}>
      <Flex gap={'5'} >
      
       <Box _hover={{color:"blue.200"}}>
          <Flex gap={'2'}>
            <Box margin={'auto'}><Box as={IoGameControllerOutline} /></Box>
            <Box>Games</Box>
          </Flex>
        </Box>
        <Box _hover={{color:"blue.200"}}>
          <Flex gap={'2'}>
            <Box margin={'auto'}><Box as={IoNewspaper} /></Box>
            <Box>E-Paper</Box>
          </Flex>
        </Box>
        <Box _hover={{color:"blue.200"}} >
          <Flex gap={'-2'}>
            <Box margin={'auto'}><Box as={IoPersonSharp} /></Box>
            <Drawer1 text_drawer="My Account"/>
            <Box  margin={'auto'}><Box as={IoCaretDown} /></Box>
          </Flex>
        </Box>
        </Flex>
      </Box>
      
      </Grid>
 
  </Box>
  );
}

export default Navbar;