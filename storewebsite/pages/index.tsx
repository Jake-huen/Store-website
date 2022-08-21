import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';

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
  font-size: 30px;
  border-bottom:1px solid black;
  height:10%;
`;
const Body = styled.body`
  display:flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  border-bottom:1px solid black;
  flex-direction: column;
`
const Start = styled.button`
  font-size:2.0em;
  background-color: beige;
  margin-bottom:10px;
  padding:10px;
  height:100px;
  width:300px;
  border:1px solid black;
  border-radius:10px;
  &:hover{
    background-color: bisque;
    cursor: pointer;
  }
`;

const Description = styled.text`
  font-size:30px;
`;

const Footer = styled.div`
  justify-content: center;
  align-items: center;
  margin:0 auto;
  text-align:center;
  text{
    font-size:18px;
  }
`;
const Home: NextPage = () => {

  return (
    <Container>
      <Header>
        TAESINSA
      </Header>
      <Body>
        <Link href="/products">
          <Start>TAESINSA</Start>
        </Link>
        <Description>버튼을 눌러 쇼핑을 시작하세요!</Description>
      </Body>
      <Footer>
        <text>회사 소개 | 이용약관 | 개인정보취급방침 | 계정 신청 | Google Play | App Store</text>
      </Footer>
    </Container>
  )
}

export default Home
