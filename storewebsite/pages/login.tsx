import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Router from 'next/router';
import Layout from '../components/Layout';
const Container = styled.div`
    width:400px;
    height: 600px;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    display:flex;
    input{
        font-size: 20px;
        margin-bottom: 10px;
        height: 50px;
        width: 100%;
    }
    label{
        font-size: 20px;
        font-weight: 600;
        padding: 8px;
    }
    button{
        font-size:20px;
        width: 100%;
        margin-left:0px;
    }
`;
const Login = () => {
    const {register,handleSubmit,formState:{isSubmitting}} = useForm();
    const submitHandler = async (data:any) => {
        const username = JSON.stringify(data.username);
        const password = JSON.stringify(data.password);
        console.log(username,password);
        try {
            fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(res=>{
                res.json();
                console.log(res);
            })
          } catch (err) {
            console.log(err);
        }
    }
    return (
        <Layout>
            <Container>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <label htmlFor='username'>이름</label>
                    <input id="username" type="username" placeholder="이메일을 입력하세요" {...register("username")} /> <br />
                    <label htmlFor="password">비밀번호</label>
                    <input id="password" type="password" placeholder="*****" {...register("password")} /> <br />
                    <button type="submit" disabled={isSubmitting}>로그인</button>
                </form>
            </Container>
        </Layout>
        
        
    );
};

export default Login;