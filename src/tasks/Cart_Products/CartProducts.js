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
import { useNavigate } from 'react-router-dom';
import { addcartdata } from '../../slices/cartData';
import { useDispatch,useSelector } from 'react-redux';


import './CartProducts.css'
import axios from 'axios';

const CartProducts = () => {
    const[products,setproducts]=useState([]);
    const cartdata=useSelector(state=>state.cartdata.data);
    const length=cartdata.length;
    console.log("cartlength",length);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        const getdata=async()=>{
            await axios.get('https://fakestoreapi.com/products')
            .then((res)=>setproducts(res.data));
        }
        getdata();
    },[])
  return (
    <div style={{width:'100%'}}>
      <MenuItem onClick={()=>navigate('/cart')}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={length} color="error">
            <MailIcon />
        </Badge>
        </IconButton>
        <p>Cart Items</p>
    </MenuItem>
    <div className='cartproducts'>
    {products && products.map((item,index)=>{
        return(
            <Card sx={{ maxWidth: 300,marginTop:5 }} >
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
                    <Button onClick={()=>dispatch(addcartdata(item))}>Add To Cart</Button>
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

export default CartProducts