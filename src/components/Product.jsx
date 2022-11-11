import { Button, Grid ,Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { images } from './images'

const Product = () => {
    const Products =[
        
        {name:'Snacks & Beverages',url:images.product1},
        {name:'Fresh Food',url:images.product2},
        {name:'Medicines & Health ',url:images.product3},
        {name:'Stationary',url:images.product4}
    ]
  return (
    <Box sx={{pt:'30px', display:'flex',justifyContent:'center' ,textAlign:'center', flexDirection:'column'}}>
        <Typography sx={{fontSize:{sm:'40px',xs:'32px'} ,color:'#208B5C' , fontWeight:'800'}}>
        Best Suited For All Products
        </Typography>
        <Grid sx={{mt:'60px'}} container spacing={2} >
            {Products.map((i)=>
                
                 (
                    <Grid key={i.name} item xs={12} sm={6} md={3}>
                        <Box sx={{mb:'30px',display:'flex',justifyContent:'center', alignItems:'center' ,flexDirection:"column"}}>
                            <Box
                                component='img'
                                src={i.url}
                                alt={i.name}
                                sx={{width:'210px', height:"150px" ,pb:'20px'}}
                            />
                           <Button disabled sx={{width:"220px",background: '#656565' ,textTransform:'none' ,borderRadius:"18px" }}><Typography sx={{color:'white' ,fontSize:"18px" ,fontWeight:"500" ,pl:'5px' ,pr:'5px'}}>{i.name}</Typography></Button> 
                        </Box>

                    </Grid>
               )
            )}
        </Grid>
                 
    </Box>

  )
}

export default Product