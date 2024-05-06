import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import navSlice from "./features/NavBar/navSlice";
import userSlice from "./features/Auth/userSlice";
import AuthFormCredentialsSlice from "./features/Auth/AuthFormCredentials";
import cartSlice from "./features/cart/cartSlice";


export const store = configureStore({
    reducer:{
        products:productReducer,
        navbar: navSlice,
        user: userSlice,
        authForm: AuthFormCredentialsSlice,
        cart: cartSlice
    }
})