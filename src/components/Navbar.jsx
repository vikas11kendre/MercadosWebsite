import { Box, Button, IconButton,Link, Toolbar, Typography,useMediaQuery , useTheme} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import BackspaceIcon from '@mui/icons-material/Backspace';
import {
  Drawer,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import React,{useState} from 'react';
import Stack from '@mui/material/Stack';
import { images } from './images';
import { useNavigate } from "react-router-dom";
import DrawerComp from './Drawer';


const Navbar = () => {
  const theme = useTheme();
  const pages = ["Home", "Features","Contact Us"];
  
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Box sx={{mb:3}}>
         <Box  sx={{display:"flex",mt:1, justifyContent: {md:'space-evenly'} }} >
            <Toolbar disableGutters >
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setOpenDrawer(!openDrawer)}
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
                <Button onClick={()=>navigate('/')}  sx={{textTransform:'none' , ml:'20px'}}>
                  <Typography  sx={{color:'#5D5D5D',fontSize:'18px' ,fontWeight:'500'}} >
                  Home
                  </Typography></Button> 
                  
                  <Button onClick={()=>navigate('/Features')} sx={{textTransform:'none' , ml:'20px'}}>
                  <Typography  sx={{color:'#5D5D5D',fontSize:'18px' ,fontWeight:'500'}} >
                  Features
                  </Typography></Button> 
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

        {isMatch&&<React.Fragment >
      <Drawer
      
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
      <Box sx={{width:'270px',height:'100vh',backgroundColor:"#252B2F",display:"flex",flexDirection:"column"}}>
        <Box sx={{display:'flex',justifyContent:"space-around",mt:2 ,flexDirection:"row",alignItems:"center"}}>
            <Box component="img" src={images.logo} alt="logo" sx={{width:"151px",maxHeight:"50px"}}/>
            <BackspaceIcon onClick={()=>setOpenDrawer(false)} sx={{height:'80px',color:'white',cursor:"pointer"}}/>
        </Box>
        <Stack direction="column" sx={{alignItems:'left' , display:'flex'}}>
                <Box onClick={()=>{navigate('/') ; setOpenDrawer(!openDrawer) }} sx={{cursor:'pointer',ml:"30px",mb:"24px",display:"flex",justifyContent:"left",mt:2 ,flexDirection:"row",alignItems:"center"}}>
                  <Box  component="img" src={images.n1} alt="nav" sx={{height:"24px" ,mr:"24px"}}/>
                  <Typography  sx={{fontSize:'24px' ,fontWeight:'400', color:"white"}} >
                    Home
                    </Typography>
                </Box>
                <Box onClick={()=>{navigate('/Features') ; setOpenDrawer(!openDrawer) }} sx={{cursor:'pointer',ml:"30px",mb:"24px",display:"flex",justifyContent:"left",mt:2 ,flexDirection:"row",alignItems:"center"}}>
                  <Box  component="img" src={images.n2} alt="nav2" sx={{height:"24px" ,mr:"24px"}}/>
                  <Typography  sx={{fontSize:'24px' ,fontWeight:'400', color:"white"}} >
                  Features
                    </Typography>
                </Box>
                
                <Box onClick={()=>{ setOpenDrawer(!openDrawer) }} component="a" href="#Contact Us"  sx={{textDecoration: 'none',cursor:'pointer',ml:"30px",mb:"24px",display:"flex",justifyContent:"left",mt:2 ,flexDirection:"row",alignItems:"center"}}>
                  <Box  component="img" src={images.n3} alt="nav3" sx={{height:"24px" ,mr:"24px"}}/>
                  <Typography  sx={{fontSize:'24px' ,fontWeight:'400', color:"white" ,ml:'6px'}} >
                  Contact Us
                    </Typography>
                </Box>
               
                
                  
                  
        </Stack>
      </Box>
      
      
        
      </Drawer>
      
    </React.Fragment>}
        
    </Box>
  )
}

export default Navbar