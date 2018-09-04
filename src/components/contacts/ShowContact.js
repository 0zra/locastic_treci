import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

class ShowContact extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: +id });
  };
  render() {
    const id = this.props.match.params.id;

    return (
      <Consumer>
        {value => {
          const { dispatch, contacts } = value;
          if (
            contacts[id - 1] === undefined ||
            contacts[id - 1].id === undefined
          ) {
            return (
              <div>
                <h1 className="display-4">
                  <span className="text-danger">
                    Contact with the id:{id} does not exist
                  </span>
                </h1>
              </div>
            );
          }
          const {
            name,
            surname,
            adress,
            postal_code,
            city,
            country,
            email,
            phone
          } = contacts[id - 1];
          return (
            <div className="card card-body mb-3">
              <h4>
                {name} {surname}{" "}
                <Link to="/">
                  <i
                    className="fas fa-times"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                </Link>
              </h4>

              <ul className="list-group">
                <li className="list-group-item">Adress:{adress}</li>
                <li className="list-group-item">Postal code:{postal_code}</li>
                <li className="list-group-item">City:{city}</li>
                <li className="list-group-item">Country:{country}</li>
                <li className="list-group-item">Phone:{phone}</li>
                <li className="list-group-item">Email:{email}</li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default ShowContact;
/*
ShowContact.propTypes = {
  //posli uredi proptypes
};
*/
