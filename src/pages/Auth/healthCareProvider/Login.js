import React, { Component } from 'react';
import { NormalInput, NormalButton } from 'component/Common';
import SimpleReactValidator from 'services/plugins';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../../assets/scss/pages/auth.scss';

export class LoginClass extends Component {
  state = {
    formFields: {
      email: '',
      password: '',
    },
  };

  componentWillMount() {
    this.validator = new SimpleReactValidator({
      element: message => <span className="error-message font-md">{message}</span>,
      autoForceUpdate: this,
    });
  }

  handleInput = ({ target: { value, name } }) => {
    let formFields = Object.assign({}, this.state.formFields);
    formFields[name] = value;
    this.setState({
      formFields,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.validator.allValid()) {
      let { formFields } = this.state;
      this.props.login(formFields);
    } else {
      this.validator.showMessages();
    }
  };

  render() {
    let { email, password } = this.state.formFields;

    return (
      <>
        <div className="auth-container-login w-100 py-5 py-lg-4">
          <div className="text-center text-white">
            <h1 className="m-0 fw-bold">Welcome to Medall</h1>
            <h3 className="m-0 fw-600">Login</h3>
          </div>
          <div className="inner-container py-4">
            <form className="col-5 aligncenter">
              <div className="form-group">
                {this.validator.message('emailAddress', email, 'required|email')}
                <div className="input-group">
                  <NormalInput
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    name="email"
                    onChange={this.handleInput}
                    max="80"
                  />
                </div>
              </div>
              <div className="form-group pt-2">
                {this.validator.message('password', password, 'required')}
                <div className="input-group">
                  <NormalInput
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={this.handleInput}
                    className={`form-control pr-5 ${password.length == 0 ? 'empty' : ''}`}
                  />
                </div>
              </div>
              <p className="w-100 d-block text-right text-white fw-600 fs-14 pb-4">
                <Link className="text-decoration-none" to="#">Forgot password?</Link>
              </p>
              <div className="form-group mb-0 d-flex flex-wrap justify-content-center pt-4">
                <NormalButton
                  onClick={this.handleSubmit}
                  label="Login with Password"
                  className="bg-white text-c1 w-100 border-radius-4 text-uppercase border-radius-30 fw-600 mb-3"
                />
                <Link className="w-100" to="/healthCareProvider/verifyOTP">
                  <NormalButton
                    label="Login with OTP"
                    className="bg-c1 bc-white text-white w-100 border-radius-4 text-uppercase border-radius-30 fw-600 mt-2 border-1"
                  />
                </Link>
              </div>
            </form>
            <div className="pt-5 text-white text-center">Don’t have account yet?&nbsp;
              <Link to="/healthCareProvider/register" className="fw-700 text-decoration-none">Signup</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {},
    dispatch,
  );
};

export const Login = connect(null, mapDispatchToProps)(LoginClass);
