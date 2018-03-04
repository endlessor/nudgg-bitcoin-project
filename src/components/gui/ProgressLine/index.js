import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import { isNumber } from 'utils/number'

import { PROGRESS_DELAY } from 'data/delay'
import {
  PROGRESS_MIN_VALUE,
  PROGRESS_MAX_VALUE
} from 'data/other'

export const baseClass = 'progress-line'

export const validateProgress = (props, propName, componentName) => {
  const value = props[propName]

  if (!isNumber(value)) return new Error(`${propName} in ${componentName} is not a number!`)

  if (value < PROGRESS_MIN_VALUE) return new Error(`${propName} in ${componentName} is smaller than the minimum - ${value}!`)
  if (value > PROGRESS_MAX_VALUE) return new Error(`${propName} in ${componentName} is greater than the maximum - ${value}!`)

  return null
}

class ProgressLine extends PureComponent {
  constructor (props) {
    super(props)

    this.timeout = null

    this.state = {
      progress: 0
    }

    this.handleDelay = this.handleDelay.bind(this)
  }

  componentDidMount () {
    const { noDelay } = this.props

    if (noDelay) return this.handleDelay()

    this.timeout = setTimeout(this.handleDelay, PROGRESS_DELAY)
  }

  componentWillUnmount () {
    this.clearTimeout()
  }

  componentWillReceiveProps (nextProps) {
    const { progress: oldValue } = this.state
    const { progress } = nextProps

    if (!isNumber(progress)) return false
    if (progress === oldValue) return false

    this.setProgress(progress)
  }

  handleDelay () {
    const { progress } = this.props

    this.setProgress(progress)
    this.clearTimeout()
  }

  clearTimeout () {
    if (!this.timeout) return false

    clearTimeout(this.timeout)
    this.timeout = null
  }

  setProgress (progress, cb) {
    this.setState(() => ({
      progress
    }), cb)
  }

  render () {
    const { progress } = this.state

    const {
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    const style = {
      width: `${progress}%`
    }

    return (
      <div className={modifiedClassName}>
        <div className='progress-line__element' style={style} />
      </div>
    )
  }
}

ProgressLine.propTypes = {
  ...defaultPropTypes,
  progress: validateProgress,
  noDelay: PropTypes.bool
}

ProgressLine.defaultProps = {
  noDelay: false
}

export default ProgressLine
