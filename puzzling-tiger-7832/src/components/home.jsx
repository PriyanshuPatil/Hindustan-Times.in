import Fetch from './fetch';
import Headline from './headlines';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
function Home(){
return (
    <>
    <Grid templateColumns='1fr 2fr 1fr' gap={6} w={'85%'} margin={'auto'}>
  <GridItem><Headline q='Cricket News'/></GridItem>
  <GridItem><Fetch q="India" /></GridItem>  
  <GridItem><Headline q='Mumbai News'/></GridItem>
  </Grid>
    </>
)
}

export default Home;