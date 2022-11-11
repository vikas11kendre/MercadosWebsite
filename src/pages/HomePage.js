import React from 'react'


import Home from "../components/Home";

import Feed from "../components/Feed";
import MachineView from "../components/MachineView";
import { Grid } from "@mui/material";
import DispenseProcess from "../components/DispenseProcess";
import FoodItems from "../components/FoodItems";
import Features from "../components/Features";
import FeedBack from "../components/FeedBack";
import Workspace from '../components/Workspace';
import { images } from '../components/images';


const HomePage = () => {
  const data =[
        
    {name:'Automatic Refund ',url:images.f1 ,text:'Wide range of customizable options according to your business needs.'},
    {name:'Just Plug & Play ',url:images.f2 ,text:'No Installation Required .     Easy To Use 100% Approachable Hassle Free Buying'},
    {name:'Branding & Designing ',url:images.f3 ,text:'Comes with attractive vinly to make your place little more happning'},
    {name:'On- Site Maintenance ',url:images.f4 ,text:'All sevices and repair can be done on site Quick servise support'},
    {name:'Multiple Payment Options ',url:images.f5 ,text:'Never miss a sale with inbuilt cashless payment methods. Paytm, UPI (PhonePe, Google Pay)'},
    {name:'Security  Updates',url:images.f6 ,text:'Powered by Vendserve Smart Vend 2.0 Simple interface with regular updated'},
    
  ]   
  const point=["Satisfies Hunger Between Meals",
                "Keeps Energy Level High And Mind Alert",
                "Prevent Over-Eating At Meals",
                "Increases Productivity Among Employees",
                "A 24 x 7 Availability Of Refreshments"];
    
    const title=" Making Your Workplace A Little More Happening ";
    const subtitle="Boost Your Employee Engement";
    const img=images.think;
    const bottomText="A little spice to your workplace, snacking with high quality refreshments"
  return (
    
    <Grid container >
      <Grid id='Home' sx={{p:"12px"}} item xs={12}>
        <Home />
      </Grid>
      <Grid  sx={{p:"12px" ,backgroundColor:'#CD0000',mb:"80px"}} item xs={12}>
        <Feed />
      </Grid>
      <Grid sx={{p:"12px",mb:3}} item xs={12} >
        <MachineView/>
      </Grid>
      <Grid sx={{p:"12px",mb:"40px" ,mt:"20px"}} item xs={12} >
        <DispenseProcess/>
      </Grid>
      
      <Grid  sx={{p:"12px",mb:"40px"}} item xs={12} >
        <Workspace point={point} title={title} subtitle={subtitle} img={img} bottomText={bottomText} />
      </Grid>
      <Grid  sx={{p:"12px",mb:"40px"}} item xs={12} >
        <FoodItems />
      </Grid>

      <Grid id="Features" sx={{p:"12px"}} item xs={12} >
        <Features data={data}/>
      </Grid>
      
      
    </Grid>
    
      
      
    
  )
}

export default HomePage