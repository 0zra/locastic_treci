import React, { Component } from "react";

import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    const {
      name,
      surname,
      adress,
      postal_code,
      city,
      country,
      email,
      phone,
      id
    } = this.props.contact;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name} {surname}{" "}
          <i
            onClick={() => alert("Ovo ce bit link za prikaz cilog kontakta")}
            className="fas fa-plus"
            style={{ cursor: "pointer", float: "right", color: "blue" }}
          />
        </h4>
        {/*
        <ul className="list-group">
          <li className="list-group-item">Adress:{adress}</li>
          <li className="list-group-item">Postal code:{postal_code}</li>
          <li className="list-group-item">City:{city}</li>
          <li className="list-group-item">Country:{country}</li>
          <li className="list-group-item">Phone:{phone}</li>
          <li className="list-group-item">Email:{email}</li>
        </ul>
        */}
      </div>
    );
  }
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
