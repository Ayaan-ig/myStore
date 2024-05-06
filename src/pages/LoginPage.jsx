import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/Auth/userSlice';
import {useNavigate} from 'react-router-dom'
import { changeErrMessage,changeEmail,changePassword } from '../features/Auth/AuthFormCredentials';
import { BeatLoader } from 'react-spinners';
import { BarLoaderCont } from './ProductDetails';

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading,loggedIn} = useSelector((state)=>state.user);
    const {errorMessage,email,password} = useSelector((state)=>state.authForm);
    if (isLoading) {
        return <BeatLoaderCont>
                <BeatLoader />
            </BeatLoaderCont>
    }
    if (!isLoading && loggedIn) {
        dispatch(changeEmail(''));
        dispatch(changePassword(''));

        navigate('/');

    }
  return (
    <OuterCont>

        <LoginFormCont>

            <LoginText>Please Login to Continue</LoginText>
            <EmailCont>

                {/* <InputEmailLabel htmlFor='email'>enter your email</InputEmailLabel> */}
                <InputEmail placeholder='Enter your email to Login' id='email' onChange={(e)=>{
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
                <LoginButton type='submit' onClick={(e)=>{
                    e.preventDefault()
                    if (!email) {
                        dispatch(changeErrMessage('Please provide email!'));
                        return
                    }
                    if (!password) {
                        dispatch(changeErrMessage('Please provide password!'))
                        return
                    }   
                    dispatch(login({email,password}));
            
                    if (isLoading) {
                        dispatch(changeErrMessage('Loading...'));
                        
                    }
                    if (!isLoading && !loggedIn) {
                        dispatch(changeErrMessage(errorMessage))
                    }
                    
                }}> <p>Log in</p></LoginButton>
                <ErrorText>{errorMessage}</ErrorText>
            </LoginFormCont>

    </OuterCont>
  )
}

export default LoginPage

const OuterCont = styled.div`
    height: 100vh;
    background-color: #d8d8d8;
    padding-top: 7rem;

    
`
const LoginFormCont = styled.form`
    display: flex;
    flex-direction: column;
    width: 25rem;
    background-color: white;
    margin: 0rem auto;
        height: 24rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const LoginText = styled.p`
    font-size: 1.5rem;
    color: #292828;
    margin: 1rem auto;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

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
    transition: all 0.3s;

       

    &:focus{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    
        &::placeholder{
        color: #abaaaa;
    }
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
    transition: all 0.3s;


    &:focus{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    
        &::placeholder{
        color: #abaaaa;
    }
    
    }
`


const LoginButton = styled.button`
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

export const ErrorText = styled.p`
    color: red;
    text-align: center;
    font-size: 1.1rem;
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
`



const BeatLoaderCont = styled.div`
    width: 100%;
    /* margin: 18rem auto; */
    height: 90vh;
    /* margin-top: 12rem; */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d8d8d8;


    `