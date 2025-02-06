import React,{Component} from "react";

export default class EventosPropertyInitializersES7 extends Component{
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