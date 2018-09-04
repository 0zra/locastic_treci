import React, { Component } from "react";

import Header from "./components/layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Locastic (Treći zadatak)" />
      </div>
    );
  }
}

export default App;
