import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">Contacts</h1>
              {contacts.map(contact => {
                if (contact.id !== undefined) {
                  return <Contact key={contact.id} contact={contact} />;
                } else {
                  return null;
                }
              })}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
