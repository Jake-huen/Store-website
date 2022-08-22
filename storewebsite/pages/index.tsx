import type { NextPage } from 'next'
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
`;
const Header = styled.div`
  font-size:1.0em;
  display:flex;
  align-items: center;
  justify-content: left;
  margin:15px;
  padding:5px;
  font-size: 30px;
  height:10%;
`;
const Body = styled.body`
  display:flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  margin:10px;
  flex-direction: column;
`
const Start = styled.button`
  font-size:2.0em;
  background-color: beige;
  margin-bottom:10px;
  padding:10px;
  height:100px;
  width:300px;
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
    <Layout>
      <Container>
        <Header>
          TAESINSA
        </Header>
        <Body>
          <Link href="/products" passHref>
            <Start>TAESINSA</Start>
          </Link>
          <Description>버튼을 눌러 쇼핑을 시작하세요!</Description>
        </Body>
      </Container>
    </Layout>
    
  )
}

export default Home
