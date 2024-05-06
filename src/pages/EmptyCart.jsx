import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { AiOutlineArrowRight } from "react-icons/ai";


function EmptyCart() {
    const navigate= useNavigate();
  return (
    <ECartCont>
        <ECartText>Cart is empty...</ECartText>
        <ECartExploreButton onClick={()=>{navigate('/')}}>Explore Items <AiOutlineArrowRight /></ECartExploreButton>
    </ECartCont>
  )
}

export default EmptyCart

const ECartCont = styled.div`
    
`
const ECartText = styled.h2`
  font-family: "Sulphur Point", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin: 3rem auto;
  text-align: center;
  font-size: 2.6rem;
  text-transform: capitalize;
    
`
const ECartExploreButton = styled.button`
  font-size: 1rem;
  padding: 14px 26px;
  background-color: transparent;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 9rem auto;
  &:hover{
    border: 1px solid #343434;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  &:active{
    border: 1px solid #c3c3c3;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
      }  
    
`