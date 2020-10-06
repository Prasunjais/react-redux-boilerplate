import React, { Component } from 'react';
import { NormalInput, NormalButton } from 'component/Common';
import { PolicyFooter } from 'component/Footer';

import SimpleReactValidator from 'services/plugins';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../../assets/scss/pages/auth.scss';

export class RegisterClass extends Component {
  state = {
    formFields: {
      name: '',
      specilization: '',
      email: '',
      hospitalname: '',
      phoneNumber: '',
      phoneCode: '',
      password: '',
      confirmPassword: '',
    },
  };

  componentWillMount() {
    this.validator = new SimpleReactValidator({
      validators: {
        checkPassword: {
          message: 'Given :attribute does not match',
          rule: function (val, params) {
            return val === params[0];
          },
        },
      },
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

      console.log(formFields)

    } else {
      this.validator.showMessages();
    }
  };

  render() {
    let { name, specilization, email, hospitalname, phoneNumber, phoneCode, password, confirmPassword } = this.state.formFields;

    return (
      <>
        <div className="auth-container-register w-100 py-5 py-lg-4">
          <div className="text-center text-white">
            <h1 className="m-0 fw-bold">Welcome to Medall</h1>
            <h3 className="m-0 fw-600">Sign-Up</h3>
          </div>
          <div className="inner-container py-4">
            <form className="col-5 aligncenter">
              <div className="form-group">
                {this.validator.message('name', name, 'required')}
                <div className="input-group">
                  <NormalInput
                    id="name"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={this.handleInput}
                    max="80"
                  />
                </div>
              </div>
              <div className="form-group pt-2">
                {this.validator.message('specilization', specilization, 'required')}
                <div className="input-group">
                  <NormalInput
                    id="specilization"
                    placeholder="Specilization"
                    value={specilization}
                    name="specilization"
                    onChange={this.handleInput}
                    max="120"
                  />
                </div>
              </div>
              <div className="form-group pt-2">
                {this.validator.message('emailAddress', email, 'required|email')}
                <div className="input-group">
                  <NormalInput
                    id="email"
                    placeholder="Email ID"
                    value={email}
                    name="email"
                    onChange={this.handleInput}
                    max="80"
                  />
                </div>
              </div>
              <div className="form-group pt-2">
                {this.validator.message('hospitalname', hospitalname, 'required')}
                <div className="input-group">
                  <NormalInput
                    id="hospitalname"
                    placeholder="Hospital name"
                    value={hospitalname}
                    name="hospitalname"
                    onChange={this.handleInput}
                    max="120"
                  />
                </div>
              </div>
              <div className="form-group pt-2">
                <div className="d-flex">
                  <div className="d-block col-3 phone">
                    <div className="row">
                      {this.validator.message('code', phoneCode, 'required')}
                      <div className="input-group pr-4 code">
                        <NormalInput
                          id="phoneCode"
                          placeholder="+91"
                          value={phoneCode}
                          name="phoneCode"
                          onChange={this.handleInput}
                          className="form-control text-center"
                          max="4"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-block col-9">
                    <div className="row">
                      {this.validator.message('phoneNumber', phoneNumber, 'required')}
                      <div className="input-group number">
                        <NormalInput
                          id="phoneNumber"
                          placeholder="Phone number"
                          value={phoneNumber}
                          name="phoneNumber"
                          onChange={this.handleInput}
                          max="10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group pt-2">
                {this.validator.message('password', password, 'required')}
                <div className="input-group">
                  <NormalInput
                    id="password"
                    type="password"
                    placeholder="Enter passcode"
                    value={password}
                    name="password"
                    onChange={this.handleInput}
                    className={`form-control pr-5 ${password.length == 0 ? 'empty' : ''}`}
                  />
                </div>
              </div>
              <div className="form-group pt-2">
                {this.validator.message('confirmPassword', confirmPassword, `required|checkPassword:${password}`)}
                <div className="input-group">
                  <NormalInput
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Passcode"
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={this.handleInput}
                    className={`form-control pr-5 ${confirmPassword.length == 0 ? 'empty' : ''}`}
                  />
                </div>
              </div>
              <div className="form-group mb-0 d-flex flex-wrap justify-content-center pt-4">
                <NormalButton
                  onClick={this.handleSubmit}
                  label="Signup Now"
                  className="bg-white text-c1 w-100 border-radius-4 text-uppercase border-radius-30 fw-600 mb-3"
                />
              </div>
            </form>
            <div className="w-100 d-block text-center text-footer fs-12 px-2 text-white pt-3">
              <PolicyFooter />
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

export const Register = connect(null, mapDispatchToProps)(RegisterClass);
