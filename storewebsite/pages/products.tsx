import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import styled from 'styled-components';

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

function Products(){
    const [products,setProducts] = useState<IProducts[]>([]);
    useEffect(()=>{
        (async ()=>{
            const productData = await(await fetch('https://fakestoreapi.com/products')).json();
            setProducts(productData);
            console.log(productData);
        })();
    },[]);
    return (
        <div>
            <ProductList>
                {products.map(product=>(
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