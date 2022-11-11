import { Grid } from '@mui/material'
import React from 'react'
import FeatureHome from '../components/FeatureHome'
import Features from '../components/Features'
import { images } from '../components/images'
import Product from '../components/Product'
import Workspace from '../components/Workspace'
const FeaturesPage = () => {
  const data =[
        
    {name:'Available (24*7) ',url:images.h1 ,text:'Available at any time of the hour ( 24×7 ).Your bottom line improves with Higher Employee Productivity.'},
    {name:'Get your produt in 60sec',url:images.h2 ,text:'Saves time for ordering/pickup, available anytime '},
    {name:"Doesnt require downloading apps",url:images.h3 ,text:'Simple interface with Smart vend 2.0 powered byVendserves.Remotely Operated'},
    {name:'Multiple Payment Options ',url:images.h4 ,text:'Never miss a sale with inbuilt cashless payment methods. Paytm, UPI (PhonePe, Google Pay), '},
    {name:'Hygiene and convenient ',url:images.h5 ,text:'Offers fresh and tested food from trusted brands Increases the productivity among employees '},
    {name:"15.6 Inch Touch Screen",url:images.h6 ,text:'Easy to Use ,It comes with an inbuilt large touchscreen for easy accessibility and hassle free usage'},
    
]
const point=['Get all updates on our dashboard',
            'check real-time inventory in your dashboard',
              'Get instant refund in case of failure',
              'demand analysis helping refill what customers buy more',
              'No need of any apps'


            
]
  return (
    <Grid container >
        <Grid  sx={{p:"12px" ,mb:"40px"}} item xs={12}>
        <FeatureHome />
      </Grid>
      <Grid  sx={{p:"12px",mb:"80px"}} item xs={12} >
        <Product />
      </Grid>
      <Grid  sx={{p:"12px"}} item xs={12} >
        <Features data={data}/>
      </Grid>
      <Grid  sx={{p:"12px"}} item xs={12} >
        <Workspace point={point} img={images.dash} title="Real-time inventory Management"  subtitle="Smart Dash board"/>
      </Grid>
    </Grid>
    
  )
}

export default FeaturesPage