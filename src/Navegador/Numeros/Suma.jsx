import logoDib from '../../imagenes/MiCopyR/dib_Adactica.gif';
import logo from '../../assets/Logo_adactica_Tr.png';
import '../../css/App.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

import Letras from '../../imagenes/Letras/letras.png';
import Numeros from '../../imagenes/Numeros/numeros.png';
import Juegos from '../../imagenes/Juegos/Inc_juegos.png';
import Lecty from '../../imagenes/MiCopyR/Lecty.gif';



function Suma() {
  return (
    <header className="App-header">
        <img 
            src={Lecty}
            className="App-logoDiv" 
            alt="Cara de niña Lety"
        />
    <>

    <div className="App-div"> 
      <p>Comencemos a realizar sumas senciallas, todas serás hasta el 10.
        Sólo tienees que pensar el resultado y decirlo en voz alta antes de ver el resultado para comprobar junto con quien te este ayudando lo bien que lo haces</p> 
    </div>
  
  <Container >
    <Row>
  <Col xs={4} className="App">
    <Accordion defaultActiveKey="0"> 
    <div className='Opcuadros'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>1 + 4 = </Accordion.Header>
        <Accordion.Body>
        5
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div className='Opcuadros'>
      <Accordion.Item eventKey="1">
        <Accordion.Header>2 + 7 = </Accordion.Header>
        <Accordion.Body>
        9
        </Accordion.Body>
      </Accordion.Item>
      </div>
    <div className='Opcuadros'>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3 + 5 = </Accordion.Header>
        <Accordion.Body>
        8
        </Accordion.Body>
      </Accordion.Item>
      </div>
     <div className='Opcuadros'>
      <Accordion.Item eventKey="3">
        <Accordion.Header>6+ 4 = </Accordion.Header>
        <Accordion.Body>
        10
        </Accordion.Body>
      </Accordion.Item>
      </div>
    </Accordion>
    </Col>
   
    <Col xs={4} className="App">
    <Accordion defaultActiveKey="0"> 
    <div className='Opcuadros'>
      <Accordion.Item eventKey="0">
        <Accordion.Header> 7 + 3 = </Accordion.Header>
        <Accordion.Body>
        9
        </Accordion.Body>
      </Accordion.Item>
      </div>
      <div className='Opcuadros'>
      <Accordion.Item eventKey="1">
        <Accordion.Header> 3 + 1 = </Accordion.Header>
        <Accordion.Body>
        4
        </Accordion.Body>
      </Accordion.Item>
      </div>
    <div className='Opcuadros'>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3 + 4 = </Accordion.Header>
        <Accordion.Body>
        7
        </Accordion.Body>
      </Accordion.Item>
      </div>
     <div className='Opcuadros'>
      <Accordion.Item eventKey="3">
        <Accordion.Header>2 + 4 = </Accordion.Header>
        <Accordion.Body>
        6
        </Accordion.Body>
      </Accordion.Item>
      </div>
    </Accordion>
    </Col>
    </Row>
    </Container>
    </>
    </header>
  );
}

export default Suma;