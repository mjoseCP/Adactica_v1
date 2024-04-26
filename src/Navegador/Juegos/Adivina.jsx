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
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Jocs from '../../imagenes/MiCopyR/Jocs.gif';
import Accordion from 'react-bootstrap/Accordion';

function Adivina() {
  const adivina1 = () =>{
    Swal.fire("Chocolate");
  }
    const adivina2 = () =>{
      /*  console.log('Estamos usando eventos en React');
      alert('Estamos usando eventos en React');
      console.log(personajes); **esto es un alert normal ** */
      Swal.fire("Pera");    
}
const adivina3 = () =>{ 
  Swal.fire("Pijama");
  
}

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
    
    <Container className="App-header">
    <Row>
    <Card  style={{ width: '14rem' }}>
        <Card.Body>
        <Card.Title>Adivinanza -1</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Lee con atención</Card.Subtitle>
        <Card.Img variant="top" style={{ width: '6rem' }} src={Jocs} />
        <Card.Text>
            Choco me llama la gente, late mi corazón.
            El que no sepa mi nombre, es un gran tontorrón.
        </Card.Text>
        <input type="text" class="form-control" id="nombreProducto" required />
        <Button className='w-35 m-4' onClick={ adivina1 }>Respuesta</Button>
        </Card.Body>
    </Card>
    <Card  style={{ width: '14rem' }}>
  <Card.Body>
  <Card.Title>Adivinanza - 2</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Te digo la respuesta</Card.Subtitle>
  <Col  style={{ width: '10rem' }} xs={6} md={4}>   </Col> 
  <Card.Img variant="top" style={{ width: '6rem' }} src={Jocs} />
  
      <Card.Text>
        Blanca por dentro, verde por fuera.
        Si quieres que te lo diga, espera.
      </Card.Text>
      <Accordion defaultActiveKey="0"> 
    <Accordion.Item eventKey="3">
        <Accordion.Header>Ayuda </Accordion.Header>
        <Accordion.Body>
        'Manzana'
        'Pera'
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
      <input type="text" class="form-control" placeholder='Respuesta' id="nombreProducto" required />
      <Button className='w-35 m-4' onClick={ adivina2 }>Respuesta</Button>
  </Card.Body>
    </Card>
    <Card  style={{ width: '14rem' }}>
        <Card.Body>
        <Card.Title>Adivinanza - 3</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Lee con atención</Card.Subtitle>
        <Card.Img variant="top" style={{ width: '6rem' }} src={Jocs} />
        <Card.Text>
            Por la noche me lo pongo, por el día me lo quito y en la siesta lo uso un poquito.
        </Card.Text>
        <Accordion defaultActiveKey="0"> 
    <Accordion.Item eventKey="3">
        <Accordion.Header>Ayuda </Accordion.Header>
        <Accordion.Body>
        'Pijama'
        'Sueño'
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        <input type="text" class="form-control" placeholder='Respuesta' id="nombreProducto" xs={2} bg="success"  required  />
        <Button className='w-35 m-4' onClick={ adivina3 }>Comrpueba</Button>
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
          <Link to='/AdivColor'>Colores </Link>
          </NavLink>
          </Nav>
          
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
  );
}
export default Adivina;