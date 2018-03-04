import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

class HubAmount extends PureComponent {
  render () {
    const {
      title,
      amount,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames('hub-amount', className, modifier)

    return (
      <div className={modifiedClassName}>
        <div className='hub-amount__title'>
          {title}
        </div>
        <div className='hub-amount__amount'>
          {amount}
        </div>
      </div>
    )
  }
}

HubAmount.propTypes = {
  ...defaultPropTypes,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
}

export default HubAmount
