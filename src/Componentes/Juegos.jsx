import logoDib from '../imagenes/MiCopyR/dib_Adactica.gif';
import '../css/App.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { Link} from 'react-router-dom';

import Numeros from '../imagenes/Numeros/numeros.png';
import Juegos from '../imagenes/Juegos/Inc_juegos.png';
import Jocs from '../imagenes/MiCopyR/Jocs.gif';
import Lecty from '../imagenes/MiCopyR/Lecty.gif';
import LetrasD from '../imagenes/Letras/letras.png';
import Numy from '../imagenes/MiCopyR/Numy.gif';
import Linicio from '../imagenes/Letras/lec_inicio.png';

const Juego = () => {
    return (
        <div className="App">
        <header className="App-header">
            <img 
            src={logoDib}
            className="App-logoDiv" 
            alt="logo"
            />
        <>
        <Navnum />
        <div className="App-div"> 
            {/* <p>
            Edit <code>src/App.js</code> and save to reload.
            </p> */}
            <p>
            Vamos a aprender jugando un poco
            </p>
            
            <p>
            Descubre las diferentes maneras
        </p>
        </div>
        <Container className='Opcuadros'>
        <Row>
        <Card className="Opcuadros"  style={{ width: '10rem' }}>
        <Card.Body>
        <Card.Title>Numeros</Card.Title>
        <Col  style={{ width: '10rem' }} xs={6} md={4}>
            <Image style={{ width: '6rem' }} src={Numy} rounded />
        </Col>
        <Card.Img variant="top" src={Numeros} />
        <Card.Text>
        </Card.Text>
        <Link to='/numero'>
        <Button variant="primary">Numeros</Button>
        </Link>
        </Card.Body>
        </Card>
        <Card className="Opcuadros" style={{ width: '10rem' }}>
            <Card.Body>
            <Card.Title>Letras</Card.Title>
            <Col  style={{ width: '10rem' }} xs={6} md={4}>
                <Image style={{ width: '6rem' }} src={Lecty} rounded />
            </Col>
        <Card.Img variant="top" src={LetrasD} />
        <Card.Text>
        </Card.Text>
            <Link to='/letras'>
            <Button variant="primary">Letras</Button>
        </Link>
      </Card.Body>
    </Card>
    </Row>
    </Container> 
        
 
    </>

        </header>
        </div>
        
    )
}
const Navnum = () =>{
    return (
        <div className="colors">
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Image style={{ width: '4rem' }} src={Jocs} rounded />
        <Navbar.Brand href="#home">Escoge categoria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink>
            <Link to='/AdivColor'>Colores </Link>
            {/* <Image style={{ width: '2rem' }} src={Linicio} rounded /></Link> */}
            </NavLink>
            <NavLink>
            <Link to='/Adivina'>Adivinanzas</Link>
            </NavLink>
            </Nav>
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    );
  }
export default Juego;

  