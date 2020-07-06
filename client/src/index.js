import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import materializeCSS from "materialize-css/dist/css/materialize.min.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
