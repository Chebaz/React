import React from "react";

export default class Welcome extends React.Component{
    render(){
        return <p>Welcome {this.props.nome}</p>
    }
}
Welcome.defaultProps = {
    nome: "Marco"
};