import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex,Grid, GridItem } from '@chakra-ui/react' ;
import { NavLink } from "react-router-dom";
function Tabs1(){
    return (
      
       <Tabs w={'80%'}  m={'auto'} isFitted variant='enclosed' fontWeight={'700'} background="white">
  <TabList >
    <Grid templateColumns={['repeat(3, 1fr)','repeat(5, 1fr)','repeat(10, 1fr)']} fontWeight={'600'} gap={6} width="90%" m={"auto"}>
    <GridItem><Tab ><NavLink to={'/'} >Home</NavLink></Tab></GridItem>
    <GridItem><Tab><NavLink to={'/Latest'} >Latest</NavLink></Tab></GridItem>
    <GridItem> <Tab><NavLink to={'/India'} >India</NavLink></Tab></GridItem>
    <GridItem><Tab><NavLink to={'/World'} >World</NavLink></Tab></GridItem>
    <GridItem><Tab><NavLink to={'/Mumbai'} >Mumbai</NavLink></Tab></GridItem>
    <GridItem><Tab><NavLink to={'/Entertainment'} >Entertainment</NavLink></Tab></GridItem>
    <GridItem>  <Tab><NavLink to={'/Lifestyle'} >Lifestyle</NavLink></Tab></GridItem>
    <GridItem><Tab><NavLink to={'/Cricket'} >Cricket</NavLink></Tab></GridItem>
    <GridItem> <Tab><NavLink to={'/Astrology'}>Astrology</NavLink></Tab></GridItem>
    <GridItem><Tab><NavLink to={'/Editorials'} >Editorials</NavLink></Tab></GridItem>
   </Grid>
  </TabList>
</Tabs> 
    )
}

export default Tabs1 ;