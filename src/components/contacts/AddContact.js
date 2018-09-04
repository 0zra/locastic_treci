import React from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends React.Component {
  state = {
    email: "",
    phone: "",
    city: "",
    country: "",
    postal_code: "",
    adress: "",
    surname: "",
    name: "",
    errors: {}
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    /*
    const obj = this.state;
    Object.entries(obj).forEach(([key, value]) => {
      if (value === "") {
        this.setState({
          errors: { [key]: "This field is required" }
        });
        alert("onda ovo");
      }
    });
    */
    const {
      name,
      surname,
      adress,
      postal_code,
      city,
      country,
      email,
      phone
    } = this.state;
    // Check For errors ---refactor this
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (surname === "") {
      this.setState({ errors: { surname: "Surame is required" } });
      return;
    }
    if (adress === "") {
      this.setState({ errors: { adress: "Adress is required" } });
      return;
    }
    if (postal_code === "") {
      this.setState({ errors: { postal_code: "Postal_code is required" } });
      return;
    }
    if (city === "") {
      this.setState({ errors: { city: "City is required" } });
      return;
    }
    if (country === "") {
      this.setState({ errors: { country: "Country is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    dispatch({ type: "ADD_CONTACT", payload: this.state });
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
      errors
    } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Surname"
                    name="surname"
                    placeholder="Enter Surname"
                    value={surname}
                    onChange={this.onChange}
                    error={errors.surname}
                  />
                  <TextInputGroup
                    label="Adress"
                    name="adress"
                    placeholder="Enter Adress"
                    value={adress}
                    onChange={this.onChange}
                    error={errors.adress}
                  />
                  <TextInputGroup
                    label="Postal code"
                    name="postal_code"
                    placeholder="Enter Postal code"
                    value={postal_code}
                    onChange={this.onChange}
                    error={errors.postal_code}
                  />
                  <TextInputGroup
                    label="City"
                    name="city"
                    placeholder="Enter City"
                    value={city}
                    onChange={this.onChange}
                    error={errors.city}
                  />
                  <TextInputGroup
                    label="Country"
                    name="country"
                    placeholder="Enter Country"
                    value={country}
                    onChange={this.onChange}
                    error={errors.country}
                  />

                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
