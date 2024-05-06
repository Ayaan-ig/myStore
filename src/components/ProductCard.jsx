
import React from 'react'
import {   useNavigate } from 'react-router-dom'
import styled from 'styled-components'


export default function ProductCard({id,thumbnail,title,description,price,isSmall}) {
  const navigate = useNavigate();
  window.scrollTo({
    top: 0,
    behavior:'smooth'});
  return (
      <ProductCont isSmall={isSmall} onClick={()=>{
      navigate(`/products/${id}`);
      window.scrollTo({
        top: 0,
        behavior:'smooth'});
      }}>
        <Image draggable='false' isSmall={isSmall} src={thumbnail} alt={title} />
        <Title isSmall={isSmall} className='text-white'>{title}</Title>
        <Description className='text-white'>{description}</Description>
        <Price className='text-white'>${price}</Price>

      </ProductCont>
  
  )
}
const ProductCont = styled.div`
  cursor: pointer;
  padding: 2rem;
  width: ${props=>props.isSmall?'10rem':'15rem'};
  height: ${props=>props.isSmall?'16rem':''};
  border: 1px solid #cccaca;
  margin: 10px;
  border-radius: 6px;
  transition: all 0.3s;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &>*{
      transform: scale(1.03);
      transition: all .3s;
    }
  }
  &:active{
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
  position: relative;

`

const Title = styled.h2`
  font-family: "Sulphur Point", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  font-size: ${props=>props.isSmall?'1.2rem':'1.5rem'};

  margin: 0.4rem 0;
  transition: all .3s;
  
  `
const Image = styled.img`
  border-radius: 10px;
  height: ${props=>props.isSmall?'9rem':'12rem'};
  /* height: 12rem; */
  width: ${props=>props.isSmall?'10rem':'16rem'};
  transition: all .3s;
  
  `

const Description = styled.p`
  font-family: "Onest", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin: 10px 0;
  transition: all .3s;
  `
const Price = styled.p`
  font-size: 1.2rem;
  text-align: end;
  font-family: "Onest", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  transition: all .3s;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  `