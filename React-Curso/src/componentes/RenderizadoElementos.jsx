import React,{Component} from "react";
import data from "../helpers/RenderizadoElementos.json";

// console.log(data)

function ElementoLista(props){
    return(
        <li>
         <a target="_blank" href={props.el.web}>{props.el.name}</a>
        </li>
    )
    
}
export default class RederizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            persona :["julio","serafimone97@gmail.com", 4949494]
        }
    
    }
    render(){
        return <div>
            <h2>Renderizado Elementos</h2>
            <ul>{this.state.persona.map((el, index)=> <li key={index}>{el}</li>)}</ul>
            <h3>Rederizado con json, frameworks mais populares</h3>
            <ol>
                {data.frameworks.map((el) => <ElementoLista key={el.id} el={el}/>)}
            </ol>
        </div>
    }
};