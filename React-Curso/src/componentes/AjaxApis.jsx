import React, { Component } from 'react'

function Pokemon(props){
    return(
        <figure>
            <img src={props.img} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}
export default class AjaxApis extends Component{
    state = {
        pokemones:[]
    };
    async componentDidMount(){
        let url ="https://pokeapi.co/api/v2/pokemon/";
        await fetch(url).
        then(res => res.json()).
        then(json => {
                        json.results.forEach(pokemon => fetch(pokemon.url, {cache:`no-cache`}).
                        then(res=>res.json()).
                        then(json => {
                            let pokemon = {
                                id: json.id, 
                                name: json.name,
                                img: json.sprites.
                                front_default
                            };
                            let pokemones = [...this.state.pokemones,pokemon];
                            this.setState({pokemones});
                            // console.log(this.state.pokemones)
                        }) 
                        );
        }).catch(error => console.error(error));
       
        
    };
    componentDidUpdate(){

    };
    render(){
        return(<>
        <h2>Peticiones Asíncronas en Componentes de class</h2>
        {this.state.pokemones.length === 0 ? <p>Cargando...</p>: this.state.pokemones.map(pokemon => <Pokemon key={pokemon.id} name={pokemon.name} img={pokemon.img}/>)}
        </>)
    }
}