import React from 'react'
import {  useSelector } from "react-redux";
import { Box } from "@mui/material";
import EmptyBasketTotal from '../components/EmptyBasketTotal';
import BasketCard from '../components/BasketCard';
import FilledBasketTotal from '../components/FilledBasketTotal';


const Basket = () => {
  const {addProduct} = useSelector((state) => state.basketSlice);
  return (
    <Box  width="80%" margin="150px auto" display="flex" justifyContent="center" flexWrap="wrap">

    { !addProduct.length > 0 ?
    <EmptyBasketTotal/> : 
  
   
     
  	      (<><Box>{ addProduct?.map((i,id) => (
              <Box key={id} >
                <BasketCard {...i} />
                
              </Box>
            )) }
           </Box>

      <FilledBasketTotal/> </> )
  
       
}  
    </Box>
  )
}

export default Basket