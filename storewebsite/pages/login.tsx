import React from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form';

const Login = () => {
    const {register,handleSubmit} = useForm();

    return (
        <form onSubmit={handleSubmit((data)=>console.log(JSON.stringify(data)))}>
            <label htmlFor='email'>이메일</label>
            <input id="email" type="email" placeholder="이메일을 입력하세요" {...register("email")} />
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" placeholder="" {...register("password")} />
            <button type="submit">로그인</button>
        </form>
        
    );
};

export default Login;