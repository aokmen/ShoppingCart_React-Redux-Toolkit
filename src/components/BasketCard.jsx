import * as React from "react";

import {
  Button,
  Card,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { ShoppingCartRounded } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { addProducts, removeProduct, updateInc } from "../features/basketSlice";

export default function BasketCard({
  id,
  price,
  title,
  image,
}) {
  const { shopping } = useSelector((state) => state.basketSlice);
  const dispatch = useDispatch();

  const handleClick = (productId) => {
   
    const selectedProduct = shopping.find((item) => item.id === productId);
    // Ürünü sepete eklemek için dispatch kullanın
    dispatch(addProducts(selectedProduct));;
    dispatch(updateInc());

  };
  const removeClick = (id) => {
    dispatch(removeProduct(id))
    dispatch(updateInc());
  }

  return (
  
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        margin:"15px"
      }}
    >
     
      <Card 
        >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding:"15px"
          }}
        >
     
            
            <CardMedia
              sx={{ objectFit: "contain",width:"150px",height:"100px" }}
              component="img"image={image}
              alt="Paella dish"              
            />

          <Box
            sx={{
              
              boxShadow: "0 0 3px rgba(232, 130, 22, 0.3)",
              padding: "10px",
              borderRadius: "10px",
              marginLeft:"10px"
            }}
          >
            <Typography variant="body2" height="80px" overflow="auto" width="250px"  display="flex"
              alignItems="center">
              {title}
            </Typography>
          </Box>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"space-around",
            gap: "10px",
            padding: "10px",
          }}
        >
          <div>
     
            <Typography
              variant="body2"
              color="orange"
              fontSize="18px"
              textAlign="center"
            >
              {price}$
            </Typography>
          </div>

          <Box  marginRight="10px">
            <Button
              variant="outlined"
              startIcon={<DeleteForeverIcon />}
              color="error"
              sx={{marginRight:"10px"}}
              onClick={()=>removeClick(id)}
            >
         
              Remove
            </Button>
            <Button
              variant="outlined"
              startIcon={<ShoppingCartRounded />}
              color="secondary"
              onClick={() => handleClick(id)}
            >
           
              Add
            </Button>
          </Box>
        </div>
      </Card>
      
      
    </Box>
    
  
  );
}
