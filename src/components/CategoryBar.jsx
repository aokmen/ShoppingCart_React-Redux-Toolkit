import{useState,useEffect} from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCategory } from '../features/basketSlice';
import ProductCard from './ProductCard';

const CategoryBar = () => {
  
    const dispatch=useDispatch()
   
    const {category,shopping} = useSelector((state)=>state.basketSlice)
    const [shopCategory, setShopCategory] = useState(shopping)
    useEffect (() => {
     dispatch(getCategory())
    }, [dispatch])

  const handleClick =(i) => {
   
    i==="All" ? setShopCategory(shopping) :
    setShopCategory(shopping.filter((item)=>item.category===i))
  }

  return (
   
      
     
      <Box display="flex" flexWrap="wrap" marginTop="100px" >
    <FormControl >
      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="All"
        name="radio-buttons-group"
        onClick={(e)=>handleClick(e.target.value)}
      >
        <Box position="fixed" width="100%"   display="flex" justifyContent="center" backgroundColor="white" zIndex="10" boxShadow="3px 3px 10px rgba(100,100,100,0.2)" padding="10px">
        <FormControlLabel value="All"   control={<Radio />} label="All" />
        {category?.map(i=>(
            <FormControlLabel onClick={()=>handleClick(i) } key={i} value={i} control={<Radio />} label={i} style={{textTransform: 'capitalize'}}/>
        ))}
        
      
        </Box>
      </RadioGroup>
    </FormControl>
    <Box display="flex" flexWrap="wrap" justifyContent="center" marginTop="60px">


    
            {shopCategory?.map((i) => (
              <Box key={i.id} width="300px" margin="30px">
                <ProductCard {...i} />
                
              </Box>
            ))}

          </Box>
    </Box>
          
  )
}

export default CategoryBar
