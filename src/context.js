import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === action.payload) {
            return {};
          } else {
            return contact;
          }
        })
      };
    case "ADD_CONTACT": {
      let id = 0;
      state.contacts.forEach(contact => id++);
      id += 1;
      const newContact = action.payload;
      newContact.id = id;
      return {
        ...state,
        contacts: [...state.contacts, newContact]
      };
    }

    default:
      return state;
  }
};

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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
