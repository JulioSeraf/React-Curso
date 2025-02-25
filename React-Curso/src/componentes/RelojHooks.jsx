import React,{useState,useEffect} from "react";

export default function RelojHooks(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(()=>{
        
        let temporizador;

        if(visible){
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString());
            },1000);
        }else{
           return ()=>{
            clearInterval(temporizador)
        };
        };
    },[visible]);

    return(<>
        <h2>Temporizador usando Hooks</h2>
        <span>{hora}</span>
        <nav>
            <button onClick={()=>{setVisible(false)}}>stop</button>
            <button onClick={()=>{setVisible(true)}}>start</button>
        </nav>
    </>)
};