import React,{useState,useEffect} from "react";

export default function RelojHooks(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    function Reloj(props){
        return <span>{props.hora}</span>
    }

    useEffect(()=>{
        
        let temporizador;

        if(visible){
            console.log("Fase de montaje y atualzazion");
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString());
            },1000);
        }else{
            clearInterval(temporizador)
        };
        return ()=>{
         console.log("Fase de desmontaje");
         clearInterval(temporizador)
        };
    },[visible]);

    return(<>
        <h2>Temporizador usando Hooks</h2>
        {visible && <Reloj hora={hora}/>}
        <nav>
            <button onClick={()=>{setVisible(false)}}>stop</button>
            <button onClick={()=>{setVisible(true)}}>start</button>
        </nav>
    </>)
};