import React from 'react'
import { Button,  Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CardMedia from '@mui/material/CardMedia';

const Feed = () => {
  return (
    
    <Grid  sx={{mt:2 , backgroundColor:'#CD0000',color:'white' }} container>
      <Grid  item xs={12} sm={6} >
        <Box sx={{p:'10px'}}>
          <Typography variant='h4' sx={{fontSize:'30px',fontWeight:'900',mb:{lg:8,xs:3,sm:6}}}>
          Start Your Vending Business
          </Typography>
          <Typography variant='h4' sx={{fontSize:{sm:'18px',xs:'16px'} ,mb:{lg:8,xs:3,sm:6},fontWeight:'400'}}>
          24*7 availability of items for snacking need for customers
          </Typography>
          
          <Typography variant='h4' sx={{fontSize:{sm:'18px',xs:'16px'} ,mb:{lg:8,xs:3,sm:6},fontWeight:'400',color:"white"}}>
          Instant gratification product without paying for delivery charges or waiting time for delivery
          </Typography>
          
          <Button  variant="contained" sx={{textTransform: 'none', borderRadius:'22px',background: 'linear-gradient(180deg, #E87D00 0%, #E22201 100%)'}}>
          <Typography variant='subtitle1' sx={{fontSize:{sm:'18px',xs:'14px'} ,fontWeight:'600',color:"white"}}>
          <Link href='https://www.youtube.com/watch?v=3eHk7Z_gz5Q' sx={{fontSize:{sm:'18px',xs:'14px'} ,fontWeight:'600',color:"white" ,textDecoration:'none'}}> Know More</Link>
          </Typography>
          </Button>
        </Box>
        
      </Grid>
      <Grid container sx={{ display:'flex',backgroundColor:'#CD0000', justifyContent:{md:'center'} ,alignItems:'center'}} item xs={12} sm={6}>
          {/* <Card  display='flex'> */}
          <CardMedia sx={{pr:'12px', mb:'12px', border:'none',Width:{lg:'500px',md:'250px',sm:'200px',xs:'400px'},height:{lg:'380px',md:'300px',sm:'250px',xs:'220px'}}}
          component="iframe"
          src="https://www.youtube.com/embed/3eHk7Z_gz5Q"
          frameBorder="0"
          allowFullScreen={true}
          />
          {/* </Card> */}
            
        
      </Grid>
      
    </Grid>
  )
}

export default Feed