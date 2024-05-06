import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { deleteCartItem } from '../features/cart/asyncFunctions';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";




const CartItem = ({ thumbnail,title, price, count,id,_id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <CartItemCont style={{}}>
      <ImageCont><Image src={thumbnail}/></ImageCont>
      <TitleCont style={{ flex: '1', marginRight: '10px' }}>
        <Title>{title}</Title>
      </TitleCont>
      <PriceCont style={{ flex: '1', marginRight: '10px' }}>
        <Price>${price}</Price>
      </PriceCont>
      <QuantityCont style={{ flex: '1' }}>

        <FaMinus />
        <QuantityTextCont> <QuantityText>Quantity: </QuantityText><Quantity>{count}</Quantity></QuantityTextCont>
        <FaPlus />
      </QuantityCont>
      <DeleteButtonCont>
      <MdDeleteOutline fontSize={'2.4rem'} onClick={()=>{dispatch(deleteCartItem({productId: _id,token: localStorage.getItem('token')}))}}/>

      </DeleteButtonCont>
      <MoreDetails>
        <MoreDetailsButton onClick={()=>{navigate(`/products/${id}`)}}>
            See Details
            <CiCircleInfo style={{margin:'0 5px'}} fontSize={'1.6rem'} />
        </MoreDetailsButton>
      </MoreDetails>
    </CartItemCont>
  );
};

export default CartItem;

const CartItemCont = styled.div`
    display: flex;
    align-items:center; 
    margin: 1rem 10px;

`

const ImageCont = styled.div`
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  `
const Image = styled.img`
  height: 7rem;
  border-radius: 8px;
  
`

const TitleCont = styled.div`
    
`

const Title = styled.p`
  font-family: "Sulphur Point", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 1rem;
  font-size: 1.3rem;
  text-transform: capitalize;
`
const QuantityCont = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
    
`
const QuantityTextCont = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
    
`
const Quantity = styled.p`
  font-weight: 600;
`
const PriceCont = styled.div`
    
`

const Price = styled.span`
  font-size: 1rem;
  text-align: start;
  font-family: "Onest", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  transition: all .3s;
    
`
const QuantityText = styled.span`
font-family: "Sulphur Point", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2rem;
    
`
const MoreDetails = styled.div`
    
`

const MoreDetailsButton = styled.button`
   font-size: 1rem;
  padding: 8px 14px;
  background-color: transparent;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  &:hover{
    border: 1px solid #343434;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  &:active{
    border: 1px solid #c3c3c3;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
   }  
    
`

const DeleteButtonCont = styled.div`
  cursor: pointer;
  margin: 0 2rem;
`
