import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import moment from 'moment'

import Icon from 'components/gui/Icon'
import Tile from 'components/common/Tile'
import HubTable from 'components/hub/HubTable'
import Image from 'components/gui/Image'
import Loader from 'components/gui/Loader'
import HubBreakdownLine from 'components/hub/HubBreakdownLine'
import AddAccountForm from 'containers/addAccount/AddAccountForm'


import {
  getAccountBreakdown,
  resetAccountBreakdown
} from 'actions/hub'

import { CURRENCY } from 'data/other'

@withRouter
@connect(
  ({ user, hub }) => {
    const { token } = user
    const { breakdown, account } = hub
    return {
      token,
      breakdown,
      account
    }
  },
  (dispatch) => ({
    getAccountBreakdown: (id, token) => dispatch(getAccountBreakdown(id, token)),
    resetAccountBreakdown: () => dispatch(resetAccountBreakdown())
  })
)
class HubBreakdownTable extends PureComponent {

  componentDidMount () {
    const {match: {params: {accountId}}, getAccountBreakdown, token, account, history} = this.props
    if (!account.balance) {
      history.push('/hub/accounts')
    }
    getAccountBreakdown(accountId, token)
  }

  componentWillUnmount () { // Clean up
    const {resetAccountBreakdown} = this.props
    resetAccountBreakdown()
  }

  render () {
    const {breakdown, account, history} = this.props

    if (!breakdown || !breakdown.data || !breakdown.data.transactions) {
      return <Loader isVisible={true} />
    }

    const currency = CURRENCY[account.balance.currency] ? CURRENCY[account.balance.currency] : account.balance.currency

    const transactions = breakdown.data.transactions.map(transaction => {
      return (
        [
          transaction.description.simple,
          (transaction.baseType ? '-' : '') + currency + transaction.amount.amount.toFixed(2),
          transaction.category,
          moment(transaction.transactionDate).format('MMMM Do YYYY')
        ]
      )
    })

    return (
      <div className='hub-breakdown'>
        <div className='hub-balance__container col-xs-12 col-sm-8 container'>
          <Tile className={[
            'hub-breakdown__tile'
          ]}>
            <Icon
              modifier={[
                'plus',
                'green-cross'
              ]}
              className='hub-accounts__exit'
              handleClick={() => history.push('/hub/accounts')}
            />
            <div className='hub-breakdown__summary'>
              <div>
                <Image
                  alt={account.accountName}
                  src={account.logo}
                  className='hub-breakdown__logo'
                />
              </div>
              <div className='hub-breakdown__total-amount'>
                {currency}{account.balance.amount}
              </div>
              <div className='hub-breakdown__account-type'>
                {account.accountName}
              </div>
            </div>
            <div>
              {transactions.length === 0 && <p><i>There are no transactions to display</i></p>}
              <HubTable
                headings={['Name', 'Amount', 'Category', 'Date']}
                data={transactions}
                />
            </div>
            <AddAccountForm redirect='/hub/accounts' />
          </Tile>
        </div>
      </div>
    )
  }

}

export default HubBreakdownTable
