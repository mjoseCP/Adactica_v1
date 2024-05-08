import logoDib from '../imagenes/MiCopyR/dib_Adactica.gif';
import '../css/App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

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
import Juego from './Juegos';

function Numero() {
    return (
        <div className="App">
        <header className="App-header">
            <img 
            src={logoDib}
            className="App-logoDiv" 
            alt="logo"
            />
        <>
        <Container >
            <Row>
                <Col sm={8} className="App"> 
                <div className="App-div"> 
                <p>
                    Vamos a aprender los números y luego las operaciones básicas, de ahí poquito a poquito a ver donde llegamos
                </p>
                </div>
                <div className="App-div">     
                <p>
                Descubre que puede ser divertido conocer los números 
                </p>
                </div>        
                </Col>
                <Col xs={4} className="App">
                <Navletras />
                </Col>
            </Row>
        <Container className='Opcuadros'>
            <Row>
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
        <Card className="Opcuadros"  style={{ width: '10rem' }}>
        <Card.Body>
        <Card.Title>Juegos</Card.Title>
        <Col  style={{ width: '10rem' }} xs={6} md={4}>
            <Image style={{ width: '6rem' }} src={Jocs} rounded />
        </Col>
        <Card.Img variant="top" src={Juegos} />
        <Card.Text>
        </Card.Text>
        <Link to='/Juego'>
        <Button variant="secundary">Juegos</Button>
        </Link>
        </Card.Body>
        </Card>
    </Row>
    </Container> 
    </Container>
    </>
        </header>
        </div>
    )
}
const Navletras = () =>{
    return (
        <div className="colors">
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Image style={{ width: '4rem' }} src={Numy} rounded />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">Elige opción</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <NavLink>
            <Link to='/Unodiez'>numeros </Link>
            </NavLink>
            <NavLink>
            <Link to='/Suma'>Suma</Link>
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
export default Numero;