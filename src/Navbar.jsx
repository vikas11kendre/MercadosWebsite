import { Box, Button, IconButton,Link, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Stack from '@mui/material/Stack';
import { images } from './images';


const Navbar = () => {
   
  return (
    <Box sx={{mb:3}}>
         <Box  sx={{display:"flex",mt:1, justifyContent: {md:'space-evenly'} }} >
            <Toolbar disableGutters >
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                // onClick={handleDrawerToggle}
                sx={{ mr:'20px',display: { sm: 'none' } }}
                >
                <MenuIcon sx={{color:"black"}}/>
                </IconButton>
                <Box
                component="img"
                sx={{ height: 50  }}
                alt="Logo"
                src={images.logo}
                />
                
            </Toolbar>
            <Stack direction="row" sx={{marginLeft:'auto',alignItems:'center' , display:{xs:'none',sm:'flex'}}} spacing={3}>
                <Link href="#Home"  sx={{textDecoration:'none' , ml:'20px'}}>
                  <Typography  sx={{color:'#5D5D5D',fontSize:'18px' ,fontWeight:'500'}} >
                  Home
                  </Typography></Link> 
                  <Link href="#Products"  sx={{textDecoration:'none' , ml:'20px'}}>
                  <Typography  sx={{color:'#5D5D5D',fontSize:'18px' ,fontWeight:'500'}} >
                  Products
                  </Typography></Link> 
                  <Link href="#Features"  sx={{textDecoration:'none' , ml:'20px'}}>
                  <Typography  sx={{color:'#5D5D5D',fontSize:'18px' ,fontWeight:'500'}} >
                  Features
                  </Typography></Link> 
                  <Link href="#Contact Us"  sx={{textDecoration:'none' , ml:'20px'}}>
                  <Button  sx={{textTransform: 'none',  borderRadius:'22px',background: '#CD0000',
                    '&:hover': {
                    backgroundColor: '#CD0000',
                    borderColor: '#CD0000',
                    boxShadow: 'none',
                  },}}>
                  <Typography  sx={{color:'white',fontSize:'18px' ,fontWeight:'500' ,pl:{lg:'5px'},pr:{lg:'5px'}}} >
                  Contact Us
                  </Typography>
                  </Button></Link> 
                </Stack>
                
           
        </Box>
    </Box>
  )
}

export default Navbar