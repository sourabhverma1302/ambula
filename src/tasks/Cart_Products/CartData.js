import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import './CartProducts.css'
import axios from 'axios';

import { useSelector,useDispatch } from 'react-redux';
import { removefromcart } from '../../slices/cartData';

const CartData = () => {
    const dispatch=useDispatch();
    const cartdata=useSelector(state=>state.cartdata.data);
    console.log("cartdata",cartdata)
  return (
    <div style={{width:'100%'}}>
      <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
            <MailIcon />
        </Badge>
        </IconButton>
        <p>Cart Items</p>
    </MenuItem>
    <div className='cartproducts'>
    {cartdata && cartdata.map((item,index)=>{
        return(
            <Card sx={{ maxWidth: 300,marginTop:5 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={item.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {item.title.slice(0,20)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {item.description.slice(0,100)}
                    </Typography>
                    <Typography variant='h4'>₹ {item.price}</Typography>
                    <Button onClick={()=>{dispatch(removefromcart(item.id))}}>Remove From Cart</Button>
                </CardContent>
                </CardActionArea>
            </Card>
        )
    })
    }
    </div>
    </div>
    )
}

export default CartData