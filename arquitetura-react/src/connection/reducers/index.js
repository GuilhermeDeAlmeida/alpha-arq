
let defaultState={
    botaoConfirmacao: {
        titulo: "Confirmar",
        cor:"green"
    },

    botaoNegacao: {
        titulo: "Não",
        cor:"red"
    },
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_COLOR"){
        return{
            ...state,
            color:action.color
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;