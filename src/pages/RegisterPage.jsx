import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../features/Auth/userSlice';
import {useNavigate} from 'react-router-dom'
import { changeErrMessage,changeName,changeEmail,changePassword } from '../features/Auth/AuthFormCredentials';

//components imports

import { ErrorText } from './LoginPage';
//

function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading,loggedIn} = useSelector((state)=>state.user);
    const {errorMessage,name,email,password} = useSelector((state)=>state.authForm);
    if (isLoading) {
        return <h2>Loading.....</h2>
    }
    if (!isLoading && loggedIn) {
        dispatch(changeName(''))
        dispatch(changeEmail(''));
        dispatch(changePassword(''));

        navigate('/');

    }

  return (
    <OuterCont>
        <RegisterFormCont>

                <RegisterText>Enter cradentials to Register</RegisterText>
                <NameCont>

                <InputName placeholder='Name'  id='name' onChange={(e)=>{
                    dispatch(changeName(e.target.value));
                    dispatch(changeErrMessage(''))
                }} value={name} type='email' />

                </NameCont>

                <EmailCont>

                {/* <InputEmailLabel htmlFor='email'>enter your email</InputEmailLabel> */}
                <InputEmail placeholder='Email' id='email' onChange={(e)=>{
                    dispatch(changeEmail(e.target.value));
                    dispatch(changeErrMessage(''))
                }} value={email} type='email' />

                </EmailCont>
                <PassCont>

                {/* <InputPasswordLabel htmlFor='password'>enter your Password</InputPasswordLabel> */}
                <InputPassword placeholder='Password' id='password' onChange={(e)=>{
                    dispatch(changePassword(e.target.value))
                    dispatch(changeErrMessage(''))
                }} value={password} type='password' />

                </PassCont>
            

                <RegisterButton type='submit' onClick={(e)=>{
                    e.preventDefault()
                    if (!name) {
                        dispatch(changeErrMessage('please provide name'))
                        return
                    }
                    if (!email) {
                            dispatch(changeErrMessage('please provide email'));
                            return
                        }
                    if (!password) {
                        dispatch(changeErrMessage('please provide password'))
                        return
                    }
                    if (password.length < 6) {
                        dispatch(changeErrMessage('Password should be more than 6x characters'))
                        return
                        
                    }
                    dispatch(register({name,email,password}));
                    
                    if (isLoading) {
                        dispatch(changeErrMessage('Loading...'));
                        
                    }
                    if (!isLoading && !loggedIn) {
                        dispatch(changeErrMessage(errorMessage))
                    }
                    }}>Register</RegisterButton>
            
            
        <ErrorText>{errorMessage}</ErrorText>
        </RegisterFormCont>
        
    </OuterCont>
  )
}

export default RegisterPage

const OuterCont = styled.div`
    height: 100vh;
    background-color: #d8d8d8;
    padding-top: 7rem;

    
`
const RegisterFormCont = styled.form`
    display: flex;
    flex-direction: column;
    width: 25rem;
    background-color: white;
    margin: 0rem auto;
    height: 27.5rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
`
const RegisterText = styled.p`
    font-size: 1.5rem;
    color: #292828;
    margin: 1rem auto;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

`


const NameCont = styled.div`
    margin: 1rem auto;
    position: relative;
    
`
const InputName = styled.input`
    width: 22rem;
    height: 3rem;
    font-size: 16px;
    background-color: transparent;
    outline: none;
    border: 1px solid grey;
    border-radius: 7px;
    font-size: 1.1rem;
    padding: 3px 0;
    padding-left: 6px;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "slnt" 0;   

    &:focus{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    
    }
    
`

const EmailCont = styled.div`
    margin: 1rem auto;
    position: relative;
    
`


const InputEmail = styled.input`
    width: 22rem;
    height: 3rem;
    font-size: 16px;
    background-color: transparent;
    outline: none;
    border: 1px solid grey;
    border-radius: 7px;
    font-size: 1.1rem;
    padding: 3px 0;
    padding-left: 6px;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "slnt" 0; 
    &:focus{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    
    }
    
    `
const PassCont = styled.div`
    margin: 1rem auto;

`

const InputPassword = styled.input`
     width: 22rem;
    height: 3rem;
    font-size: 16px;
    background-color: transparent;
    outline: none;
    border: 1px solid grey;
    border-radius: 7px;
    font-size: 1.1rem;
    padding: 3px 0;
    padding-left: 6px;

    &:focus{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    
    }
`


const RegisterButton = styled.button`
     margin: 1rem auto;
    width: 80%;
    height: 3rem;
    padding: 10px 18px;
    background-color: #354ff6;
    border: 1px solid #8e8e8e;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    gap: 6px;
    color: white;
    &:hover{
      border: 1px solid #343434;
      background-color: #4a61f8;
      gap: 9px;
    }
    &:active{
      border: 1px solid #c3c3c3;
      background-color: #6175fc;

        } 
`