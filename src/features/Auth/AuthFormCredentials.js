import { createSlice } from "@reduxjs/toolkit";

const AuthCredSlice = createSlice({
    name: 'authSlice',
    initialState:{
        name:'',
        email: '',
        password:'',
        errorMessage:''
    },
    reducers:{
        changeName: (state,action)=>{
            state.name = action.payload;
        },
        changeEmail: (state,action)=>{
            state.email = action.payload;
        },
        changePassword: (state,action)=>{
            state.password = action.payload;
        },
        changeErrMessage: (state,action)=>{
            console.log('changing error msg')
            console.log(action.payload)
            state.errorMessage = action.payload;
        },

    }
});

export const {changeName,changeEmail,changePassword,changeErrMessage} = AuthCredSlice.actions

export default AuthCredSlice.reducer