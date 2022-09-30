import {Box, Container,Image,Grid,Flex,Spacer, Stack, Heading, Button, GridItem,Spinner} from '@chakra-ui/react' ;
import {useEffect,useState} from 'react';

const getData = async (page,query) => {
    try {
      let res = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&from=2022-08-30&sortBy=publishedAt&apiKey=1e91a62a8e6042faa19aa2d4480a8568&pageSize=5&page=${page}`
      );
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  
 export default function Fetch(props) {
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
        <Box w={'95%'} m={'auto'} mt={'50px'} p={'10px'}>
             <Heading fontStyle={'italic'} color={'red'} fontSize={['22px','25px','30px','35px']} margin={'auto'} mb={['8px','10px','20px','30px']} textAlign={'center'} >{query}</Heading>
            <Grid templateColumns='repeat(1, 1fr)' gap={6}>
         
          {News.map((el) => (
         <GridItem boxShadow='dark-lg' p='6' rounded='md' bg='white' gap={20}>
            <Heading fontSize={['13px','15px','18px','20px']}>{el.title}</Heading>
            <Box mt={['5px','6px','8px','10px']} fontSize={['10px','12px','14px','16px']}>{el.source.name} News</Box>
            <Box mt={['5px','6px','8px','10px']} fontSize={['10px','12px','14px','16px']}>{el.publishedAt}</Box>
            <Image w={['200','200','250','350']} h={['200','200','250','300']} src={el.urlToImage} m={'auto'} mt={['5px','6px','8px','10px']}></Image>
          </GridItem>
          ))}
        </Grid>
        <Box margin={'auto'} width={['100px','150px','200px','250px']} mt={['10px','10px','15px','20px']}>
        <Button  background={'blue'} color={'white'} disabled={page === 1} onClick={() => handlePageChange(-1)}>
          PREV
        </Button>
        <Button ml={['5px','6px','8px','10px']}>{page}</Button>
        <Button  ml={['5px','6px','8px','10px']} background={'blue'} color={'white'} onClick={() => handlePageChange(1)}>NEXT</Button>
     </Box>
     </Box>
    );
  }