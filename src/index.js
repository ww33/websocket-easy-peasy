import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";

import store from "./store";
import { Counter } from "./components";

import "./styles.css";

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <h1>WebSocket with Easy-Peasy</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Counter />
      </div>
    </StoreProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
