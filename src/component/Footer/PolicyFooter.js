import React, { Component } from 'react';

export class PolicyFooter extends Component {
  state = {
    isModalPrivacy: false,
    isModalTermsCondition: false,
  };

  toggle = name => {
    this.setState(prevState => ({
      [name]: !prevState[name],
    }));
  };

  render() {
    let { isModalPrivacy, isModalTermsCondition } = this.state;

    return (
      <>
        <p className="fs-14">
          By continuing to use Insta consultation you agree <br /> to the to our
          <span className="tc-secondary cursor-pointer fw-700" onClick={() => this.toggle('isModalTermsCondition')}>
            &nbsp;Terms of use&nbsp;
          </span>
          and
          <span className="tc-secondary cursor-pointer fw-700" onClick={() => this.toggle('isModalPrivacy')}>
            &nbsp;Privacy Policy
          </span>
          .
        </p>
      </>
    );
  }
}
