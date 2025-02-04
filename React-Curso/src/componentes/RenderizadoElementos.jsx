import React,{Component} from "react";

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
            <ul>{this.state.persona.map((el)=>{<li>{el}</li>})}</ul>
        </div>
    }
}