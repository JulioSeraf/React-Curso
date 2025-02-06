import React,{Component} from "react";



export default class EventoBindingES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
       this.sumar = this.sumar.bind(this);
    }
    sumar(){
        this.setState({
            contador: this.state.contador +1
        })
    }
    restar = () => {
        this.setState({
            contador: this.state.contador -1
        })
        
    }
    render(){
        return (
            <div>
                <h2>Eventos y Binding</h2>
                <div>{this.state.contador}</div>
                <button onClick={this.restar}>-</button>
                <button onClick={this.sumar}>+</button>
            </div>
        )
    }
};