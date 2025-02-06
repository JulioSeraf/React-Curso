import React,{Component} from "react";

export class EventosPropertyInitializersES7 extends Component{
    //se elimina el constructor de class y no decalramos this al crear State
    state = {
        idioma: "en",
        title: "Welcome"
    };

    //para no hacer el bindind usamos arrow fuction

    updateText = () => {
        if(this.state.idioma == "en"){
            this.setState({
              idioma:"es",
              title: "Bienvenido"
            })
        }else{
            this.setState({
            idioma:"en",
            title: "Welcome"
          })
        }
        
    };

    render(){
        return <h2 onClick={this.updateText}>{this.state.title}</h2>
    }
};

function EventoPersonalizado(props){
    return <button onClick={props.myOnClick}>click</button>
}

export class MasSobreEventos extends Component{
    handleEvent = (e, texto)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log(e.nativeEvent.target)
        console.log(texto)

    }
    render(){
        return (
           <div>
             <h2>Mas Sobre Eventos</h2>
             <button onClick={(e)=> this.handleEvent(e, "messagem para teste de mas parametros ")}>Saludar</button>
             <h2>Evento personalizado</h2>
             <EventoPersonalizado myOnClick={(e)=> this.handleEvent(e, "messagem para teste de mas parametros ")}/>
           </div>
        )
    }
}