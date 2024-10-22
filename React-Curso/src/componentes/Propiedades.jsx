import React from "react";
import PropTypes from "prop-types";
export default function Propiedades(props){
    return <div>
            <h2>las Props</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"verdadero":"false"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{"Nombre: " + props.objeto.nombre + ", Email: " + props.objeto.email}</li>
                <li>{"funcion de sumar desde prop: " + props.fucion(7,10)}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
           </div>
}



// para definir propiedades por defeitos, sen precisar definirlas en los compononetes. dejara de ser usada
// Propiedades.defaultProps = {
//     porDefeito:"las Props",
// }

Propiedades.propTypes = {
    numero:PropTypes.number
}