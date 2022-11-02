
import { Container } from "@mui/system";

import Home from "./Home";
import Navbar from "./Navbar";
import Feed from "./Feed";
import MachineView from "./MachineView";
import { Grid } from "@mui/material";
import DispenseProcess from "./DispenseProcess";
import Product from "./Product";
import Features from "./Features";
import FeedBack from "./FeedBack";
import Footer from "./Footer";



function App() {
  return ( 
    <Container sx={{p:'0'}} >
    <Grid container >
      <Grid sx={{p:"12px"}} item xs={12}>
        <Navbar/>
      </Grid>
      <Grid id='Home' sx={{p:"12px"}} item xs={12}>
        <Home />
      </Grid>
      <Grid  sx={{p:"12px" ,backgroundColor:'#CD0000'}} item xs={12}>
        <Feed />
      </Grid>
      <Grid sx={{p:"12px"}} item xs={12} >
        <MachineView/>
      </Grid>
      <Grid sx={{p:"12px"}} item xs={12} >
        <DispenseProcess/>
      </Grid>
      <Grid id="Products" sx={{p:"12px"}} item xs={12} >
        <Product />
      </Grid>
      <Grid id="Features" sx={{p:"12px"}} item xs={12} >
        <Features />
      </Grid>
      <Grid id="Contact Us" sx={{p:"12px"}} item xs={12} >
        <FeedBack />
      </Grid>
      <Grid  item xs={12} >
        <Footer/>
      </Grid>
    </Grid>
    
      
      
      
    </Container>
    
  );
}

export default App;
