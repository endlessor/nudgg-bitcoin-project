import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'heading'
export const allowedSizes = [1, 2, 3, 4, 5, 6]

const constructType = (size) => `h${size}`

class Heading extends PureComponent {
  render () {
    const {
      size,
      children,
      handleClick,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier,
      `size-${size}`
    )

    const type = constructType(size)

    const props = {
      className: modifiedClassName,
      onClick: handleClick
    }

    return React.createElement(
      type,
      props,
      children
    )
  }
}

Heading.propTypes = {
  ...defaultPropTypes,
  size: PropTypes.oneOf(allowedSizes),
  children: PropTypes.any,
  handleClick: PropTypes.func
}

Heading.defaultProps = {
  size: 3
}

export default Heading
