import Navbar from './navbar'
import styled from 'styled-components';
type Props = {
    children: React.ReactNode;
};
const Footer = styled.footer`
    align-items: center;
    display: flex;
    font-size:20px;
    justify-content: center;
    background-color: aliceblue;
`;
export default function Layout(props:Props) {
  return (
    <div style={{width:'100%', padding:'0px'}}>
      <Navbar />
      <main style={{minHeight: "80vh"}}>{props.children}</main>
      <Footer>TAESINSA</Footer>
    </div>
  )
}