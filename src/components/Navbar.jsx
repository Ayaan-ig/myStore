import React, { useEffect } from 'react'
import { getProductCategories } from '../features/products/asyncFunctions';
import {useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import styled from 'styled-components';
import { logout } from '../features/Auth/userSlice';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { CiShoppingCart } from "react-icons/ci";

export default function Navbar() {
    //data for navbar
    // const  navItems = ['Men','Women','Electronics','Home and Living']
    const menCategories = ['skincare','mens-shirts','mens-shoes','mens-watches','sunglasses','fragrances']
    const womenCategories = ['skincare','womens-watches','womens-bags','womens-jewellery','sunglasses','tops','fragrances']
    const electronicsCategories = ['smartphones','laptops']
    const HomeAndLivingCategories = ['tops','groceries','home-decoration','furniture','motorcycle','lighting']



    //no need of product Categories now
    const {isLoading,loggedIn,userName} = useSelector((state)=>state.user);
    const {itemsCount} = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getProductCategories());
    },[])
  return (
    <Header >

         <LogoTitle onClick={()=>{navigate('/')}}>myStore</LogoTitle>

        <NavItems>

        <NavItem title={'Men'} itemList={menCategories} index={1}/>
        <NavItem title={'Women'} itemList={womenCategories} index={2} />
        <NavItem title={'Electronics'} itemList={electronicsCategories} index={3} />
        <NavItem title={'Living'} itemList={HomeAndLivingCategories} index={4} />

        </NavItems>
        {loggedIn?
        <SignOutCont>
          <UserInfo> <UserInfoText>Signed in as </UserInfoText><UserName>{userName.name}</UserName></UserInfo>
          <LogoutButton onClick={()=>{
            dispatch(logout());
            dispatch(clearCart());
            navigate('/');

          }}>Logout</LogoutButton>
          <CartIconCont onClick={()=>{navigate('/cart')}}>
            <CiShoppingCart fontSize={'2.6rem'} />
            <CartItemCountCont>
              <CartItemCount>{itemsCount}</CartItemCount>
            </CartItemCountCont>
            </CartIconCont>
        </SignOutCont>
        //otherwise
        :
        <AuthCont>
          <Link to={'/auth/login'} ><LoginButton>Sign In</LoginButton></Link>
          <Link to={'/auth/register'} ><RegisterButton>Register</RegisterButton></Link>
        </AuthCont>
        }

        

        

    </Header>
  )
}
const Header = styled.header`
    display: flex;
    gap: 2rem;
    align-items: center;
    background-color: #fafafa;
    align-items: center;
  
`

const LogoTitle = styled.h1`
  font-size: 1.8rem;
  margin: 0.7rem;
  font-family: "Annie Use Your Telescope", cursive;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  font-size: 2.3rem;
  cursor: pointer;
  user-select: none;

  color: #021590;
  transition: transform 0.3s;
  &:hover{
    transform: scale(1.0234);
  }
  &:active{
    transform: scale(0.97);
  }
`


const NavItems = styled.nav`
  display: flex;
  /* gap: 5rem; */
  align-items: center;
  



`
const AuthCont = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: auto;
  margin-right: 2rem;
`

const LoginButton = styled.button`
  font-size: 1.3rem;
  padding: 8px 16px;

  background-color: transparent;
  outline: none;
  border-radius: 18px;
  border: none;
  cursor: pointer;
  &:hover{
    color: #676767;
  }
  &:active{
    color: #acacac;
  }
  font-family: "Noto Sans Old Persian", sans-serif;
  font-weight: 400;
  font-style: normal;
  
  `
const RegisterButton = styled.button`
  font-size: 1.1rem;
  padding: 8px 16px;
  
  background-color: transparent;
  outline: none;
  border-radius: 18px;
  cursor: pointer;
  
  font-family: "Noto Sans Old Persian", sans-serif;
  font-weight: 400;
  font-style: normal;

  transition: all 0.3s;
  outline: none;
  &:hover{
    background-color: #566bf4;
    color: white;
  }
  &:active{
    transform: scale(0.95);
  }
`

const SignOutCont = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
  align-items: center;
  margin-right: 1rem;

`


const LogoutButton = styled.button`
  font-size: 1rem;
  padding: 2px 12px;
  height: 2.6rem;
  
  background-color: transparent;
  outline: none;
  border-radius: 18px;
  border: 1px solid #000000;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    color: #838383;
  }
  &:active{
    color: #acacac;
  }
  font-family: "Noto Sans Old Persian", sans-serif;
  font-weight: 400;
  font-style: normal;
  
  `

const UserInfo = styled.p`
    display  : flex;
    gap: 4px  ;
    align-items: center;
    user-select: none;
  `

const UserName = styled.p`
  text-transform: capitalize;
  font-family: "Encode Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  color: #505050;
  font-variation-settings:100;
  font-size: 1.2rem;
  
  `

const UserInfoText = styled.p`
  font-family: "Encode Sans", sans-serif;
  font-optical-sizing: auto;
  font-size: 1.2rem;
  color: #8b8a8a;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: 100;
  
`

const CartIconCont = styled.div`
  cursor: pointer;
  color: #464646;
  transition: all 0.3s;
  position: relative;
  &:hover{
    color: #171717;
    transform: scale(1.05);
  }
  &:active{
    color: #858585;
    transform: scale(0.98);
  }
`

const CartItemCountCont = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #646363;
  border-radius: 50%;
  height: 20px;
  width:  20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CartItemCount = styled.p`
  color: white;
  font-size: 14px;
  font-family: "Gantari", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  user-select: none;

  
`