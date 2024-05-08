import logoDib from '../../imagenes/MiCopyR/dib_Adactica.gif';
import logo from '../../assets/Logo_adactica_Tr.png';
import '../../css/App.css';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Ratio from 'react-bootstrap/Ratio';
import Pagination from 'react-bootstrap/Pagination';
import Letras from '../../imagenes/Letras/letras.png';
import Numeros from '../../imagenes/Numeros/numeros.png';
import Juegos from '../../imagenes/Juegos/Inc_juegos.png';
import Lecty from '../../imagenes/MiCopyR/Lecty.gif';
import tren from '../../imagenes/Letras/tren.gif';

function Eltren() {
  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

  return (
    <div className="App">
    <header className="App-header">
        <img 
        src={Lecty}
        className="App-logoDiv" 
        alt="Cara de niña Lety"
        />
    <>
    <div className="App-div"> 
        <h1>El tren</h1>
        <h2>haz lo que va contando</h2>
        
        <p className="App-div">
        Dos hermanos están aburridos, no saben qué hacer solos en una habitación dan vueltas se han cansado de jugar.
Sólo tienen unas hojas y lápices de colores para pintar, así que sin demasiadas ganas se miran y deciden dibujar, pero… ¿Qué pueden pintar? No se les ocurre nada.
</p>
<p p className="App-div">
Así que Sam sin saber bien que hacer, coge un lápiz sin mirar, resulta que es rojo y con él pinta un circulo en el lado izquierdo de la hoja, Mar lo mira coge una pintura verde y a la derecha pegadito le dibuja un rectángulo, entonces Sam sigue y ahora le sigue con un cuadrado azul.
        </p>
        <p p className="App-div">
          Mar lo mira y dice: «Parece un tren» y los dos hermanos se ríen, y es verdad así que siguen dibujando.</p>
        <p p className="App-div">
        Pintan un techo rosa porque si hace sol o llueve no se vaya a mojar la gente, pero para lo más resistente pueden deciden poner otro vagón, así que manos a la obra. Ponen un triangulo naranja delante para cuando llegue el tren pueda para sin chocar.
        </p>
        
        <p cp className="App-div">
        Otro rectángulo para unir y otro cuadrado para acabar, ahora lo pintamos morado, y dejamos un pequeño «enganche» azul por si algún día decidimos hacerlo más largo.
    </p>
    <p className="App-div">
    Pero ahora lo vuelven a mirar ¿está acabado este tren? ¿Qué piensas?
    </p>
    <p p className="App-div">
    Nos faltan las ruedas, y porqué no unas vías para que empiece una gran aventura. 
    </p>
    
    <img 
            src={tren}
            className="App-logoDiv" 
            alt="dibujo de tren con formas"
            />
    </div>
    </>

</header>
<div>
    {/* <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br /> */}

    <Pagination size="sm">{items}</Pagination>
  </div>


</div>

  );
}

export default Eltren;




