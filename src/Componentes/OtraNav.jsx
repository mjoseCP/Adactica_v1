
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_adactica_Tr.png';
/*import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';*/
import '../css/navegador.css'


const OtraNav = () => {
    
    return (
        <nav>
            <img 
            src={logo}
            className="App-logo" 
            alt="logo"
            />
            <ul>
            <li>
                    <Link to='/Home'> Inicio </Link>
                </li>
            <li>
                    <Link to='/principal'> Principal </Link>
                </li>
                {/* <li>
                    <Link to='/main'>Formulario</Link>
                </li> */}
                <li>
                    <Link to='/letras'>Letras</Link>
                </li>
                <li>
                    <Link to='/juego'>Juegos</Link>
                </li>
                <li>
                    <Link to='/numero'>Numeros</Link>
                </li>
                
                {/* <li>
                    <Link to='/api'> Api </Link>
                </li>
                <li>
                    <Link to='/productos'> Productos </Link>
                </li> */}
            </ul>
        </nav>
    );
}
export default OtraNav;