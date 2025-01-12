import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ComponenteClass from './componentes/ComponenteClass';
import ComponenteFuncional from './componentes/ComponenteFuncional';
import Propiedades from './componentes/Propiedades';
import { componentePropriedad } from './componentes/Propiedades';
function App() {
  const [count, setCount] = useState(0)

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
          <br />
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
          />
      </section>
    </>
  )
}

export default App
