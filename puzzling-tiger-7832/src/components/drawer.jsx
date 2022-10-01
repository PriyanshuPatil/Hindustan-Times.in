import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
  } from '@chakra-ui/react' ;
import React from 'react';
// import {} from React ;
import {Button,useDisclosure} from '@chakra-ui/react';
function Drawer1(props) {
    const {text_drawer}=props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
 let userdata={
  
    name:"Priyanshu Patil",
    gmail:"pantuugurjar@gmail.com"
 }

  return (
    <>
      <Button m={'auto'} mt={'-10px'} pt={'10px'} _hover={{color:"blue.200"}} ref={btnRef} colorScheme='#011e29' background={'#011e29'} onClick={onOpen}>
       {text_drawer}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'sm'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={'white'}  />
          <Box h={['60%','60%','60%','60%','50%','40%']} backgroundColor="#011e29" color='white'>
            <Box fontSize={70} textAlign='center' borderRadius={"200px"} margin={'auto'} mt="40px" border={"1px solid green"} w={"110px"} h={"110px"} color={"#011e29"} background={"#FFF5F5"}>
                {userdata.name[0]}
            </Box>
            <Box fontSize={22} textAlign='center' mt={"10px"}>{userdata.name}</Box>
            <Box fontSize={16} textAlign='center' mt={"2px"}>{userdata.gmail}</Box>
            <Box fontSize={14} margin={"auto"} mt={"20px"} p={"5px 30px"} w={"150px"} textAlign='center' borderRadius={"20px"}  border={"1.5px solid white"}>
                Edit Profile
            </Box>
          </Box>
 
          <DrawerBody fontSize={18} textAlign='left' fontWeight={'600'} background={'#FFFFF0'}>
            <Box _hover={{color:"#6B46C1"}} border={'1px solid grey'} p={"10px "} mt={"10px"} background={'white'}>Start 15 Days Free Trial</Box>
            <Box _hover={{color:"#6B46C1"}} border={'1px solid grey'} p={"10px "} mt={"10px"} background={'white'}>Saved Articles</Box>
            <Box _hover={{color:"#6B46C1"}} border={'1px solid grey'} p={"10px "} mt={"10px"} background={'white'}>Following</Box>
            <Box _hover={{color:"#6B46C1"}} border={'1px solid grey'} p={"10px "} mt={"10px"} background={'white'}>My Reads</Box>
            <Box _hover={{color:"#6B46C1"}} border={'1px solid grey'} p={"10px "} mt={"10px"} background={'white'}>My Offers</Box>
            <Box _hover={{color:"#6B46C1"}} border={'1px solid grey'} p={"10px "} mt={"10px"} background={'white'}>Sign out</Box>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Drawer1 ;