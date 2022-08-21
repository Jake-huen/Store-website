import {
    Route,
    useLocation,
    useParams, 
} from "react-router-dom";
import Link from 'next/link';
import styled from "styled-components";
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import {fetchProduct} from '../api/api';
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
function Product(){
    const router = useRouter();
    const id = router.query['id'];
    const useProduct = useQuery<IProduct>(['product',id],()=>fetchProduct(id));
    if(useProduct.isLoading){
        return <div style={{fontSize:"30px"}}>loading...</div>;
    }

    if(useProduct.isError){
        return <div style={{fontSize:"30px"}}>An error occured</div>;
    }
    return (
        <Container>
            <Link href="/products">
                <div style={{fontSize:30,margin:4,cursor:'pointer'}}>&larr; 이전</div>
            </Link>
            {useProduct && 
                <Box>
                    <Text>Category : {useProduct.data.category}</Text><br/>
                    <Text>설명 : {useProduct.data.description}</Text><br/>
                    <Text>가격 : {useProduct.data.price} 달러</Text><br/>
                    <Text>평점 : {useProduct.data.rating.rate} 점</Text><br />
                    <ProductImage src={useProduct.data.image} />
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