import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Ivo",
        surname: "Ivic",
        adress: "Put kralja Zvonimira 16",
        postal_code: "123456",
        city: "Sinj",
        country: "Nigdjezemska",
        phone: "460-629",
        email: "something@somethingelse.com"
      },
      {
        id: 2,
        name: "Ante",
        surname: "Antic",
        adress: "Put kneza Trpimira 17",
        postal_code: "54654",
        city: "Sin City",
        country: "Nigdjezemska",
        phone: "460-555",
        email: "bla@blabla.com"
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
