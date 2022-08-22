import React from 'react';
import Layout from '../components/Layout';
import { fetchAllCarts } from './api/api';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useEffect } from 'react';
import Link from 'next/link';
const CategoryList = styled.div`
    display: flex;
    justify-content: space-between;
    margin:10px;
`;
const TotalPrice = styled.div`
    font-size: 100px;
`;
const ResetButton = styled.button`
    font-size: 20px;
`
const emptycart = () =>{
    localStorage.setItem("price","0");
}
// useEffect(()=>{
//     localStorage.getItem("price");
// },[])
const Cart = () => {
    const {isLoading:cartsloading,data:cartsData,isError:cartsError} = useQuery(['category'],fetchAllCarts);
    if(cartsloading){
        return(<div>loading</div>)
    }
    const totalPrice = localStorage.getItem("price");
   
    return (
        <Layout>
            <CategoryList>
                <TotalPrice>현재까지 계산할 금액 : {totalPrice} $</TotalPrice>
                <ResetButton onClick={emptycart}>장바구니 비우기</ResetButton>
                <Link href="/products" passHref>
                    <button>카트에 더 담으러 가기</button>
                </Link>
            </CategoryList>
        </Layout>
    );
};

export default Cart;