import React, { Component } from 'react';
import { NormalButton } from 'component/Common';
import OtpInput from 'react-otp-input';

import SimpleReactValidator from 'services/plugins';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../../assets/scss/pages/auth.scss';

export class AdminVerifyOTPClass extends Component {
  state = {
    formFields: {
      OTP: ''
    },
  };

  componentWillMount() {
    this.validator = new SimpleReactValidator({
      element: message => <span className="error-message font-md">{message}</span>,
      autoForceUpdate: this,
    });
  }

  handleOTPChange = value => {
    let { formFields } = this.state
    formFields.OTP = value
    this.setState({
      formFields
    });
  }

  resendOTP = () => {
    console.log('test')
  }

  handleOTPSubmit = event => {
    event.preventDefault();
    let { OTP } = this.state.formFields;

    if (this.validator.allValid() && OTP.toString().length == 4) {

      console.log(OTP)

    } else {
      this.validator.showMessages();
    }
  };

  render() {

    let { OTP } = this.state.formFields

    this.validator.purgeFields();

    return (
      <>
        <div className="auth-container-verifyOTP w-100 py-5 py-lg-4">
          <div className="text-center text-white">
            <h1 className="m-0 fw-bold">Welcome to Medall</h1>
            <h3 className="m-0 fw-600">Verify OTP</h3>
          </div>
          <p className="text-center fs-18 text-white py-4 aligncenter">
            Please enter the OTP code sent to your <br /> mobile number +91 98783 87377
            </p>
          <div className="inner-container py-4">
            <form className="col-5 aligncenter">
              <div className="form-group">
                {OTP.toString().length == 4 ?
                  <>{this.validator.message('otp', true, 'required')}</>
                  : <>{this.validator.message('otp', null, 'required')}</>}
                <OtpInput
                  value={OTP}
                  onChange={this.handleOTPChange}
                  numInputs={4}
                  containerStyle="otp-input"
                  isInputNum={true}
                />
              </div>
              <div className="form-group">
                <p className="text-white fs-14 py-4 text-center">Didn’t recieve code?&nbsp;
                  <b className="cursor-pointer text-decoration-underline" onClick={this.resendOTP}>Resend OTP</b>
                </p>
                <div className="form-group pt-4 w-100 aligncenter">
                  <NormalButton
                    onClick={this.handleOTPSubmit}
                    label="Verify"
                    className="bg-white text-c1 w-100 border-radius-4 text-uppercase border-radius-30 fw-600"
                  />
                </div>
              </div>
            </form>
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

export const AdminVerifyOTP = connect(null, mapDispatchToProps)(AdminVerifyOTPClass);
