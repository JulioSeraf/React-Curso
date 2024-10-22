import React from "react";

export default function Propiedades(props){
    return <div>
            <h2>{props.porDefeito}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"verdadero":"false"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{"Nombre: " + props.objeto.nombre + ", Email: " + props.objeto.email}</li>
                <li>{"funcion de sumar desde prop: " + props.fucion(7,10)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componente}</li>
            </ul>
           </div>
}

export const componentePropriedad = (props)=>{
    return props.n1 * props.n2 
 }

// para definir propiedades por defeitos, sen precisar definirlas en los compononetes.
Propiedades.defaultProps = {
    porDefeito:"las Props"
}