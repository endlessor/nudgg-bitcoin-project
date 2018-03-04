import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'circle-button'

// TODO: Think about using Button with modifier
class CircleButton extends PureComponent {
  render () {
    const {
      children,
      handleClick,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName} onClick={handleClick}>
        {children}
      </div>
    )
  }
}

CircleButton.propTypes = {
  ...defaultPropTypes
}

export default CircleButton
