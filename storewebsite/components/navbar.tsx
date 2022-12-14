import Link from 'next/link';
import styled from 'styled-components';
const Navbar = () => {
  const styles = {
    display: "flex",
    background: "#BBB1D6",
    padding:30,
    justifyContent: "space-between"
  };
  const ATag = styled.a`
    font-size: 20px;
    color: #000;
    &:hover{
        color:#8b00ff;
        cursor: pointer;
    }
`;
  return (
    <div style={styles}>
      <Link href='/'>
        <ATag>메인화면</ATag>
      </Link>
      <Link href='/cart'>
        <ATag>구매목록</ATag>
      </Link>
      <Link href='/login'>
        <ATag>로그인</ATag>
      </Link>
    </div>
  );
};

export default Navbar;

