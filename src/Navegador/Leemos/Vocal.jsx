import logoDib from '../../imagenes/MiCopyR/dib_Adactica.gif';
import logo from '../../assets/Logo_adactica_Tr.png';
import '../../css/App.css';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { Link} from 'react-router-dom';


import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

import Letras from '../../imagenes/Letras/letras.png';
import Numeros from '../../imagenes/Numeros/numeros.png';
import Juegos from '../../imagenes/Juegos/Inc_juegos.png';
import Lecty from '../../imagenes/MiCopyR/Lecty.gif';

import Vocal_d from '../../imagenes/Letras/Vocal_d.png';
import vocales_2 from '../../imagenes/Letras/vocales_2.png';

function Vocal() {
  const [open, setOpen] = useState(false);

return (
    <header className="App-header">
        <img 
            src={Lecty}
            className="App-logoDiv" 
            alt="Cara de niña Lety"
        />
    <>
    
    <Container className="App">
    <div className="App-div"> 
      <p>Vamos a comenzar conociendo las vocales, son 5 esencial para comenzar la gran aventura de las lecutras,
        así que enseñemos lo esencial</p> 
    </div>
    <Col xs={8} className="App">
      <Navletras />
    </Col>
            
    <Figure>
      <Figure.Caption>
        Conoce las vocales en mayúscula y minúscula
      </Figure.Caption>
      <Figure.Image
        width={550}
        height={700}
        alt="las vocales"
        src={vocales_2}
      />
    </Figure>

    <Container >
    <Row>
  <Col xs={6} className="App">
  <h5>Despliega para ver palabras que empiezan con esa vocal</h5>
    <Accordion defaultActiveKey="0"> 
    <div className='Opcuadros'>
    <Button className='Opcuadros'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        
      </Button>
      <Accordion.Item eventKey="0">
        <Accordion.Header>A a </Accordion.Header>
        <Accordion.Body>
        Ana, árbol, amiga, Arturo
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div className='Opcuadros'>
      <Accordion.Item eventKey="1">
        <Accordion.Header>E e = </Accordion.Header>
        <Accordion.Body>
        Eva, elefante, estrella
        </Accordion.Body>
      </Accordion.Item>
      </div>
    <div className='Opcuadros'>
      <Accordion.Item eventKey="2">
        <Accordion.Header>I i = </Accordion.Header>
        <Accordion.Body>
        Irene, iglú, iglesia, Ivan
        </Accordion.Body>
      </Accordion.Item>
      </div>
     <div className='Opcuadros'>
      <Accordion.Item eventKey="3">
        <Accordion.Header>O o = </Accordion.Header>
        <Accordion.Body>
        Oscar, ojo, oso, Olga
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div className='Opcuadros'>
      <Accordion.Item eventKey="4">
        <Accordion.Header> U u = </Accordion.Header>
        <Accordion.Body>
        Úrsula, uña
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <Accordion.Item eventKey="4" className='Opcuadros'>
      <Button className='Opcuadros'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        O o
      </Button>
      </Accordion.Item>
      <div>
        <Collapse in={open} dimension="width">
          <div>
            <Card body style={{ width: '400px' }}>
            Oscar, ojo, oso, Olga
            </Card>
          </div>
        </Collapse>
      </div>
      <Accordion.Item eventKey="5" className='Opcuadros'>
      <Button 
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      U / u
      </Button>
      </Accordion.Item>
      <div>
        <Collapse in={open} dimension="width">
          <div>
            <Card body style={{ width: '400px' }}>
            Úrsula, uña
            </Card>
          </div>
        </Collapse>
      </div>
    </Accordion> 
    
    </Col>

    <Col sm={6} className="App">
    <Figure className='Opcuadros'>
    <Figure.Caption>
       Asocia la inicial con la imagen
      </Figure.Caption>
      <Figure.Image
        width={5000}
        height={2500}
        alt="las vocales"
        src={Vocal_d}
      />
    </Figure>              
    </Col> 
    </Row>
    </Container>
    <Row> 
          </Row>
    </Container> 
    
    </>
    </header>
    );
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

export default Vocal;