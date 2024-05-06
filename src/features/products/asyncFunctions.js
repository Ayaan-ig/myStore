import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('products/getAll',async ()=>{
    try {
        const resp = await axios('https://dummyjson.com/products');
        return resp.data.products;
    } catch (error) {
        console.log(error);
    }
});

export const getProductCategories = createAsyncThunk('products/getCategories',async ()=>{
    try {
        const resp = await axios('https://dummyjson.com/products/categories');
        return resp.data;
    } catch (error) {
        console.log(error);
    }
});

export const getCategorizedProducts = createAsyncThunk('products/getCategorizedProducts',async (category)=>{
    try {
        const resp = await axios(`https://dummyjson.com/products/category/${category}`);
        return resp.data.products;
    } catch (error) {
        console.log(error);
    }
});
export const getOneProduct = createAsyncThunk('products/getOneProduct',async (id)=>{
    try {
        const resp1 = await axios.get(`https://dummyjson.com/products/${id}`);
        const resp2 = await axios(`https://dummyjson.com/products/category/${resp1.data.category}`);
        return [resp1.data,resp2.data.products]
    } catch (error) {
        console.log(error);
        console.log('didnt get data');
    }
});