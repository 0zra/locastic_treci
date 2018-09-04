import React, { Component } from "react";
import { Consumer } from "../../context";
import PropTypes from "prop-types";

class Contact extends Component {
  onDeleteClick = async (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
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
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name} {surname}{" "}
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <i
                  onClick={() =>
                    alert("Ovo ce bit link za prikaz cilog kontakta")
                  }
                  className="fas fa-plus"
                  style={{
                    cursor: "pointer",
                    float: "right",
                    color: "blue",
                    marginRight: "1rem"
                  }}
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
        }}
      </Consumer>
    );
  }
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
