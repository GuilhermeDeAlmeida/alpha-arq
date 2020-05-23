import React, { Component } from 'react'
import Botao from '../Botao'
import {connect} from "react-redux";
import * as actionCreators from "../../../../connection/actions/index.js"


class BotaoNegacao extends Component {
    callApiColors = this.props.loadColor;
    render() {
        return (
            <div>
                <Botao handleClick={this.callApiColors} titulo={this.props.botaoNegacao.titulo} cor={this.props.botaoNegacao.cor}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BotaoNegacao)