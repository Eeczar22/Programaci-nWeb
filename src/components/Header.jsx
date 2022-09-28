import logo from '../assets/images/subway.svg'
import '../assets/styles/Header.css'

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <h1>Tortas "Don Rafita"</h1>
    </header>
  );
}
export default Header;
