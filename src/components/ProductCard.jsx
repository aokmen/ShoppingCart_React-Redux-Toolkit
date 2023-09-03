import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, updateInc } from "../features/basketSlice";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({id,price,title,category,image,description}) {
  const {  shopping } = useSelector((state) => state.basketSlice);
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false);
  
  const handleExpandClick = () => { setExpanded(!expanded); };

  const handleClick = (productId) => {
    
      const selectedProduct = shopping.find((item) => item.id === productId);
      // Ürünü sepete eklemek için dispatch kullanın
      
      dispatch(addProducts(selectedProduct))
    
    dispatch(updateInc())

  };

 
  return (
    <Card sx={{ height: "500px", overflow: expanded && "auto" }} width="10px">
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="250px"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography
            variant="body2"
            color="text.secondary"
            height="80px"
            overflow="auto"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="coral"
            fontSize="18px"
            marginLeft="10px"
          >
            {price}$
          </Typography>
        </Box>
        <Typography
          paragraph
          textAlign="center"
          fontWeight="600"
          boxShadow="3px 3px 10px rgba(100,100,100,0.2)"
          padding="10px"
          sx={{cursor:"pointer"}}
          onClick={handleExpandClick}
        >
          {category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" width="280px" marginTop="-20px">
          <Typography
            paragraph
            marginTop="10px"
            marginLeft="10px"
            color="darkred"
          >
            Product Details
          </Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            label="show more"
            sx={{ color: "coral" }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
          <IconButton
            aria-label="cart"
            sx={{ marginLeft: "60px", color: "coral" }}
             onClick={(e) => handleClick(id)}
            // onClick={()=>dispatch(incFunction())}
          >
           
            <AddShoppingCartIcon />
          </IconButton>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
