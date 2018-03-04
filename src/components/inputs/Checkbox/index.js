import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Icon from 'components/gui/Icon'
import Paragraph from 'components/gui/Paragraph'
import InputError from 'components/inputs/InputError'

import { isFunction } from 'utils/function'

export const baseClass = 'checkbox'

class Checkbox extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {
      value,
      name,
      handleChange
    } = this.props

    if (!isFunction(handleChange)) return false

    const fakeEvent = {
      target: {
        value: !value,
        name,
        type: 'checkbox'
      }
    }

    handleChange(fakeEvent)
  }

  render () {
    const {
      value,
      name,
      label,
      isValid,
      errorMessage,
      className,
      modifier
    } = this.props

    const hasError = !isValid

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'checked': value,
      'has-error': hasError
    })

    return (
      <div className={modifiedClassName} onClick={this.handleClick}>
        <div className='checkbox__input-container'>
          <input
            type='checkbox'
            name={name}
            checked={value}
            readOnly={true}
            className='checkbox__input'
          />
          <Icon
            modifier='tick'
            className={[
              'absolute-center',
              'checkbox__tick'
            ]}
          />
        </div>
        <Paragraph
          modifier='font-light'
          className='checkbox__label'
          children={label}
        />
        <InputError
          inputName={name}
          message={errorMessage}
          isVisible={hasError}
          className='checkbox__error'
        />
      </div>
    )
  }
}

Checkbox.propTypes = {
  ...defaultPropTypes,
  value: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.any.isRequired,
  isValid: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func
}

export default Checkbox
