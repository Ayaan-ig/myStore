import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { changeErrMessage } from "./AuthFormCredentials";
const loginURL = 'https://test-vercel-two-sage.vercel.app/api/v1/auth/login'
const registerURL = 'https://test-vercel-two-sage.vercel.app/api/v1/auth/register'

export const login = createAsyncThunk('auth/login',async (userData,thunkAPI)=>{
    try {
        const user = await axios.post(loginURL,userData);
        console.log(user.data);
        return user.data
    } catch (error) {
        thunkAPI.dispatch(changeErrMessage(error.response.data.message));
        throw new Error('login failed');
    }

})

export const register = createAsyncThunk('auth/register',async (userData,thunkAPI)=>{
    try {
        const user = await axios.post(registerURL,userData);
        console.log(user.data);
        return user.data
    } catch (error) {
        console.log('here register error msg')
        console.log(error)
        console.log(error.response.data.err.errors)
        
        //because there is only one error: email one....password error handled in frontend only
        thunkAPI.dispatch(changeErrMessage(error.response.data.err.errors.email.message));


        throw new Error('register failed');
    }

})


const userSlice = createSlice({
    name:'user',
    initialState:{
        isLoading: false,
        loggedIn: false,
        userName: '',

    },
    reducers:{
        logout: (state)=>{
            state.userName = '';
            state.isLoading = false;
            state.loggedIn = false;
            localStorage.removeItem('token');
        },
        
    }
    ,
    extraReducers:(builder)=>{
        //login builders
        builder.addCase(login.pending,(state)=>{
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled,(state,action)=>{
            
            // console.log(action);
            state.isLoading = false;
            state.loggedIn = true;

            state.userName = action.payload.user;
            localStorage.setItem('token',action.payload.token)
        });

        builder.addCase(login.rejected,(state)=>{
            state.isLoading = false
        });

        //register builders
        builder.addCase(register.pending,(state)=>{
            state.isLoading = true;
            console.log('im coming here and stuck(pending state)');
        });
        builder.addCase(register.fulfilled,(state,action)=>{
            console.log('successfully registered');
            console.log(action.payload.user);
            // console.log(action);
            state.isLoading = false;
            state.loggedIn = true;

            state.userName = action.payload.user;
            localStorage.setItem('token',action.payload.token)
        });

        builder.addCase(register.rejected,(state)=>{
            console.log('failed to REGISTER!!!!');
            state.isLoading = false
        });
        
    }

})


export const {logout} = userSlice.actions
export default userSlice.reducer