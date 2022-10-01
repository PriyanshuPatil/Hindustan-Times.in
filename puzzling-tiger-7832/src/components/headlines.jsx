import {Box, Container,Image,Grid,Flex,Spacer, Stack, Heading, Button, GridItem,Spinner} from '@chakra-ui/react' ;
import {useEffect,useState} from 'react';

const getData = async (page,query) => {
    try {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2022-09-01&sortBy=publishedAt&apiKey=2f5aa1b71cd94e81a58f88223aaeccf2&pageSize=12&page=${page}`
      );
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
 export default function Headline(props) {
    let {q}=props;
    let want=q ;
    const [loading, setLoading] = useState(false);
    const [News, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setquery] = useState(want);
    useEffect(() => {
      fetchAndUpdateData(page);
    }, [page]);
  
    const fetchAndUpdateData = async (page = 1) => {
      try {
        setLoading(true);
        const data = await getData(page,query);
        setNews(data.articles);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
  
    const handlePageChange = (changeBy) => {
      setPage(page + changeBy);
    };
  
    if (loading) {
      return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl' 
      mt='50%'
      ml='50%'
    />;
    }
  
    return (
        <Box w={'99%'}  m={'auto'} mt={'50px'} p={'10px'}>
            <Heading fontSize={['13px','17px','19px','20px']} margin={'auto'} mb={['8px','10px','20px','30px']} textAlign={'center'} >{query}</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={6}>
         
          {News.map((el) => (
         <GridItem boxShadow='dark-lg' p='6' rounded='md' bg='white' gap={20} >
            <Heading fontSize={['11px','13px','15px','16px']}>{el.title}</Heading>
            <Box mt={['5px','6px','8px','10px']} fontSize={['10px','11px','12px','13px']}>{el.source.name} News</Box>
            <Box mt={['5px','6px','8px','10px']} fontSize={['10px','11px','12px','13px']}>{el.publishedAt}</Box>
          </GridItem>
          ))}
        </Grid>
     </Box>
    );
  }