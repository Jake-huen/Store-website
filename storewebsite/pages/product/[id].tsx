import {
    Route,
    useLocation,
    useParams, 
} from "react-router-dom";
import Link from 'next/link';
import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';
import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
const Container = styled.div`
    justify-content: center;
    align-items: center;
    margin:0 auto;
`;
const Box = styled.div`
  border:5px solid #551647;
  border-radius: 3px;
  margin:50px;
  padding:20px;
  width:800px;
  height:auto;
  justify-content: center;
  align-items: center;
  button{
    width:200px;
    height:80px;
    align-content: center;
    text-align: center;
    font-size:18px;
    margin-left:250px;
    background-color: #dddada;
    font-weight: bold;
  }
`;
const Text = styled.div`
    font-size:20px;
`
const ProductImage = styled.img`
    width:400px;
    height:400px;
`
interface IRate{
    rate:number;
    count:number;
}
interface IProduct{
    id:number;
    title:string;
    price:number;
    image:string;
    description:string;
    category:string;
    rating:IRate;
}
const getProduct = async (id:number):Promise<IProduct|string> =>{
    try{
        console.log(id);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
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
function Product(){
    const [product,setProduct] = useState<IProduct>();
    const router = useRouter();
    const id = router.query['id'];
    useEffect(()=>{
        (async ()=>{
            const productData = await (await fetch(`https://fakestoreapi.com/products/${id}`)).json();
            setProduct(productData);
        })();
    },[]);
    // const useProduct = useQuery(['id'],getProduct(id));
    // if(useProduct.isLoading){
    //     return <div style={{fontSize:"30px"}}>loading...</div>;
    // }

    // if(useProduct.isError){
    //     return <div style={{fontSize:"30px"}}>An error occured</div>;
    // }
    return (
        <Container>
            <Link href="/">
                <div style={{fontSize:30,margin:4,cursor:'pointer'}}>&larr; 메인화면으로 돌아가기</div>
            </Link>
            {product && 
                <Box>
                    <Text>Category : {product.category}</Text><br/>
                    <Text>설명 : {product.description}</Text><br/>
                    <Text>가격 : {product.price} 달러</Text><br/>
                    <Text>평점 : {product.rating.rate} 점</Text><br />
                    <ProductImage src={product.image} />
                </Box>}
            <Box>
                <Link href="/cart">
                    <button>카트에 담기</button>
                </Link>
            </Box>
        </Container>
    );
}
export default Product;