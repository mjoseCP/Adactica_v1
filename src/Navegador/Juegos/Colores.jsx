import logoDib from '../../imagenes/MiCopyR/dib_Adactica.gif';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import { Link} from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Jocs from '../../imagenes/MiCopyR/Jocs.gif';
import rojo from '../../imagenes/Juegos/colores/Rojo.png';
import verde from '../../imagenes/Juegos/colores/verde.png';
import amarillo from '../../imagenes/Juegos/colores/amarillo.png';
import azul from '../../imagenes/Juegos/colores/azul.png';
import naranja from '../../imagenes/Juegos/colores/naranja.png';
import morado from '../../imagenes/Juegos/colores/morado.png';
import rosa from '../../imagenes/Juegos/colores/rosa.png';


function AdivColor() {
  const alertClicked = () => {
    Swal.fire('Cogiste la respuesta correcta- "¡FENOMENAL"');
  };
  const alertClickedko = () => {
    Swal.fire('Piensalo bien, no es la respuesta');
  };
  
  return (
    <div className="colors">
    <header className="App-header">
        <img 
        src={logoDib}
        className="App-logoDiv" 
        alt="logo"
        />
    <>
    <div className="App-div"> 
        <p>
        Vamos a comprobar tu atención y ver cuantas eres capaz de acertar
        </p>
        
        <p>
        Fíjate que seguro que lo haces fenomenal
    </p>
    </div>
   <Navnum />
   {/* empezamos con los colores */}
<Container >
      <Row>
        <Card className="Opcuadros" style={{ width: '8rem' }}>
      <Card.Body >
      <Card.Title>¡Comenzamos!</Card.Title>
      <Col  style={{ width: '8rem' }} xs={3} md={2}>
      <Image style={{ width: '4rem' }} src={rojo} rounded />
      <ListGroup defaultActiveKey="#link1">
      {/* <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item> */}
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Blue   Azul    Blau
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Green  Verde   Vert
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClicked}>
        Red   Rojo  Roig
        </ListGroup.Item>
      </ListGroup>
        </Col>
      </Card.Body>
    </Card>
    <Card className="Opcuadros"  style={{ width: '8rem' }}>
      <Card.Body>
      <Card.Title>¡Continuamos"</Card.Title>
      <Col  style={{ width: '8rem' }} xs={3} md={2}>
          <Image style={{ width: '4rem' }} src={verde} rounded />
          <ListGroup  defaultActiveKey="#link1">
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Yellow   Amarillo    Groc
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClicked}>
        Green Verde   Vert
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Red   Rojo  Roig
        </ListGroup.Item>
      </ListGroup>    
      </Col> 
      </Card.Body>
    </Card>
    <Card className="Opcuadros"  style={{ width: '8rem' }}>
      <Card.Body>
      <Card.Title>¡Vamos"</Card.Title>
      <Col  style={{ width: '8rem' }} xs={3} md={2}>
          <Image style={{ width: '4rem' }} src={amarillo} rounded />
          <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item className="Opcuadros" action onClick={alertClicked}>
        Yellow   Amarillo   Groc
        </ListGroup.Item>
        <ListGroup.Item  className="Opcuadros" action onClick={alertClickedko}>
        Green  Verde   Vert
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Red   Rojo   Roig
        </ListGroup.Item>
      </ListGroup>    
      </Col> 
      </Card.Body>
    </Card>
    <Card className="Opcuadros"  style={{ width: '8rem' }}>
      <Card.Body>
      <Card.Title>¡Seguimos!</Card.Title>
      <Col  style={{ width: '8rem' }} xs={3} md={2}>
          <Image style={{ width: '4rem' }} src={azul} rounded />
          <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Yellow   Amarillo   Groc
        </ListGroup.Item>
        <ListGroup.Item  className="Opcuadros" action onClick={alertClicked}>
        Blue   Azul    Blau
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Pink   Rosa   Rosa
        </ListGroup.Item>
      </ListGroup>    
      </Col> 
      </Card.Body>
    </Card>
    <Card className="Opcuadros"  style={{ width: '8rem' }}>
      <Card.Body>
      <Card.Title>¡Otro más!</Card.Title>
      <Col  style={{ width: '8rem' }} xs={3} md={2}>
          <Image style={{ width: '4rem' }} src={naranja} rounded />
          <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item className="Opcuadros" action onClick={alertClicked}>
        Orange  Naranja   taronja
        </ListGroup.Item>
        <ListGroup.Item  className="Opcuadros" action onClick={alertClickedko}>
        Violet  Violeta   Violeta
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Pink   Rosa   Rosa
        </ListGroup.Item>
      </ListGroup>    
      </Col> 
      </Card.Body>
    </Card>
    <Card className="Opcuadros"  style={{ width: '8rem' }}>
      <Card.Body>
      <Card.Title>¡Continuamos!</Card.Title>
      <Col  style={{ width: '8rem' }} xs={3} md={2}>
          <Image style={{ width: '4rem' }} src={morado} rounded />
          <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Orange  Naranja   taronja
        </ListGroup.Item>
        <ListGroup.Item  className="Opcuadros" action onClick={alertClicked}>
        Violet  Violeta   Violeta
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Pink   Rosa   Rosa
        </ListGroup.Item>
      </ListGroup>    
      </Col> 
      </Card.Body>
    </Card>
    <Card className="Opcuadros"  style={{ width: '8rem' }}>
      <Card.Body>
      <Card.Title>¡Continuamos!</Card.Title>
      <Col  style={{ width: '8rem' }} xs={3} md={2}>
          <Image style={{ width: '4rem' }} src={rosa} rounded />
          <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item className="Opcuadros" action onClick={alertClickedko}>
        Orange  Naranja   taronja
        </ListGroup.Item>
        <ListGroup.Item  className="Opcuadros" action onClick={alertClickedko}>
        Violet  Violeta   Violeta
        </ListGroup.Item>
        <ListGroup.Item className="Opcuadros" action onClick={alertClicked}>
        Pink   Rosa   Rosa
        </ListGroup.Item>
      </ListGroup>    
      </Col> 
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
          <Link to='/juego'>Juegos</Link> 
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



export default AdivColor;