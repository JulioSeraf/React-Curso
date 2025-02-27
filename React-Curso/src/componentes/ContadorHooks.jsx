import React,{useState} from "react";

export default function ContadorHooks(props){
    const [contador, setContador]= useState(0);
    // devemos criar uns desestruturador para cada variable que queremos usar
    // const [estado, setEstado]= useState(false);

    return(
        <>
        <h2>Contador Hooks - useState</h2>
        {/* <p>Contador de {props.titulo}</p> */}
        <div>{contador}</div>
        <nav>
            <button onClick={()=> setContador(contador + 1)}>Sumar</button>
            <button onClick={()=> setContador(contador - 1)}>Restar</button>
        </nav>
        </>
    );
};

// ContadorHooks.defaultProps={
//     titulo:"Clicks"
// };