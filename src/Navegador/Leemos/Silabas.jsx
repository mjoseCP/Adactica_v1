import logoDib from '../../imagenes/MiCopyR/dib_Adactica.gif';
import logo from '../../assets/Logo_adactica_Tr.png';
import '../../css/App.css';
import { useState } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { Link} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Overlay from 'react-bootstrap/Overlay';
import Letras from '../../imagenes/Letras/letras.png';
import Lecty from '../../imagenes/MiCopyR/Lecty.gif';


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    ); 
    return (
      <button
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
  }
function Silabas() {
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
        <p>Toca unir las vocales con las consonantes, y vamos a formar las sílabas, ya nos acercamoas para poder hacer nuestras primeras palabras</p> 
    </div>
    
      <Navletras />

    <Container >
        <Row >
            <Col xs={14} className="App">
                <h5>Despliega para ver palabras que empiezan con esa vocal</h5>
            </Col>
        </Row>
    </Container>
    </Container>
    <Container>
      <p>Sílabas </p>
    <Container>
      <Row>
      <Col sm={4} md={3} className="App">
      <Card>
        <Accordion defaultActiveKey="0">
          <Card className="Opcuadros"> 
            <Card.Header>
              <Card.Body className="Opcuadros">B </Card.Body>
            </Card.Header>
              <CustomToggle eventKey="1">ba</CustomToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>barba, Basilio, barco, batido</Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="2">be</CustomToggle>
            </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>bebé, Beatriz</Card.Body>
              </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="3">bi</CustomToggle>
            </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>bidón, bien, bigote</Card.Body>
              </Accordion.Collapse>  
            <Card.Header>
              <CustomToggle eventKey="4">bo</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>bollo, botella, bodega</Card.Body>
            </Accordion.Collapse>    
            <CustomToggle eventKey="5">bu</CustomToggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>buena, burro</Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
    </Card>
    </Col>
    <Col sm={1} md={1} className="App">
    <Card>
        <Accordion defaultActiveKey="0">
          <Card className="Opcuadros"> 
            <Card.Header>
              <Card.Body className="Opcuadros">C </Card.Body>
            </Card.Header>
              <CustomToggle eventKey="1">ca</CustomToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>casa, Carlos, cama</Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="2">ce</CustomToggle>
            </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>cerdo, esta, Celia</Card.Body>
              </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="3">ci</CustomToggle>
            </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>cielo, circo</Card.Body>
              </Accordion.Collapse>  
            <Card.Header>
              <CustomToggle eventKey="4">co</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>comer, cose, cosa</Card.Body>
            </Accordion.Collapse>    
            <CustomToggle eventKey="5">cu</CustomToggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>cuna, cuidar</Card.Body>
            </Accordion.Collapse>
          </Card>
      </Accordion>
    </Card>
    </Col>
    </Row>
    </Container>
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

export default Silabas;