import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'icon'

class Icon extends PureComponent {
  render () {
    const {
      handleClick,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName} onClick={handleClick} />
    )
  }
}

Icon.propTypes = {
  ...defaultPropTypes,
  handleClick: PropTypes.func
}

export default Icon
