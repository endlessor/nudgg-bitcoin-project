import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'repeat'

class Repeat extends PureComponent {
  generateArray (times) {
    return Array.apply(null, Array(times)).map(Number.prototype.valueOf, 0)
  }

  render () {
    const {
      times,
      render,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    const repeatCount = this.generateArray(times)

    return (
      <div className={modifiedClassName}>
        {repeatCount.map(render)}
      </div>
    )
  }
}

Repeat.propTypes = {
  ...defaultPropTypes,
  times: PropTypes.number.isRequired,
  render: PropTypes.func.isRequired
}

export default Repeat
