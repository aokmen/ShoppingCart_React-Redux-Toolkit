import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
  


const Navbar = () => {

  const navigate = useNavigate()
  const {inc} = useSelector((state)=>state.basketSlice)


    const darkTheme = createTheme({
        palette: {
          
          primary: {
            main: '#ffffff',
           
          }, 
        },
      });
  
    return (
        <ThemeProvider theme={darkTheme}>
          
          <Box backgroundColor="coral" width="100%" height="100px" position="fixed" top="0" zIndex="10"></Box>
          <Box sx={{ flexGrow: 1 , position:"fixed", width:"100%", top:"0", zIndex:"10"}}>
        <AppBar position="static">
          <Toolbar>
           
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' },cursor:"pointer" }}
              onClick={()=>navigate("/")}
            >
              My Shopping
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: {  md: 'flex' } }}>
             
             
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={()=>navigate("/basket")}
              >
                <Badge badgeContent={inc} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
           

            </Box>
           
          </Toolbar>
        </AppBar>
        
      
      </Box>
      </ThemeProvider>
    );
}

export default Navbar



    
      
