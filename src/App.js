import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";

import { Provider } from "./context";

import Header from "./components/layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Locastic (Treći zadatak)" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
