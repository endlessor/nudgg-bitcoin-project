import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import ReactSlider from 'react-slider'

import { isFunction } from 'utils/function'
import { debounce as debounceFn } from 'utils/other'

export const baseClass = 'slider-input'

class SliderInput extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (values) {
    const { debounce, handleChange } = this.props

    if (!isFunction(handleChange)) return

    if (!debounce) {
      handleChange(values)
    } else {
      debounceFn(handleChange(values), debounce)
    }
  }

  render () {
    const {
      value,
      min,
      max,
      step,
      minDistance,
      pearling,
      isDisabled,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <div className={modifiedClassName}>
        <ReactSlider
          value={value}
          min={min}
          max={max}
          step={step}
          minDistance={minDistance}
          pearling={pearling}
          onChange={this.handleChange}
          withBars
          disabled={isDisabled}
          className='slider-input__slider'
        />
      </div>
    )
  }
}

SliderInput.propTypes = {
  ...defaultPropTypes,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]).isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  minDistance: PropTypes.number,
  pearling: PropTypes.bool,
  handleChange: PropTypes.func,
  isDisabled: PropTypes.bool
}

SliderInput.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  minDistance: 0,
  pearling: false,
  isDisabled: false
}

export default SliderInput