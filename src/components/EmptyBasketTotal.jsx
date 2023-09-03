import React from 'react'
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom"
const EmptyBasketTotal = () => {
    const navigate = useNavigate()
  return (
    <Box >
        <Typography  marginTop="100px" fontSize="2rem" >
        You have no items in your shopping cart,
        <span style={{color:"red", cursor:"pointer"}} onClick={()=>navigate("/")}> start adding some!</span>
        </Typography>
     
    </Box>
  )
}

export default EmptyBasketTotal