import React, { Component } from "react";
import { connect } from "react-redux";
import TextInput from "../common/TextInput.jsx";
import { authActions } from "../../actions/auth.actions";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };

    this.handleSubmit = event => {
      event.preventDefault();
      const userData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      };

      this.props.registerUser(userData, this.props.history);
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="registerContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto registerFormContainer">
              <h2 className="loginTitle">Register Here</h2>
              <form onSubmit={this.handleSubmit}>
                <TextInput
                  label="Name"
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                  error={errors.name}
                />
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  error={errors.email}
                />
                <TextInput
                  label="Password"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  error={errors.password}
                />
                <TextInput
                  label="Confirm password"
                  name="password2"
                  type="password"
                  onChange={this.handleChange}
                  error={errors.password2}
                />

                <button
                  type="submit"
                  className="btn d-block mx-auto mt-4 w-75 loginBtn"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const errors = state.error;
  return { errors };
};

const mapDispatchToProps = {
  registerUser: authActions.registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
