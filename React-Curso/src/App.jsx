import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ComponenteClass from './componentes/ComponenteClass';
import ComponenteFuncional from './componentes/ComponenteFuncional';
import Propiedades from './componentes/Propiedades';
import Estado from './componentes/Estado';
import RederizadoCondicional from './componentes/RenderizadoCondicional';
import RederizadoElementos from './componentes/RenderizadoElementos';
import EventoBindingES6 from './componentes/Evento-binding';
import {EventosPropertyInitializersES7,MasSobreEventos} from './componentes/EventosPropertyInitializers';
import Padre from './componentes/ComunicacionComponentes';
import CicloVida from './componentes/CicloDeVida';
import AjaxApis from './componentes/AjaxApis';
import ContadorHooks from './componentes/ContadorHooks';
function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Curso de React JonMircha</h1>
      </div>
      <section>
          <ComponenteClass msg="Componenete desde una prop"/>
          <hr />
          <ComponenteFuncional msg="Componente funcional desde una prop"/>
          <hr />
          <Propiedades 
          cadena="string prop"
          numero={27}
          booleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre:"julio", email:"juliomaluco14@gmail.com"}}
          fucion={(n1,n2)=>n1+n2}
          elementoReact={<i>elemento React desde props</i>}
          componenteReact={<ComponenteClass msg="Componente desde componente props"/>}
          />
          <hr/>
          <Estado/>
          <hr />
          <RederizadoCondicional/>
          <hr />
          <RederizadoElementos/>
          <hr />
          <EventoBindingES6/>
          <hr />
          <EventosPropertyInitializersES7/>
          <hr />
          <MasSobreEventos/>
          <hr />
          <Padre/>
          <hr />
          <CicloVida/>
          <hr />
          <AjaxApis/>
          <hr />
          <ContadorHooks/>
      </section>
    </>
  )
}

export default App
