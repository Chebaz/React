import React from "react";

export default class Welcome extends React.Component{
    render(){
        return( 
        <div>
            <p>Welcome {this.props.nome}</p>
            <p>Your age is {this.props.age}</p>
        </div>)
    }
}
Welcome.defaultProps = {
    nome: "Marco"
};