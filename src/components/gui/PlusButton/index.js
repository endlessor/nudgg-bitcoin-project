import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'
import PropTypes from 'prop-types'

import Icon from 'components/gui/Icon'

class PlusButton extends PureComponent {
  render () {
    const { children, handleClick, className, modifier, isDisabled } = this.props

    const modifiedClassName = classNames('plus-button', className, modifier, {'disabled': isDisabled})

    return (
      <div className={modifiedClassName} onClick={handleClick}>
        <Icon
          modifier='plus'
          className='plus-button__icon'
        />
        <div className='plus-button__text'>
          {children}
        </div>
      </div>
    )
  }
}

PlusButton.propTypes = {
  ...defaultPropTypes,
  isDisabled: PropTypes.bool
}

export default PlusButton
