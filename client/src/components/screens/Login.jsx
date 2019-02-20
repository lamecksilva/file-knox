import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { authActions } from "../../actions";
import TextInput from "../common/TextInput.jsx";

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // State
  state = {
    email: "",
    password: "",
    errors: {}
  };

  // Prop types 
  static propTypes = {
    loginUser: PropTypes.func.isRequired
  }

  //  ++++++++++++ Life Cycle Functions +++++++++++++++
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //  =====  Other Functions ======
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="loginContainer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto loginFormContainer">
              <h2 className="loginTitle">Login</h2>
              <form onSubmit={this.handleSubmit}>
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

                <button
                  type="submit"
                  className="btn d-block mx-auto mt-4 w-75 loginBtn"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.error
});

const mapDispatchToProps = { loginUser: authActions.loginUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
