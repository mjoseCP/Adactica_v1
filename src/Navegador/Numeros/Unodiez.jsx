import logoDib from '../../imagenes/MiCopyR/dib_Adactica.gif';
import logo from '../../assets/Logo_adactica_Tr.png';
import '../../css/App.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { Link} from 'react-router-dom';

import ScrollLink from 'react-bootstrap/Figure';
import Letras from '../../imagenes/Letras/letras.png';
import Numeros from '../../imagenes/Numeros/numeros.png';
import Juegos from '../../imagenes/Juegos/Inc_juegos.png';
import Numy from '../../imagenes/MiCopyR/Numy.gif';

import nud from '../pdf/uno_diez.pdf';
import uno from '../../imagenes/Numeros/1.png';
import dos from '../../imagenes/Numeros/2.png';
import tres from '../../imagenes/Numeros/3.png';
import cuatro from '../../imagenes/Numeros/4.png';
import cinco from '../../imagenes/Numeros/5.png';
import seis from '../../imagenes/Numeros/6.png';
import siete from '../../imagenes/Numeros/7.png';
import ocho from '../../imagenes/Numeros/8.png';
import nueve from '../../imagenes/Numeros/9.png';
import diez from '../../imagenes/Numeros/10.png';

function Unodiez() {
  return (
    <header className="App-header">
        <img 
            src={Numy}
            className="App-logoDiv" 
            alt="Cara de la niña Numy"
        />
    <>

    <div className="App-div"> 
      <p>Vamos a conocer los números, para ello te damos fichas para que los peques aprendan a reconocerlos y contar.
        Sólo tienes que descargar y rcordar que tienen que aprender pero tu presencia es muy importate para ellos, no pasa nada si no sale bien a la primera puedes imprimir las necesarias, incluso con el dedo por encima de la pantalla puede practicar.</p> 
    </div>
    <Row>
                {/* <Col sm={4} className="App"> 
                
                        
                </Col> */}
                <Col xs={8} className="App">
                <Navletras />
                </Col>
            </Row>
  <Container  className="App-div">
  
    <Figure>
      <Figure.Caption>
        Vamos a conocer los números, verás cuantas cosas se puede hacer con ellos.
      </Figure.Caption>
      <div className="App-div">
  <ScrollLink to="mywork" smooth={true}>
    <button className={`btn`}>
      <a href={nud} target="_blank" rel="noopener noreferrer" download="uno_diez.pdf"> 
      DESCARGAR  todas las fichas
      </a>
    </button>
  </ScrollLink>
</div>  
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={uno}
      />
    <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={dos}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={tres}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={cuatro}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={cinco}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={seis}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={siete}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={ocho}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={nueve}
      />
      <Figure.Image 
        width={250}
        height={400}
        alt="Los números"
        src={diez}
      />
    </Figure> 
  
    </Container>
    </>
    </header>
  );
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

export default Unodiez;