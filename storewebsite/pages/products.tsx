import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import styled from 'styled-components';
import {useQuery} from '@tanstack/react-query';

interface IRate{
    rate:number;
    count:number;
}
interface IProducts{
    id:number;
    title:string;
    price:number;
    image:string;
    description:string;
    category:string;
    rating:IRate;
}

const getProducts = async ():Promise<IProducts[]|string> =>{
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    }catch(error){
        let message;
        if(error instanceof Error){
            message = error.message;
        }else message = String(error);
        return message;
    }
}

function Products(){
    const [products,setProducts] = useState<IProducts[]>([]);
    
    const useProducts = useQuery(['products'],getProducts);
    console.log(useProducts.data);
    if(useProducts.isLoading){
        return <div>loading...</div>;
    }

    if(useProducts.isError){
        return <div>An error occured</div>;
    }
    return (
        <div>
            <ProductList>
                {typeof useProducts.data!='string' && useProducts.data.map(product=>(
                    <Product key={product.id}>
                        <text>Category : {product.category}</text><br/>
                        <text>정보 : {product.description}</text><br/>
                        <text>가격 : {product.price} 달러</text><br/>
                        <ProductImage src={product.image} />
                        <Link href={{
                            pathname:`/product/${product.id}`,
                            query:{price:JSON.stringify(product.price)}
                        }}>
                            상품 구매하러 가기
                        </Link>
                    </Product>
                ))}
            </ProductList>
        </div>
    );
}
export default Products;

const ProductList = styled.ul``;
const Product = styled.div`
    background-color: white;
    margin-bottom:10px;
    padding:20px;
    border-radius:15px;
    justify-content: center;
    a{
        transition:color 0.2s ease-in-out;
        display:flex;
        padding:20px;
        align-items: center;
    }
    &:hover{
        a{
            color:${props=>props.theme.accentColor};
        }
    }
    text{
        font-size:12px;
    }
`;
const ProductImage = styled.img`
    width:100px;
    height:100px;
    margin-right:10px;
`