import React,{useState, useEffect} from "react";
import { use } from "react";

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        console.log("FASE DE MONTAJE");
    },[] //Agregamos un array vacio para que solo se ejecute una vez, que es en el montaje
    );

    useEffect(()=>{
        console.log("FASE DE ACTUALIZACION");
    } //No agregamos el array vacio para que se ejecute en cada actualizacion, se ejecutara con qualquier cambio, en estados y props
    );
    
    useEffect(()=>{
        console.log("FASE DE ACTUALIZACION");
        //Creamos la seguiente fuction para crear la atualizacion de estado
        function moverScrol(){
            setScrollY(window.scrollY);
            // console.log(scrollY)
        };
        //Al llamar la function el estado se actualiza y se renderiza
        moverScrol();
        //Agregamos el evento para que se actualize el estado y hacer la suscripcion
        window.addEventListener("scroll", moverScrol);
        //devolvemos una fuction con el return para limpiar la suscripcion, es decir, para que no se siga ejecutando
        return()=>{
            window.removeEventListener("scroll", moverScrol);}
    },[scrollY] //Agregamos el estado para que se ejecute cada vez que se actualize el estado
    );

    return(
        <>
        <h2>Movimentando Scroll - useEffect Ciclo de Vida</h2>
        <div>{scrollY}</div>
        </>
    );
};