import React, { Component } from 'react'

export default class Botao extends Component {
    
    style = {
        backgroundColor : this.props.cor,
        width: "100%",
    }
    render() {
        console.log(this.style)
        return (
            <div>
                <button onClick={()=>{this.props.handleClick()}} style = {this.style} >{this.props.titulo} </button>
            </div>
        )
    }
}
