import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
