import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Icon from 'components/gui/Icon'
import CircleButton from 'components/gui/CircleButton'
import HubAmount from 'components/hub/HubAmount'

import { getTotalAmount } from 'utils/hub'

import { isFunction } from 'utils/function'
import { isArray } from 'utils/array'
import { parseWithCommas } from 'utils/other'

class HubOverview extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  handleClick (evt) {
    const { handleClick } = this.props

    const meta = {}

    if (isFunction(handleClick)) {
      handleClick(evt, meta)
    }
  }

  renderRow (row, index) {
    const {
      type,
      amount
    } = row

    return (
      <div className='hub-overview__row' key={index} onClick={this.handleClick}>
        <div className='hub-overview__row-content absolute-center-v'>
          <HubAmount
            title={type}
            amount={`£${parseWithCommas(amount)}`}
          />
          <CircleButton
            modifier='arrow'
            className={[
              'absolute-center-v',
              'hub-overview__btn'
            ]}
            children={(
              <Icon
                modifier='right-arrow-white'
                className='absolute-center'
              />
            )}
          />
        </div>
      </div>
    )
  }

  render () {
    const { balances, className, modifier } = this.props

    const modifiedClassName = classNames('hub-overview', className, modifier)

    const totalAmount = getTotalAmount(balances)

    return (
      <div className={modifiedClassName}>
        <div className='hub-overview__container'>
          {isArray(balances) &&
            balances.map(this.renderRow)
          }
        </div>
        <HubAmount
          title='Total amount'
          amount={`£${parseWithCommas(totalAmount)}`}
          className='hub-overview__total-amount'
        />
      </div>
    )
  }
}

HubOverview.propTypes = {
  ...defaultPropTypes
}

export default HubOverview
