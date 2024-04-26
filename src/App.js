/*3. Importamos la confirguración de las rutas en App.js*/
import { Routes, Route } from 'react-router-dom'

import Footer from './Componentes/Footer'
import Navegador from './Componentes/Navegador';
import OtraNav from './Componentes/OtraNav';
import Bnav from './Componentes/Bnav.jsx';
import Main from './Componentes/Main';
//eslint-disable-next-line 

import Principal from './Componentes/Principal'
import Home from './Componentes/Home';
import Error from './Componentes/error';
import Productos from './Componentes/Productos';
import Api from './Componentes/Api';
import ApiDos from './Componentes/ApiDos';
import Letras from './Componentes/Letras';
import Juego from './Componentes/Juegos.jsx';
import Numero from './Componentes/Numeros.jsx';

import Adivina from './Navegador/Juegos/Adivina.jsx';
import AdivColor from './Navegador/Juegos/Colores.jsx';
import Eltren from './Navegador/Leemos/Eltren.jsx';
import Vocal from './Navegador/Leemos/Vocal.jsx';
import Silabas from './Navegador/Leemos/Silabas.jsx';
import Suma from './Navegador/Numeros/Suma.jsx';


function App() {
  return (
    <>
     {/* <Navegador />  */}
      <OtraNav />
      {/* <Bnav /> */}
      
      {/*configuramos las rutas, poniendo cada una de las que necesito por cada compoente que necesito*/}
      
      <Routes>
      <Route index element={ <Home /> }></Route>
        <Route path='/home' element={ <Home /> }></Route>
        <Route path='/principal' element={ <Principal/>}></Route>     
        <Route path='/main' element={ <Main/>}></Route>
        {/* <Route path='/productos' element={ <Productos /> }></Route>
        <Route path='/api' element={ <Api /> }></Route> */}
        <Route path='/apidos' element={ <ApiDos /> }></Route>       
        <Route path='/letras' element={ <Letras />}></Route>
        <Route path='/juego' element={ <Juego />}></Route>
        <Route path='/numero' element={ <Numero />}></Route>
        <Route path='*' element={ <Error />}></Route>

        <Route path='/Adivina' element={ <Adivina />}></Route>
        <Route path='/AdivColor' element={ <AdivColor />}></Route>
        <Route path='/Vocal' element={ <Vocal />}></Route>
        <Route path='/Silabas' element={ <Silabas />}></Route>
        <Route path='/ElTren' element={ <Eltren />}></Route>
        <Route path='/Suma' element={ <Suma />}></Route>
        
        
      </Routes>

      <Footer />
    
    </>
  );
}

export default App;
