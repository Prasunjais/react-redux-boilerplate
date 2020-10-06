import React, { Component } from 'react';
import './style.scss'

export class NormalButton extends Component {
  render() {
    const {
      className = '',
      label = '',
      onClick,
      id,
      disabled = false,
      leftIcon = '',
      rightIcon = '',
    } = this.props;

    return (
      <button
        type="button"
        id={id}
        className={`btn ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {leftIcon !== '' ? <span className={`btn-left-icon ${leftIcon}`}></span> : ''}
        {label}
        {rightIcon !== '' ? <span className={`btn-right-icon ${rightIcon}`}></span> : ''}
      </button>
    );
  }
}
