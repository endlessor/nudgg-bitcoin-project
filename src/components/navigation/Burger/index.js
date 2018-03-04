import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'burger'

class Burger extends PureComponent {
  render () {
    const { isActive, handleClick, className, modifier } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'active': isActive
    })

    return (
      <div className={modifiedClassName} onClick={handleClick}>
        <div className='burger__line burger__line-top' />
        <div className='burger__line burger__line-middle' />
        <div className='burger__line burger__line-bottom' />
      </div>
    )
  }
}

Burger.propTypes = {
  ...defaultPropTypes,
  isActive: PropTypes.bool,
  handleClick: PropTypes.func
}

Burger.defaultProps = {
  isActive: false
}

export default Burger
