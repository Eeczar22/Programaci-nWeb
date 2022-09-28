import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import tiktok from '../assets/images/tiktok.svg'
import '../assets/styles/Foother.css'

function Foother() {
    return (
        <footer>
          <p>Derechos Reservados</p>
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={tiktok} alt="" />
        </footer>
      );
}

export default Foother;