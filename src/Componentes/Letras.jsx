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
import Lecty from '../imagenes/MiCopyR/Lecty.gif';
import Numy from '../imagenes/MiCopyR/Numy.gif';
import Jocs from '../imagenes/MiCopyR/Jocs.gif';
import Linicio from '../imagenes/Letras/lec_inicio.png';

import Juego from './Juegos';

const Letras = () => {
    return (
      <div className="App">
        <header className="App-header">
            <img 
            src={logoDib}
            className="App-logoDiv" 
            alt="logo"
            />
        <>
        <Container>
          <Row>
            <Col sm={8} className="App">
              <div className="App-div"> 
              {/* <p>
            Edit <code>src/App.js</code> and save to reload.
            </p> */}
            <p>
              Empezaremos conociendo las letras, primero vocales, luego consonantes y así podremos juntarlas y formar sílabas que unidas hacen las palabras, cuando juntamos las palabras formamos frases y así es como podemos escribir cualquier cosa que nos propongamos, quizá nos salga algún escritor o alguna poeta.
              </p>
              <p>
              Aquí vamos a leer cuentos que nos van a hacer pintar, dibujar y crear 
              ¿te lo vas a perder?
              </p>
              <p>
              También eres capaz de escribir las palabras que faltan 
              y si es uno o muchos, chico o chica ¿empezamos?
              </p>
              </div>
            </Col>
            <Col sm={4} className="App">
                <Navletras />
            </Col>
          </Row>
          <Container className='Opcuadros'>
          <Row >
            <Card className="Opcuadros"  style={{ width: '10rem' }}>
            <Card.Body className="App-div">
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
      <Card.Title>Juegos</Card.Title>
      <Col  style={{ width: '10rem' }} xs={6} md={4}>
          <Image style={{ width: '6rem' }} src={Jocs} rounded />
        </Col>
      <Card.Img variant="top" src={Juegos} />
        <Card.Text>
        </Card.Text>
        <Link to='/juego'>
        <Button variant="primary">Juegos</Button>
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
      
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
        <Image style={{ width: '4rem' }} src={Lecty} rounded />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">elige opcion</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink>
              <Link to='/Vocal'>Vocales </Link>
              <Link to='/Silabas'>Silabas </Link>
              </NavLink>
              <NavLink>
              <Link to='/Eltren'>El tren </Link>
              </NavLink>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
export default Letras;

  