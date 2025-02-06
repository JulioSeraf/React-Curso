import React,{Component} from "react";

export default class Padre extends Component{
    state={
        contador: 0
    }
    
    incrementarContador = ()=>{
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    
    render(){
        return( <div>
                <h2>Comunicacion entre Componentes</h2>
                <div>contador {this.state.contador}</div>
                <Hijo msg= "Massagem para comunicacion padre a hijo"/>
                <Hijo msg = "Comunicacion entre hijo a padre via evento"         incrementarContador= {this.incrementarContador}/>

        </div>)
    }
};

function Hijo(props){
    return <>
        <p>{props.msg}</p>
        <button onClick={props.incrementarContador}>+</button>
    </>
}
