import logo from '../assets/Logo_adactica_Tr.png';
import '../css/App.css';
import { Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Letras from '../imagenes/Letras/letras.png';
import Numeros from '../imagenes/Numeros/numeros.png';
import Juegos from '../imagenes/Juegos/Inc_juegos.png';
import vocales from '../imagenes/Letras/vocales_2.png'

import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

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

  function Principal() {
    return (
    <>
    <Container>
      <p> Posición de columnas</p> 
      <Row>
        <Col xs={10} md={8}>
          <Link to='/eltren'>lecturas <Image style={{ width: '10rem' }} src={vocales} rounded /></Link>
        </Col>
        <Col xs={20} md={15}>
          <Image src={Letras} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Numeros} roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src={Juegos} thumbnail />
        </Col>
      </Row>
    </Container>
    <Container>
      <p>Sílabas </p>
    <Container>
      <Row>
      <Col sm={1} md={1} className="App">
      <Card>
        <Accordion defaultActiveKey="0">
          <Card className="Opcuadros"> 
            <Card.Header>
              <Card.Body className="Opcuadros">c</Card.Body>
            </Card.Header>
              <CustomToggle eventKey="1">ci</CustomToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>cine, cima</Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="2">co</CustomToggle>
                </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>cosa, cola</Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
              <CustomToggle eventKey="3">cu</CustomToggle>
                </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>cuco,cuna</Card.Body>
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
              <Card.Body className="Opcuadros">D</Card.Body>
            </Card.Header>
              <CustomToggle eventKey="1">ci</CustomToggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>cine, cima</Card.Body>
            </Accordion.Collapse>
            <Card.Header>
              <CustomToggle eventKey="2">co</CustomToggle>
                </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>cosa, cola</Card.Body>
                  </Accordion.Collapse>
                  <Card.Header>
              <CustomToggle eventKey="3">cu</CustomToggle>
                </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>cuco,cuna</Card.Body>
                  </Accordion.Collapse>      
            </Card>
      
    </Accordion>
    </Card>
    </Col>
    </Row>
    </Container>
    </Container>  
    </>
  );
}

export default Principal;


