import '../css/navegador.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink'
import { Link} from 'react-router-dom';

const Bnav = () =>{

  return (
    <>
{/* <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><NavLink>
            <Link to='/principal'>Principal</Link>
            </NavLink></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav> */}

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to='/Home'> Inicio </Link></li>
    <li class="breadcrumb-item"><Link to='/principal'>Principal</Link></li>
    <li class="breadcrumb-item"><Link to='/letras'>Letras</Link></li>
    <li class="breadcrumb-item"><Link to='/juego'>Juegos</Link></li>
    {/* <li class="breadcrumb-item active" aria-current="page">Data</li> */}
  </ol>
</nav>
</>
);
}

export default Bnav;