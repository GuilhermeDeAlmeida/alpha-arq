import React from "react";
import thunk from "redux-thunk";
import reducers from "./connection/reducers/index.js";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./arq/module/app/App";

import "./index.css";

let store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
