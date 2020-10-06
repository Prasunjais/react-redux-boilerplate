import React, { Component } from 'react';
import './style.scss'

export class NormalInput extends Component {
  render() {
    let {
      id = '',
      className = 'form-control',
      placeholder = '',
      onChange,
      value = '',
      name,
      disabled = false,
      type = 'text',
      iconname = '',
      max = '',
      min = '',
      labelRight = false,
      validator,
      blurValidation = false,
      validatorName,
      readonly = false,
    } = this.props;

    return (
      <>
        {iconname !== '' ? <span className={`${iconname} input-icon`}></span> : ''}
        <input
          id={id}
          readOnly={readonly}
          className={`${className} ${iconname !== '' ? 'pl-5' : ''}`}
          name={name}
          type={type}
          disabled={disabled}
          value={value}
          minLength={min}
          maxLength={max}
          placeholder={placeholder}
          onChange={e => {
            let body = {};

            body = {
              target: {
                name: e.target.name,
                value: e.target.value,
              },
            };

            onChange(body);
          }}
          onBlur={e => {
            if (blurValidation) {
              validator.showMessageFor(validatorName);
            }
          }}
        />
        {labelRight ? <span className="labelRight">{labelRight}</span> : ''}
      </>
    );
  }
}
