import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import { getBalance } from 'actions/hub'
import { messagesAddError } from 'actions/messages'

import HubOverview from 'components/hub/HubOverview'
import Loader from 'components/gui/Loader'

import { parseNumber } from 'utils/number'

@withRouter
@connect(
  ({ user, hub }) => {
    const { token } = user

    const { balance: request } = hub
    const { data = {} } = request

    const { isPending } = request

    return {
      token,
      isPending,
      data
    }
  },
  (dispatch) => ({
    getBalance: (token) => dispatch(getBalance(token)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class HubBalanceContainer extends PureComponent {
  constructor (props) {
    super(props)

    this.getBalance = this.getBalance.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  componentDidMount () {
    // TODO: Remove when doing the UI
    this.timeout = setTimeout(this.getBalance, 2000)
  }

  getBalance () {
    const {
      getBalance,
      token
    } = this.props

    getBalance(token).catch(this.handleError)

    clearTimeout(this.timeout)
  }

  handleError (message) {
    const {
      history,
      submitError
    } = this.props

    history.push('/404')
    submitError(message)
  }

  render () {
    const {
      data,
      isPending,
      handleClick
    } = this.props

    let balanceCash = 0
    let balanceInvestments = 0

    for (let container in data) {
      if (['bank'].indexOf(container) !== -1) {
        balanceCash += data[container]
      } else if (['investment'].indexOf(container) !== -1) {
        balanceInvestments += data[container]
      } else {
        balanceCash += data[container]
      }
    }

    return (
      <div>
        <HubOverview
          balances={[
            {
              type: 'Cash',
              amount: balanceCash
            },
            {
              type: 'Investments',
              amount: balanceInvestments
            }
          ]}
          handleClick={handleClick}
        />
      </div>
    )
  }
}

export default HubBalanceContainer
