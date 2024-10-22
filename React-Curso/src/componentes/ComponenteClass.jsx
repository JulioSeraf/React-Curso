import React,{Component} from "react";

class ComponenteClass extends Component{
    render(){
        return <h2>{this.props.msg}</h2>
    }
}

export default ComponenteClass;