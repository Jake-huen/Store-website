import Navbar from './navbar'

type Props = {
    children: React.ReactNode;
};

export default function Layout(props:Props) {
  return (
    <div style={{width:'100%', padding:'0px'}}>
      <Navbar />
      <main>{props.children}</main>
      <footer>TAESINSA</footer>
    </div>
  )
}