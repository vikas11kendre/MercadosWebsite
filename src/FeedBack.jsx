import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { images } from './images'

const FeedBack = () => {
  return (
    <Grid id="contact" sx={{mt:'60px'}} container >
        <Grid item xs={12} md={6}>
               <Typography sx={{fontSize:'30px',fontWeight:'700',color:'#14A06F'}}>Ready to Get Started?
                </Typography> 
                <Typography sx={{fontSize:'18px',fontWeight:'500',color:'#494949' ,mt:'20px',mb:"20px"}}>

                We are happy to help you with all your vending needs.<br/> Simply fill the form and our experts will call you.
                </Typography> 
                <TextField
                sx={{mb:'20px'}}
                  required
                  fullWidth
                  name="Name"
                  label="Name"
                  type="text"
                  id="Name"
                  
                />
                <TextField
                    sx={{mb:'20px'}}
                  required
                  fullWidth
                  name="Phone Number"
                  label="Phone Number"
                  type="text"
                  id="Phone Number"
                  
                />
                <TextField
                sx={{mb:'20px'}}
                  required
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="email"
                  
                />
                <Button
              type="submit"
             
              variant="contained"
              sx={{textTransform: 'none', borderRadius:'22px',background: 'linear-gradient(180deg, #E87D00 0%, #E22201 100%)'}}
            >
              <Typography variant='subtitle1' sx={{fontSize:{sm:'18px',xs:'14px'} ,fontWeight:'600',color:"white"}}>
              <Link  sx={{fontSize:{sm:'18px',xs:'14px'} ,fontWeight:'600',color:"white",textDecoration:'none'}} href='https://www.youtube.com/watch?v=3eHk7Z_gz5Q'>Request a Call</Link> 
          </Typography>
            </Button>
        </Grid>
        <Grid sx={{justifyContent:'center' ,alignItems:'center' ,display:'flex'}} item xs={12} md={6}>
            <Box
            component="img"
            src={images.store}
            alt='store'
            sx={{maxWidth:'350px',maxHeight:"350px"}}
             />
        </Grid>
        
    </Grid>
  )
}

export default FeedBack