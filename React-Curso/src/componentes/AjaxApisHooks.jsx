import React, {useState,useEffect} from "react";

export default function AjaxApisHooks(){
    const [pokemons,setPokemons]= useState([]);
    const [error, setError] = useState({error:false, mensaje:""
    });

    function Pokemon(props){
        return(
            <figure>
                <img src={props.img} alt={props.name} />
                <figcaption>{props.name}</figcaption>
            </figure>
        );
    };

    // useEffect(()=>{
    //     let url = "https://pokeapi.co/api/v2/pokemon";
    //     fetch(url).then(res=>res.json()).then(data => {
    //         data.results.forEach((el)=>{
    //             fetch(el.url).then(res => res.json()).then(
    //                 data => {
    //                     let pokemon = {
    //                         id: data.id,
    //                         name: data.name,
    //                         img: data.sprites.front_default
    //                     };
                        
    //                     setPokemons((pokemons)=> [...pokemons, pokemon]);
                        
    //                 }).catch(error => console.log(error));
    //             });
    //     }).catch(error =>{
    //          console.log(error);
    //          setError({error:true, mensaje:error.message});
    //         });

    //     return()=>{console.log("Componente Desmontado")};
    // },[]);  
    
    useEffect(()=>{
        const getPokemons = async(url)=>{
           let res = await fetch(url),
           json = await res.json();
           console.log(url);

           json.results.forEach(async(el)=>{
               let res = await fetch(el.url),
               data = await res.json(),
               pokemon = {
                        id: data.id,
                        name: data.name,
                        img: data.sprites.front_default
                    };
                    
                    setPokemons((pokemons)=> [...pokemons, pokemon]);
                    console.log(pokemons);      
                }
            );
        };
            getPokemons("https://pokeapi.co/api/v2/pokemon/");
    },[]);
                
    return(<>
        <h2>Peticiones com Hooks, Pokemons Api</h2>
        {error.error? <p>Hay un error : {error.mensaje}</p> : pokemons.length === 0? <p>Cargando...</p>:pokemons.map((el)=> <Pokemon key={el.id} name={el.name} img={el.img}/>)};
    </>);
}