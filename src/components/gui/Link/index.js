import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link as DefaultLink } from 'react-router-dom'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'link'

class Link extends PureComponent {
  render () {
    const {
      to,
      children,
      isExternal,
      className,
      modifier,
      ...rest
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    if (isExternal === false) {
      return React.createElement(
        DefaultLink,
        {
          to,
          className: modifiedClassName
        },
        children
      )
    } else {
      return React.createElement(
        'a',
        {
          href: to,
          className: modifiedClassName,
          ...rest
        },
        children
      )
    }
  }
}

Link.propTypes = {
  ...defaultPropTypes,
  to: PropTypes.string,
  children: PropTypes.any,
  isExternal: PropTypes.bool
}

Link.defaultProps = {
  to: '',
  isExternal: false
}

export default Link
