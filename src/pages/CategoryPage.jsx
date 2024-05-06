import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getCategorizedProducts } from '../features/products/asyncFunctions';
import { useDispatch,useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';
import { LoaderCont } from './HomePage';
import { Title } from './HomePage';

export default function CategoryPage() {
    const {thisCategory} = useParams();
    const dispatch = useDispatch()
    const {isLoadingPCategories,categorizedProducts} = useSelector((store)=>store.products);

    useEffect(()=>{
        dispatch(getCategorizedProducts(thisCategory));
      
    },[thisCategory])
    
  return (
    <CategoryPageCont>
      <Title>{thisCategory}</Title>
      <ProductCont>
      
        {isLoadingPCategories? <LoaderCont><BeatLoader size={16} speedMultiplier={1.4} /></LoaderCont>:categorizedProducts.map(product=><ProductCard key={product.id} {...product} />)}
      </ProductCont>
    </CategoryPageCont>
  )
}

const CategoryPageCont = styled.div`

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
