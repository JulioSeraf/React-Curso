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
        let url ="https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
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
                            console.log(this.state.pokemones)
                        }) 
                        );
        }).catch(error => console.error(error));
       
        
    };
    componentDidUpdate(){

    };
    render(){
        return(<>
        <h2>Peticiones Asíncronas en Componentes de class</h2>
        {this.state.pokemones.map(el => <Pokemon key={el.id} name={el.name} img={el.img}/>)}
        </>)
    }
}