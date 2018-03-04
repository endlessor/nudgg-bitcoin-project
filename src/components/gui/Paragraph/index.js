import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'paragraph'

class Paragraph extends PureComponent {
  render () {
    const {
      children,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <p className={modifiedClassName}>{children}</p>
    )
  }
}

Paragraph.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.any.isRequired
}

export default Paragraph
