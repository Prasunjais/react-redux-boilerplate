import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import bgImg from '../assets/images/login.png';
import '../assets/scss/layout/AuthLayout.scss';

export class AuthLayout extends Component {
  render() {
    let { children } = this.props;

    return (
      <>
        <div className="auth-layout w-100 h-100">
          <div className="d-flex flex-wrap h-100 position-relative">
            <div className="col-lg-9 right-side bg-c1">
              <div className="row h-100">
                <div className="d-flex flex-wrap w-100 h-100 align-items-center py-4 p-sm-4 position-relative">
                  {children}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="row h-100">
                <div className="position-fixed col-lg-3 h-100">
                  <div className="position-relative w-100 h-100 d-block">
                    <div className="header-logo">
                      <img src={logo} alt="medall" />
                    </div>
                    <div className="main-image">
                      <img src={bgImg} alt="medall" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
