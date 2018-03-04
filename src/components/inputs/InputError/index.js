import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'input-error'

class InputError extends PureComponent {
  getDefaultMessage (name) {
    return `Please enter a valid ${name}`
  }

  render () {
    const {
      message,
      inputName,
      isVisible,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'visible': isVisible
    })

    return (
      <div className={modifiedClassName}>
        {message || this.getDefaultMessage(inputName)}
      </div>
    )
  }
}

InputError.propTypes = {
  ...defaultPropTypes,
  message: PropTypes.string,
  inputName: PropTypes.string,
  isVisible: PropTypes.bool
}

InputError.defaultProps = {
  isVisible: false
}

export default InputError
