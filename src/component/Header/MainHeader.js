import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import "assets/scss/component/mainHeader.scss"

export class MainHeaderClass extends Component {

  render() {
    return (
      <header className="main-header">
        <div className="container-fluid h-100">
          <div className="d-flex h-100 row">
            <div className="logo-block col-3">
              <div className="d-flex align-items-center flex-wrap h-100 justify-content-start w-100">
                <div className="menu-icon">
                  <img src={require("assets/images/svg/hamburger.svg")}
                    className="img-responsive align-self-center d-flex cursor-pointer" alt="#" />
                </div>
                <div className="logo ml-3">
                  <img src={require("assets/images/logo.png")}
                    className="img-responsive align-self-center d-flex" alt="#" />
                </div>
              </div>
            </div>
            <div className="header-user-option col-9 pl-0">
              <div className="h-100">
                <div className="header-search"></div>
                <div className="header-notification">

                </div>
                <div className="header-profile"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  }, dispatch)
}


export const MainHeader = connect(null, null)(MainHeaderClass)