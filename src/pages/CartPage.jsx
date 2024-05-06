import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../features/cart/asyncFunctions';
import CartItem from '../components/CartItem';
import styled from 'styled-components';
import {BeatLoader} from 'react-spinners'
import EmptyCart from './EmptyCart';
function CartPage() {
    const dispatch = useDispatch();
    const {cartItems,isLoadingCart} = useSelector((state)=>state.cart);
    useEffect(()=>{
        if (!cartItems) {  // Dispatch only if cartItems is not already populated
            dispatch(getCartItems(localStorage.getItem('token')));
        }
    },[cartItems]);
    useEffect(()=>{
            dispatch(getCartItems(localStorage.getItem('token')));
        }
    ,[]);

    console.log(cartItems);
    if (isLoadingCart) {
        return <LoaderCont>
            <BeatLoader />  
        </LoaderCont>
    }
    if (!cartItems) {
        return <div>Could not load items....</div>
    }
    if (!cartItems.count) {
        return <EmptyCart />
    }
  return (
    <CartCont>
        {cartItems.products.map((item,i)=><CartItem {...item} key={i} />)}
    </CartCont>
  )
}

export default CartPage

const CartCont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`

const LoaderCont = styled.div`
  position: fixed;
  width: 100%;
  margin: 12rem auto;
  display: flex;
  align-items: center;
  justify-content: center;

`