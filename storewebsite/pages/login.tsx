import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
    padding:0;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    width: 400px;
    height: 350px;
    padding: 40px;
    box-sizing: border-box;
    margin:0 auto;
    align-items: center;
    justify-content: center;
`;
const Text = styled.h2`
    font-size: 24px;
    color: #8b00ff;
    margin-bottom: 20px;
`;
const Form = styled.form`
    margin:0 auto;
`;
const Idinput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: #F8F8F8;
`;
const Pwdinput = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: #F8F8F8;
`;
const Submitbutton = styled.button`
    width: 100%;
    color: #fff;
    font-size: 16px;
    background-color: #8b00ff;
    margin-top: 20px;
    cursor: pointer;
    height: 40px;
    border-radius: 10px;
`;
const Login = () => {
    const submitHandler = () =>{
        
    }
    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <Text>
                    로그인
                </Text>
                <Idinput type="text" name="userId" placeholder='이메일'/>
                <Pwdinput type="password" name="userPwd" placeholder='비밀번호'/>
                <Submitbutton type="submit">로그인</Submitbutton>
            </Form>
        </Container>
        
    );
};

export default Login;