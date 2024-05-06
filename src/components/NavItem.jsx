import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { closeList,openList } from '../features/NavBar/navSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function NavItem({title,itemList,index}) {
  const {showItems} = useSelector((state)=>state.navbar);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavItemCont onMouseEnter={()=>{dispatch(openList(index))}} onMouseLeave={()=>{dispatch(closeList())}}>
        <NavItemTitle>{title}</NavItemTitle>
        {!(showItems == index)?<></> :
        <NavItemList>
        {itemList.map((item)=> <NavListItem  key={itemList.indexOf(item)} onClick={()=>{navigate(`/category/${item}`);dispatch(closeList());  }}> {item}</NavListItem>)}
          </NavItemList>
        }
    </NavItemCont>
            
  )
}

const NavItemTitle = styled.h2`
  font-size: 1.5rem; 
  font-family: "Thasadith", sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: capitalize;
  transition: all 0.2s;
  user-select: none;
  &:hover{
    color: black;
    transform: scaleX(1.2);
  }
  &:active{
    transform: scale(0.97);
  }
`

const NavItemCont = styled.div`
  width: 5rem;
  margin: 0 4rem;
  /* position: relative; */
`

const NavItemList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #f7f5f5;
  border-radius: 10px;
  text-align: center;
  padding-top: 1rem;
  z-index: 3;
`
const NavListItem = styled.p`
  color: #797979;
  font-size: 1.4rem;
  text-decoration: none;
  cursor: pointer;
  margin: 0 12px;
  margin-bottom: 18px;
  font-family: "Thasadith", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-transform: capitalize;
  &:hover{
    color: #161414;
  }
  &:active{
    color: #b0b0b0;
  }
`