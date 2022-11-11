import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import { images } from './images'

const FeedBack = () => {
  const [data,setData]=useState({name:"",phone:"",email:""});
  
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(data)
  };
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
                  value={data.name}
                  onChange={(e)=>handleChange(e)}
                 
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  id="Name"
                  
                />
                <TextField
                    sx={{mb:'20px'}}
                    value={data.phone}
                    onChange={(e)=>handleChange(e)}
                 
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="text"
                  id="Phone Number"
                  
                />
                <TextField
                sx={{mb:'20px'}}
                onChange={(e)=>handleChange(e)}
                value={data.email}
                  
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  id="email"
                  
                />
                <Button
              type="submit"
              onClick={()=> window.location.replace( `https://wa.me/918949452373?text=Name${data.name}%20email${data.email}%20number${data.phone}` )}
             
              variant="contained"
              sx={{textTransform: 'none', borderRadius:'22px',background: 'linear-gradient(180deg, #E87D00 0%, #E22201 100%)'}}
            >
              <Typography variant='subtitle1' sx={{fontSize:{sm:'18px',xs:'14px'} ,fontWeight:'600',color:"white"}}>
              {/* <Link  sx={{fontSize:{sm:'18px',xs:'14px'} ,fontWeight:'600',color:"white",textDecoration:'none'}} href={`https://wa.me/+919359122407?text=email%20${data.email}`} >Request a Call</Link>  */}
              Request a Call
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