import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Drawer1 from './components/drawer';
import Tabs1 from './components/tabs';
import Home from './components/home';
import AllRoutes from './components/allroutes';
import { Box } from '@chakra-ui/react';
function App(){
  return (
  <>
  <Box  >
    <Navbar/> 
   <Tabs1/> 
  </Box>
   
  <AllRoutes/>
 </>
  );
}

export default App;
