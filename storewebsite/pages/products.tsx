import { useEffect,useState } from "react";
import Link from "next/link";
import styled from 'styled-components';
import {useQuery} from '@tanstack/react-query';
import Navbar from "../components/navbar";
import {fetchAllCategories, fetchProducts} from './api/api';
import Layout from "../components/Layout";

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
const Header = styled.div`
    width:100%;
    align-items: center;
    justify-content: center;
    text{
        font-size: 40px;
        text-align: center;
    }
`;
const CategoryList = styled.div`
    display: flex;
    justify-content: space-between;
    margin:10px;
`;
const Category = styled.button`
    border:1px solid black;
    border-radius: 10px;
    margin-left: 10px;
    padding:10px;
    &:hover{
        background-color: aliceblue;
    }
    cursor: pointer;
`;
const ProductList = styled.ul`
`;
const Product = styled.div`
    background-color: white;
    margin-bottom:10px;
    padding:20px;
    margin:13px;
    border-radius:15px;
    justify-content: center;
    border:1px solid black;
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
        font-size:18px;
    }
`;
const ProductImage = styled.img`
    width:100px;
    height:100px;
    margin-right:10px;
`
const CartButton = styled.button`
    height: 40px;
    background-color: aliceblue;
    border:1px solid black;
    border-radius:10px;
    margin:10px;
    &:hover{
        cursor: pointer;
        background-color: antiquewhite;
    }
`
const AddProducts = styled.button`
    height: 40px;
    background-color: aliceblue;
    border:1px solid black;
    border-radius:10px;
    margin:10px;
`

// const addProducts = () =>{
//     fetch('https://fakestoreapi.com/products',{
//         method:"POST",
//         body:JSON.stringify(
//             {
//                 title: 'test product',
//                 price: 13.5,
//                 description: 'lorem ipsum set',
//                 image: 'https://i.pravatar.cc',
//                 category: 'electronic'
//             }
//         )
//     })
//     .then(res=>res.json())
//     .then(json=>console.log(json))
//     console.log("clicked");
// }
function Products(){
    const {isLoading:productloading,data:productdata,isError:productError} = useQuery<IProducts[]>(['products'],fetchProducts);
    const {isLoading:categoryloading,data:categorydata,isError:categoryError} = useQuery(['category'],fetchAllCategories);
    const loading = productloading||categoryloading;
    const error = productError||categoryError;
    const [buttonClicked,setButtonClicked] = useState('electronics');
    const clickCategory = (index:any) =>{
        setButtonClicked(categorydata[index]);
    }
    if(loading){
        return <div style={{fontSize:"30px"}}>loading...</div>;
    }
    if(error){
        return <div style={{fontSize:"30px"}}>An error occured</div>;
    }
    return (
        <Layout>
            <CategoryList>
                {Object.keys(categorydata).map(index=>(
                    <Category key={index} onClick={()=>clickCategory(index)}>{categorydata[index]}</Category>
                    ))}
            </CategoryList>
            {/*<AddProducts onClick={addProducts}>상품 추가하기</AddProducts>*/}
            <ProductList>
                {typeof productdata!='string' && productdata?.filter(product=>product.category===buttonClicked)
                    .map(product=>(
                        <Product key={product.id}>
                            <text>{product.category}</text><br />
                            <text>정보 : {product.description}</text><br/>
                            <text>가격 : {product.price} 달러</text><br/>
                            <ProductImage src={product.image} />
                            <Link href={{
                                pathname:`/product/${product.id}`
                            }}>
                                <CartButton>상품 구매하러 가기</CartButton>
                            </Link>
                        </Product>
                ))}
            </ProductList>
        </Layout>
    );
}
export default Products;

