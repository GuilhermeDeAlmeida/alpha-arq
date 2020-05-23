import React from "react";
import "./App.css";
import BotaoConfirmacao from "../../component/botoes/botao-confirmacao/BotaoConfirmacao";
import BotaoNegacao from "../../component/botoes/botao-negacao/BotaoNegacao";

function App() {
  return (
    <div>
      <BotaoConfirmacao />
      <BotaoNegacao />
    </div>
  );
}

export default App;
