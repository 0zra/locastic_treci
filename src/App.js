import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import ShowContact from "./components/contacts/ShowContact";

import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Locastic (Treći zadatak)" />
            <div className="container">
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/:id" component={ShowContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
