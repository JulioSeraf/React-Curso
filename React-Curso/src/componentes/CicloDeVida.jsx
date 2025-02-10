
import React,{Component} from "react";

class Reloj extends Component{
    //Componente criado para dar ejemplo del metodo componentWillUnmount();
    constructor(props){
        super(props);
    }
    componentWillUnmount(){
        //Usamos este metodo quando queremos hacer un progamacion pos elinimar un componente.
        console.log(3,"El componente a sido eliminado del DOM");
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component{
    constructor(props){
        super(props);
        console.log(0,"El componente se inicializa, aún no esta en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible:false
        };

        this.temporizador = null;

    };
    componentDidMount(){
        //si necesita hacer una peticion a una API, usamo este metodo en lugar de un contructor, pq dibuja los componente ante de la peticion
        console.log(1,"El Componente ya se encuentra en el DOM")
    };
    componentDidUpdate(preProps,prepStates){
        //Si antes de actualizar el estado nacessita obitener el estado anterio para cortejar algo, comparar o guardar, usas este metoso componentDiUpdate()
        console.log(2,"EL estados o las props del componente han cambiado");
        console.log(preProps);
        console.log(prepStates);
    };
   


    tictac = ()=>{
        this.temporizador =  setInterval(()=> {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        },1000);
    };
    iniciar = ()=>{
       this.tictac();
       this.setState({
        visible: true
       });
    };   
    detener = ()=>{
        clearInterval(this.temporizador);
        this.setState({
            visible: false
           });
    };
    render(){
        console.log(4,"El componente se dibuja (o redibuja por algun cambio) en el DOM (estado o props del componente)")
        return <>
        <h2>Ciclo de Vida Componentes React</h2>
        {this.state.visible && <Reloj hora={this.state.hora}></Reloj>}
        <button onClick={this.iniciar}>start</button>
        <button onClick={this.detener}>stop</button>
        </>
    };
};