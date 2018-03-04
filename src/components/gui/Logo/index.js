import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'logo'

class Logo extends PureComponent {
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

Logo.propTypes = {
  ...defaultPropTypes
}

export default Logo
