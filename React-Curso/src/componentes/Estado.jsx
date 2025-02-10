import React,{Component} from "react";

function ContadorHijo(props){
    return <div>
        <h2>Contador Hijo</h2>
        <h3>{props.contadorHijo}</h3>
    </div>
}
export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0
        }
        // setInterval(() => {
        //     // salta un warning pq todavia no esta aplicado el montaje de ciclo de vida 
        //     this.setState({
        //         contador: this.state.contador + 1
        //     })
        // }, 1000);
    };
    render(){
        return <div>
            <h2>El State</h2>
            <p>{this.state.contador}</p>
            <ContadorHijo contadorHijo ={this.state.contador}></ContadorHijo>
        </div>
    };
}