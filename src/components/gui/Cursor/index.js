import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'cursor'

class Cursor extends PureComponent {
  render () {
    const {
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <span className={modifiedClassName} />
    )
  }
}

Cursor.propTypes = {
  ...defaultPropTypes
}

export default Cursor
