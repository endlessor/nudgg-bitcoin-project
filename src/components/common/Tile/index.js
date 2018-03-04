import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'tile'

class Tile extends PureComponent {
  render () {
    const {
      children,
      handleClick,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div
        className={modifiedClassName}
        children={children}
        onClick={handleClick}
      />
    )
  }
}

Tile.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.any.isRequired
}

export default Tile
