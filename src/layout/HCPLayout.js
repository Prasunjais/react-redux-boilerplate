import React, { Component } from 'react';
import { MainHeader } from '../component/Header';

import '../assets/scss/layout/HCareProviderLayout.scss';

export class HCPLayout extends Component {
  render() {
    let { children } = this.props;

    return (
      <>
        <div className="HCareProvider-layout">
          <div className="page-wrapper">
            <MainHeader />
            <div className="site-container position-relative">
              <div className="rightside-container flex-grow-1">
                <div className="p-3">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
