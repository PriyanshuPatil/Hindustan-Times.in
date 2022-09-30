import Fetch from "./fetch";
import PageNotFound from "./Pagenotfound";
import {Route,Routes} from 'react-router-dom' ;
import Home from "./home";
import SinglePageNews from "./singlenewspage";
function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
       <Route path="/Latest" element={<Fetch q="Latest" />}></Route>
        <Route path="/India" element={<Fetch q="India" />}></Route>
        <Route path="/World" element={<Fetch q="World" />}></Route>
       <Route path="/Mumbai" element={<Fetch q="Mumbai" />}></Route>
        <Route path="/Entertainment" element={<Fetch q="Entertainment" />}></Route>
        <Route path="/Lifestyle" element={<Fetch q="Lifestyle" />}></Route>
       <Route path="/Cricket" element={<Fetch q="Cricket" />}></Route>
        <Route path="/Astrology" element={<Fetch q="Astrology" />}></Route>
        <Route path="/Editorials" element={<Fetch q="Editorials" />}></Route>
      <Route
          path="/:news_page"
          element={
           <SinglePageNews/>
        }
        ></Route>
     
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    );
  }
  
  export default AllRoutes;
  