import { Container, Grid } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage.js'

import FeaturesPage from './pages/FeaturesPage';
import Footer from './components/Footer';
import FeedBack from './components/FeedBack';


function App() {
  return ( 
    <BrowserRouter>
    <Container sx={{p:'0'}} >
    <Grid container >
      <Grid sx={{p:"12px"}} item xs={12}>
        <Navbar/>
      </Grid>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      
      <Route path='/Features' element={<FeaturesPage/>}/>
    </Routes>
    <Grid id="Contact Us" sx={{p:"12px",mb:"40px"}} item xs={12} >
        <FeedBack />
      </Grid>
    <Grid  item xs={12} >
        <Footer/>
      </Grid>
    </Grid>
    </Container>
    
     
  
</BrowserRouter>
    
  );
}

export default App;
