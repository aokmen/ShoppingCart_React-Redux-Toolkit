import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getData = createAsyncThunk(
    "basketSlice/getData",

    async() => {
        const {data} = await axios(
            "https://fakestoreapi.com/products"
        )
        return data;
    }

)
export const getCategory = createAsyncThunk(
    "basketSlice/getCategory",

    async() => {
        const {data} = await axios(
            "https://fakestoreapi.com/products/categories"
        )
        return data;
    }

)

export const basketSlice = createSlice({
    name : "basketSlice",
    initialState:{
        shopping:[],
        category:[],
        addProduct:[],
        // setProduct:[],
        loading:true,
        error:"",
        basket:false,
        inc:0,
        dex:""
        
    },
    reducers:{
        incFunction:(state)=> {
            state.inc +=1
        },
        decFunction:(state)=> {
            state.inc -=1
        },
        updateInc:(state)=>{
            state.inc=state.addProduct.length
        }
        ,
        // setProducts: (state,action) => {
        //     const compine = action.payload;
        //     state.setProduct = new Set(compine)
        // },
        removeProduct: (state,action) => {
            const idRemove = action.payload;
            state.addProduct = state.addProduct.filter(item=>item.id !== idRemove)
        },
        addProducts: (state, action) => {
            // Gönderilen ürünü sepete ekleyin
            state.addProduct.push(action.payload);
            
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getData.pending, (state) => {
            state.loading = true;
          })
         
          .addCase(getData.fulfilled, (state, action) => {
            // console.log(action);
            state.shopping = action.payload;
            state.loading = false;
          })
          .addCase(getCategory.fulfilled, (state, action) => {
            // console.log(action);
            state.category = action.payload;
            state.loading = false;
          })
          // veri gelmesinde hata olduğunda
          .addCase(getData.rejected, (state, action) => {
            // console.log(action.error.message);
            state.error = action.error.message;
          })
          
      },
      
    });

export const {incFunction,decFunction,updateInc,addProducts,removeProduct} = basketSlice.actions

export default basketSlice.reducer