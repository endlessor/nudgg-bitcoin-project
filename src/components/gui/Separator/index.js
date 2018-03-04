import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'separator'

class Separator extends PureComponent {
  render () {
    const {
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName} />
    )
  }
}

Separator.propTypes = {
  ...defaultPropTypes
}

export default Separator
