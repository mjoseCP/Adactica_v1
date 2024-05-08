import logoDib from '../../imagenes/MiCopyR/dib_Adactica.gif';
import logo from '../../assets/Logo_adactica_Tr.png';
import '../../css/App.css';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';

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
      // style={{ backgroundColor: 'green' }}
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
    <Col sm={4} className="App">
                <Navletras />
    </Col>
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
      <Col xm={8} className="App">
      <Card>
        <Accordion defaultActiveKey="0">
          <Card className="Opcuadros"> 
            <Card.Header>
              <div className="App-div"> 
                {/* <Card.Body className="Opcuadros">B</Card.Body> */}
                <CustomToggle className="Opcuadros" eventKey="0">B</CustomToggle>
                <Accordion.Collapse  eventKey="0">             
                <p className="App-div">La letra b (be) es la primera consonante. Ocupa el segundo lugar en el abecedario, justo después de la vocal a y antes de la letra C. Vamos a  aprender la B, tienes que juntar los labios para poder decirla. 
                Aprendamos palabras que empiezan por B, así como las diferentes sílabas que podemos formar: b + vocal (ba, be, bi, bo, bu), b + r + vocal (bra, bre, bri, bro, bru) y b + l + vocal (bla, ble, bli, blo, blu).</p> 
                </Accordion.Collapse>
              </div>
            </Card.Header>
            <div xm={4} className="Opcuadros"> 
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
            </div>
            --------br------
            <div xm={4} className="Opcuadros"> 
              <CustomToggle eventKey="1">bra</CustomToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>brazo, bravo</Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="2">bre</CustomToggle>
            </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>brecha</Card.Body>
              </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="3">bri</CustomToggle>
            </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>brindar, brillante</Card.Body>
              </Accordion.Collapse>  
            <Card.Header>
              <CustomToggle eventKey="4">bro</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>broma</Card.Body>
            </Accordion.Collapse>    
            <CustomToggle eventKey="5">bru</CustomToggle>
              <Accordion.Collapse eventKey="5">
                <Card.Body>bruto</Card.Body>
            </Accordion.Collapse>
            </div>
          </Card>
      </Accordion>
      
    </Card>
    </Col>
    <Col sm={1} md={1} className="App">
    <Card>
        <Accordion defaultActiveKey="0">
          <Card className="Opcuadros"> 
            <Card.Header>
              <Card.Body className="Opcuadros">C</Card.Body>
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