import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { images } from './images'
const MachineView = () => {

  return (
        <Grid container >
          <Grid sx={{display:'flex', alignItems:'center' ,justifyContent:'center'}} item xs={12} lg={4} >
          <Box
                component="img"
                sx={{display:'flex', maxHeight:{xs:'417px',md:'500px',lg:'600px'},maxWidth:{sm:'300px',md:'420px',xs:'250px'}}}
                alt="vend1"
                src={images.vend2}
                
                />
          </Grid>
          <Grid sx={{display:'flex', alignItems:'center' ,justifyContent:'center'}} item xs={12} lg={4}>
          <Box  display='flex' flexDirection='column' alignItems='center' >
                <Typography  sx={{fontSize:'22px' ,mb:{lg:8,xs:3,sm:6},fontWeight:'500',color:"#14AF78"}}>No Complicated Dispense Process</Typography>
    
                <Typography component='div' sx={{fontSize:'28px' ,fontWeight:'500' }}>
                Just <Typography  sx={{fontSize:'28px' ,mb:{lg:8,xs:3,sm:6},fontWeight:'500',color:"#F31A04", display:'inline-block'}}>Scan , Grab and Go..</Typography>
                </Typography>
          </Box>
            
          </Grid>
          <Grid sx={{display:'flex', alignItems:'center' ,justifyContent:'center'}} item xs={12} lg={4}>
          <Box
                component="img"
                sx={{display:'flex', maxHeight:{xs:'417px',md:'500px',lg:'600px'},maxWidth:{sm:'300px',md:'420px',xs:'250px'}}}
                alt="vend1"
                src={images.vendL}
               
                />
          </Grid>
        </Grid>
  )
}

export default MachineView