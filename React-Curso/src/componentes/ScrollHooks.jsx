import React,{useState, useEffect} from "react";

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=>{
        console.log("FASE DE MONTAJE");
        //Creamos la seguiente fuction para crear la atualizacion de estado
        function moverScrol(){
            console.log("FASE DE ACTUALIZACION");
            setScrollY(window.scrollY);
            console.log(scrollY)
        };
        //Al llamar la function el estado se actualiza y se renderiza
        moverScrol();
        //Agregamos el evento para que se actualize el estado y hacer la suscripcion
        window.addEventListener("scroll", moverScrol);
        //devolvemos una fuction con el return para limpiar la suscripcion, es decir, para que no se siga ejecutando
        return()=>{
            window.removeEventListener("scroll", moverScrol);}
    });

    return(
        <>
        <h2>Movimentando Scroll - useEffect</h2>
        <div>{scrollY}</div>
        </>
    );
};