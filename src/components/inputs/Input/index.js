import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import InputError from 'components/inputs/InputError'

export const baseClass = 'input'

class Input extends PureComponent {
  render () {
    const {
      type,
      value,
      name,
      label,
      isValid,
      errorMessage,
      handleChange,
      handleFocus,
      handleBlur,
      handleKeyPress,
      customAttr,
      className,
      modifier
    } = this.props

    const hasError = !isValid

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'has-value': !!value,
      'has-error': hasError
    })

    return (
      <div className={modifiedClassName}>
        <div className='input__container'>
          <input
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            className='input__field'
            aria-label={`${label} input`}
            {...customAttr}
          />
          <div className='input__label absolute-center-v'>
            {label}
          </div>
          <div className='input__line' />
        </div>
        <InputError
          inputName={name}
          message={errorMessage}
          isVisible={hasError}
          className='input__error'
        />
      </div>
    )
  }
}

Input.propTypes = {
  ...defaultPropTypes,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleKeyPress: PropTypes.func
}

Input.defaultProps = {
  type: 'text'
}

export default Input
