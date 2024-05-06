import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts,getCategorizedProducts,getProductCategories,getOneProduct } from "./asyncFunctions";


const productSlice = createSlice({
    name: 'products',
    initialState:{
        isLoadingProducts: true,
        isLoadingProduct: true,
        isLoadingCategories : true,
        isLoadingPCategories: true,
        productsData: [],
        productCategories: [],
        categorizedProducts : [],
        oneProduct : []

    },
    extraReducers: (builder)=>{
        //for all products
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoadingProducts = false;
            state.productsData = action.payload;

        });
        builder.addCase(getAllProducts.rejected,(state)=>{
            state.isLoadingProducts = false;
            console.log('rejected bro..');
            state.productsData = [];
        });
        builder.addCase(getAllProducts.pending,(state)=>{
            state.isLoadingProducts = true;
        });

        //for categories

        builder.addCase(getProductCategories.fulfilled,(state,action)=>{
            state.isLoadingCategories = false;
            state.productCategories = action.payload;

        });
        builder.addCase(getProductCategories.rejected,(state)=>{
            state.isLoadingCategories = false;
            console.log('rejected bro..');
            state.productCategories = [];
        });
        builder.addCase(getProductCategories.pending,(state)=>{
            state.isLoadingCategories = true;
        });

        //for categorized products

        builder.addCase(getCategorizedProducts.fulfilled,(state,action)=>{
            state.isLoadingPCategories = false;
            state.categorizedProducts = action.payload;

        });
        builder.addCase(getCategorizedProducts.rejected,(state)=>{
            state.isLoadingPCategories = false;
            console.log('rejected bro..');
            state.categorizedProducts = [];
        });
        builder.addCase(getCategorizedProducts.pending,(state)=>{
            state.isLoadingPCategories = true;
        });
        

        //for one product

        builder.addCase(getOneProduct.fulfilled,(state,action)=>{
            state.isLoadingProduct = false;
            console.log('here i am')
            state.oneProduct = action.payload[0];
            console.log(action.payload[1])
            state.categorizedProducts = action.payload[1];
            state.isLoadingPCategories = false;

        
        });
        builder.addCase(getOneProduct.rejected,(state)=>{
            state.isLoadingProduct = false;
            console.log('rejected bro..');
            state.oneProduct = [];
        });
        builder.addCase(getOneProduct.pending,(state)=>{
            state.isLoadingProduct = true;
            // state.isLoadingPCategories = true;

        });
        
    }
})


export default productSlice.reducer;