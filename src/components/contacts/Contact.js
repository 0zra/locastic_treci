import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      id,
      city,
      postal_code,
      country
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
                <Link to={`/contact/${id}`}>
                  <i
                    className="fas fa-plus"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "blue",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>
              <ul className="list-group">
                <li className="list-group-item">{`${city} (${postal_code}), ${country}`}</li>
              </ul>
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
