import logoDib from '../imagenes/MiCopyR/dib_Adactica.gif';
import logo from '../assets/Logo_adactica_Tr.png';
import '../css/App.css';

import { Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import LetrasD from '../imagenes/Letras/letras.png';
import Numeros from '../imagenes/Numeros/numeros.png';
import Juegos from '../imagenes/Juegos/Inc_juegos.png';
import Lecty from '../imagenes/MiCopyR/Lecty.gif';
import Numy from '../imagenes/MiCopyR/Numy.gif';
import Jocs from '../imagenes/MiCopyR/Jocs.gif';
import { CardLink } from 'react-bootstrap';
import Letras from './Letras';
import Juego from './Juegos';

const Veletras = () =>{
 
  <Link to='/letras'></Link>
} 

const Home = () =>{
    return(

        <div className="App-div">
        <header className="App-header"> 
            <img 
            src={logoDib}
            className="App-logoDiv" 
            alt="logo"
            />
        <>
        <div className="App-div"> 
            <p>
            Bienvenidos a Adactica, si has llegado hasta aquí es porque estás buscando ejercicios para tus peques
            y tenemos que decirte que estás en una buena página, trabajamos para que sea lo más fácil y divertido
            para ellos el tener que aprender.
            </p>
            <p>
            Todos hemos sido niños y no todo se nos da bien, y cuando se "hace bola" buscamos las mil maneras
            para que no llegue el momento de enfrentarnos a ella, así que vamos a intentar que sea lo más divertido
            posible; pero sobre todo vamos a buscar que les guste ponerse a aprender
            </p>
            
        </div>
        <Container >
      <Row>
        <Card className="Opcuadros" style={{ width: '10rem' }}>
      <Card.Body >
      <Card.Title>Letras</Card.Title>
      <Col  style={{ width: '10rem' }} xs={6} md={4}>
      <Image style={{ width: '6rem' }} src={Lecty} rounded />
          
        </Col>
      <Card.Img variant="top" src={LetrasD} />    
      <Link to='/letras'>
        <Button variant="primary">Letras</Button>
        </Link>
        {/* <Button variant="primary">Comencemos</Button>  */}
      </Card.Body>
    </Card>
    <Card className="Opcuadros"  style={{ width: '10rem' }}>
      <Card.Body>
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
        <Link to='/Juego'>
        <Button variant="primary">Juegos</Button>
        </Link>
      </Card.Body>
    </Card>
    </Row>
    </Container> 
            </>

        </header>
        </div>
    )
}

export default Home;