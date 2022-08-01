import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import styled from 'styled-components';

const Home: NextPage = () => {

  return (
    <Container>
      <Header>
        TASINSA
      </Header>
      <Body>
        <Link href="/products">
          <Start>TASINSA</Start>
        </Link>
        <Description>버튼을 눌러 쇼핑을 시작하세요!</Description>
      </Body>
      <Footer>
        <text>회사 소개 | 이용약관 | 개인정보취급방침 | 계정 신청 | Google Play | App Store</text>
      </Footer>
      
    </Container>
  )
}
const Container = styled.div`
  background-color: #efefef;
`;
const Header = styled.div`
  font-size:1.0em;
  display:flex;
  align-items: center;
  justify-content: left;
  margin:15px;
  padding:5px;
  border-bottom:1px solid black;
`;
const Img = styled.img`

`
const Body = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  height: 530px;
  border-bottom:1px solid black;
  flex-direction: column;
`
const Start = styled.a`
  font-size:2.0em;
  background-color: beige;
  margin-bottom:10px;
  padding:10px;
  border:1px solid black;
  border-radius:10px;
`;

const Description = styled.text`
  font-size:10px;
`;

const Footer = styled.div`
  justify-content: center;
  align-items: center;
  margin:0 auto;
  text-align:center;
  text{
    font-size:10px;
  }
`;
export default Home
