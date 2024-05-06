import React from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import {useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/products/asyncFunctions'
import styled from 'styled-components'
import { BeatLoader } from 'react-spinners'



export default function HomePage() {
    const dispatch = useDispatch();
    const {productsData,isLoadingProducts} = useSelector((store)=>store.products);
  
    useEffect(()=>{
      dispatch(getAllProducts())
    },[])
  
  return (
    <div>
        <Title>Home Page</Title>
      <ProductCont>

      {isLoadingProducts? <LoaderCont><BeatLoader size={16} speedMultiplier={1.4} /></LoaderCont>:productsData.map(product=><ProductCard key={product.id} {...product} />)}
      </ProductCont>
    </div>
  )
}


export const Title = styled.h1`
  font-size: 2.3rem;
  font-family: "Comme", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  margin: 2rem;
  text-transform: capitalize;
`

export const LoaderCont = styled.div`
  position: fixed;
  margin: 12rem auto;
  display: block;

`

const ProductCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  /* width: 100%; */
  margin: 1rem auto;

`