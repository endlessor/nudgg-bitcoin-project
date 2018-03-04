import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import { isFunction } from 'utils/function'

export const baseClass = 'button'

class Button extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    const {
      isDisabled,
      handleClick
    } = this.props

    if (isDisabled) return false

    if (isFunction(handleClick)) {
      handleClick(evt)
    }
  }

  render () {
    const {
      children,
      isDisabled,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'disabled': isDisabled
    })

    return (
      <div
        className={modifiedClassName}
        onClick={this.handleClick}
        children={children}
      />
    )
  }
}

Button.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.any.isRequired,
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func
}

Button.defaultProps = {
  isDisabled: false
}

export default Button
