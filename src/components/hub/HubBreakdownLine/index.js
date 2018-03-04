import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

class HubBreakdownLine extends PureComponent {
  render () {
    const {
      handleClick,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames('hub-breakdown-line', className, modifier)

    const {
      date,
      type,
      name,
      balance,
      amount
    } = this.props

    return (
      <div className={modifiedClassName} onClick={handleClick}>
        <div className='hub-breakdown-line__date'>
          {date}
        </div>
        <div className='hub-breakdown-line__type'>
          {type}
        </div>
        <div className='hub-breakdown-line__name'>
          {name}
        </div>
        <div className='hub-breakdown-line__balance'>
          {balance}
        </div>
        <div className='hub-breakdown-line__amount'>
          {amount}
        </div>
      </div>
    )
  }
}

HubBreakdownLine.propTypes = {
  ...defaultPropTypes
}

export default HubBreakdownLine
