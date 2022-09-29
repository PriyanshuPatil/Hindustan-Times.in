import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react' ;
function Tabs1(){
    return (
       <Tabs w={'80%'} m={'auto'} isFitted variant='enclosed'>
  <TabList>
    <Tab>Home</Tab>
    <Tab>Latest</Tab>
    <Tab>India</Tab>
    <Tab>World</Tab>
    <Tab>Mumbai</Tab>
    <Tab>Entertainment</Tab>
    <Tab>Cricket</Tab>
    <Tab>Lifestyle</Tab>
    <Tab>Astrology</Tab>
    <Tab>Editorials</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
    <TabPanel>
      <p>4!</p>
    </TabPanel>
    <TabPanel>
      <p>5!</p>
    </TabPanel>
    <TabPanel>
      <p>6!</p>
    </TabPanel>
    <TabPanel>
      <p>7!</p>
    </TabPanel>
    <TabPanel>
      <p>8!</p>
    </TabPanel>
    <TabPanel>
      <p>9!</p>
    </TabPanel>
    <TabPanel>
      <p>10!</p>
    </TabPanel>
   
  </TabPanels>
</Tabs> 
    )
}

export default Tabs1 ;