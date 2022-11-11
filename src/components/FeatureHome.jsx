import { Button, Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { images } from './images'

const FeatureHome = () => {
  
  return (
    <Grid  container sx={{mb:3}}>
      <Grid  sx={{mt:{lg:3,md:2}}}  item xs={12} sm={6} >
        <Box sx={{boxSizing:'border-box'}} >
          <Typography  sx={{fontSize:'50px' ,fontWeight:'800',mb:{lg:8,xs:3,sm:6} ,  color:'#535353' ,lineHeight:'60px',fontStyle:'normal',fontFamily:'Roboto'}}>
          Redefine your vending experience with vendserve Cloud

          </Typography>
          <Typography  sx={{fontSize:'28px',fontWeight:'700' , color:'#7E7E7E',mb:{lg:8,xs:3,sm:6} ,lineHeight:'35px',fontStyle:'normal',fontFamily:'Roboto'}}>
          Powered by VEND SEREVES 2.0
          </Typography>
          <Typography component='div'  sx={{fontSize:'18px' ,fontWeight:'500' }}>
          Most advanced Vending Machine Cloud and suite 
          with world-class cashless payment modes
          </Typography>
          <Button  variant="contained" sx={{textTransform: 'none',mt:"30px", borderRadius:'22px',background: 'linear-gradient(180deg, #E87D00 0%, #E22201 100%)'}}>
          <Typography variant='subtitle1' sx={{fontSize:{sm:'18px',xs:'14px'} ,fontWeight:'600',color:"white"}}>
          <Link sx={{textDecoration:'none',color:"white"}} href='#Contact Us'>Get In Touch</Link> 
          </Typography>
          </Button>
        </Box>
        
      </Grid>
      <Grid container sx={{display:'flex',flexGrow:'1',justifyContent:{lg:'center'}}} item xs={12} sm={6}>
      
      <Box
                component="img"
                sx={{display:'flex',mt:{xs:'20px' ,md:'0'}, maxHeight:{sm:'400px',md:'500px',lg:'600px'},maxWidth:{sm:'300px',md:'420px',xs:'250px'}}}
                alt="vend1"
                src={images.cloud}
             
                loading='lazyLoading'
                
                />
      </Grid>
    </Grid>
  )
}

export default FeatureHome