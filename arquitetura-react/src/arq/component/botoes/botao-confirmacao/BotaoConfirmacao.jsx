import React, { Component } from "react";
import {connect} from "react-redux";
import * as actionCreators from "../../../../connection/actions/index.js"
import Botao from "../Botao";

class BotaoConfirmacao extends Component {
     
    
callApiColors = this.props.loadColor;
  render() {
    console.log(this.props.botaoConfirmacao.cor)
    return (
      <div>
        <Botao handleClick={this.callApiColors} color={this.props.color} titulo={this.props.botaoConfirmacao.titulo} cor={this.props.botaoConfirmacao.cor} />
      </div>
    );
  }
}


const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BotaoConfirmacao)