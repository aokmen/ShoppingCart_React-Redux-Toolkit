import React from 'react'
import cartGif from "../assets/shoppingcart.gif"
import Button from '@mui/material/Button';
import { ShoppingCartRounded } from "@mui/icons-material";
import {useSelector} from "react-redux"

const FilledBasketTotal = () => {
    const {addProduct} = useSelector((state) => state.basketSlice);
  return (
    <div style={{ marginLeft:"20px"}}>
       <img src={cartGif} alt="cartGif" style={{width:"400px"}}/>
       <div style={{display:"flex", justifyContent:"center",
       flexDirection:"column",
       alignItems:"center", flexWrap:"wrap"}}>
        <div><h1>Subtotal: <span style={{color:"darkred"}}>{(addProduct.reduce((acc,item)=>acc +=Number((item.price)),0)).toFixed(2)}$</span></h1></div>
        <Button
              variant="contained"
              startIcon={<ShoppingCartRounded />}
              color="error"
              sx={{marginTop:"20px"}}
            >
           
              Empty Cart
            </Button>
       </div>
    </div>
  )
}

export default FilledBasketTotal