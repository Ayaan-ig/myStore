import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import {useDispatch,useSelector } from 'react-redux';
import { getOneProduct } from '../features/products/asyncFunctions';
import styled from 'styled-components';
import { addItemToCart } from '../features/cart/asyncFunctions';
import { BeatLoader } from 'react-spinners';
import { CiShoppingCart } from "react-icons/ci";
import {BarLoader} from 'react-spinners';
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from '../components/ProductCard';
import { LoaderCont } from './HomePage';

export default function ProductDetails() {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoadingProduct,oneProduct} = useSelector((store)=>store.products);
    const {thumbnail,title,description,price,id} = oneProduct;
    const {loggedIn} = useSelector((state)=>state.user);
    const [isAdded,setIsAdded] = useState(false);
    const {isLoadingCart,cartItems} = useSelector(state=>state.cart)
    const {isLoadingPCategories,categorizedProducts} = useSelector((store)=>store.products);


    useEffect(()=>{
      console.log(productId)
      dispatch(getOneProduct(productId));
      console.log(oneProduct);
      
      
    },[]);
    console.log('cat pr here')
    console.log(categorizedProducts);
  
    
    useEffect(()=>{
      
      if (loggedIn && cartItems && cartItems.products && cartItems.products.find((elem)=>elem.id === id)) {
        setIsAdded(true);
      }
      
      if (loggedIn && cartItems && cartItems.products && !cartItems.products.find((elem)=>elem.id === id)) {
        setIsAdded(false);
      }
      
    },[oneProduct])


  return (

    <OuterCont>
        {isLoadingProduct?<BarLoaderCont><BeatLoader size={16} speedMultiplier={1.4} /></BarLoaderCont>:
        <ProductCont>
          <Image draggable='false' src={thumbnail} alt={title} />
          <ProductDetailsCont>
 
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Price>${price}</Price>

              {
                 isLoadingCart?
                 (<CartBarLoaderCont><BarLoader color={'#a6aaa9'} /></CartBarLoaderCont>)
                 :
                 <CartButtonCont>

                 {isAdded?
                 <GoToCartButton onClick={()=>{navigate('/cart')}}><AddToCartText>Go to cart</AddToCartText> <AiOutlineArrowRight /></GoToCartButton>
                 :
                  <CartButtonCont2>
                    {loggedIn?
                    <AddToCartButton onClick={()=>{
                      dispatch(addItemToCart({product:{title,price,id,thumbnail,count:1},token:localStorage.getItem('token')}));
                      setIsAdded(true)
                     }
                   } >     
                       <AddToCartText> Add to Cart  </AddToCartText>
                        {loggedIn?<CiShoppingCart fontSize={'1.8rem'} />:''} 
                      </AddToCartButton>
                    :
                    <AddToCartButton onClick={()=>{navigate('/auth/login')}}>Sign In first</AddToCartButton>
                    }

                 
                </CartButtonCont2>
                   
                   }
                 </CartButtonCont>
        }
          </ProductDetailsCont>
        </ProductCont>}
        <CategoryPageCont>
      <CatTitle>Similar Items</CatTitle>
      <ProductCont1>
      
      {isLoadingPCategories? <LoaderCont><BeatLoader size={16} speedMultiplier={1.4} /></LoaderCont>
      :
      categorizedProducts.map(
        product=> 
        <div key={product.id} onClick={()=>{
          dispatch(getOneProduct(product.id));
          window.scrollTo({
            top: 0,
            behavior:'smooth'});
        }}>

        <ProductCard key={product.id} {...product} isSmall={true} description={''} />
        </div>
        )}
      </ProductCont1>
    </CategoryPageCont>
    </OuterCont>
    
    )
}

const OuterCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`

const ProductCont = styled.section`
  display: flex;
  margin: 4rem auto;
  gap: 1rem;
  
`
const ProductDetailsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.6rem;

`
const Title = styled.h2`
  font-family: "Sulphur Point", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin: 0 1rem;
  font-size: 2.6rem;
  text-transform: capitalize;
  
`
const Image = styled.img`
  border-radius: 12px;
  height: 18rem;
  
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
  text-align: start;
  font-family: "Onest", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  transition: all .3s;
  
`
const AddToCartButton = styled.button`
  font-size: 1rem;
  padding: 10px 18px;
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
const CartButtonCont = styled.div`
  
`
const CartButtonCont2 = styled.div`
  
`

const GoToCartButton = styled.button`
  font-size: 1rem;
  padding: 10px 18px;
  background-color: transparent;
  border: 1px solid #8e8e8e;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  width: 8.4rem;
  &:hover{
    border: 1px solid #343434;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    gap: 9px;
  }
  &:active{
    border: 1px solid #c3c3c3;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
      } 
  
`

const AddToCartText = styled.p`
  
`
export const BarLoaderCont = styled.div`
  display: flex;
  align-items: center;
  height: 26rem;
  margin: 0 auto;
`
const CartBarLoaderCont = styled.div`

`


const CategoryPageCont = styled.div`

`


const ProductCont1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  /* width: 100%; */
  margin: 1rem auto;

`

const CatTitle = styled.h2`
  text-align: center;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;
    user-select: none;
`