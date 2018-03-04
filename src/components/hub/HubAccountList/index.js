import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import { connect } from 'react-redux'
import { getAccounts, setAccount } from 'actions/hub'
import {
  messagesAddSuccess,
  messagesAddError
} from 'actions/messages'

import Loader from 'components/gui/Loader'

import Image from 'components/gui/Image'
import HubTable from 'components/hub/HubTable'
import Heading from 'components/gui/Heading'

import { isArray } from 'utils/array'
import { parseNumber } from 'utils/number'

import { CURRENCY } from 'data/other'

@withRouter
@connect(
  ({ user, hub }) => {
    const { token } = user
    const { accounts: request } = hub

    const {
      data,
      isPending
    } = request

    return {
      token,
      data,
      isPending
    }
  },
  (dispatch) => ({
    getAccounts: (token) => dispatch(getAccounts(token)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message)),
    setAccount: (account) => dispatch(setAccount(account))
  })
)
class HubAccountList extends PureComponent {
  constructor (props) {
    super(props)

    this.navigateToBreakdown = this.navigateToBreakdown.bind(this)
  }

  componentDidMount () {
    const {
      token,
      getAccounts
    } = this.props

    getAccounts(token)
  }

  navigateToBreakdown (account) {
    const {setAccount, history} = this.props

    setAccount(account)
    history.push(`/hub/accounts/${account.id}`)
  }

  format (data) {
    const { history } = this.props

    if (!isArray(data)) return []

    let accounts = []

    for (let type of data) {
      for (let account of type.accountDetails) {
        const currency = CURRENCY[account.balance.currency] ? CURRENCY[account.balance.currency] : account.balance.currency

        const BreakdownLink = ({children}) => <a onClick={() => this.navigateToBreakdown(account)}>{children}</a>

        accounts.push([
          <BreakdownLink><Image src={account.logo} className='hub-table__logo' alt={account.accountName} /></BreakdownLink>,
          <BreakdownLink>{account.accountName}</BreakdownLink>,
          <BreakdownLink>{currency}{account.balance.amount}</BreakdownLink>,
          <BreakdownLink>{account.accountType}</BreakdownLink>
        ])
      }
    }

    return accounts
  }

  getTotalBalance (data) {
    if (!isArray(data)) return 0

    return parseNumber(
      data.reduce((total, account) => {
        return total + account.accountTotalBalance
      }, 0)
    )
  }

  render () {
    const {
      data,
      isPending,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames('hub-account-list', className, modifier)

    const transactions = this.format(data)
    const totalBalance = this.getTotalBalance(data)

    return (
      <div className={modifiedClassName}>
        <div className='hub-accounts__titles'>
          <Heading size={4} modifier={[
            'font-roboto',
            'font-uppercase'
          ]}>
            {`£${totalBalance}`} Total Balance
          </Heading>
          <Heading size={5} className='hub-accounts__sub-title' modifier={[
            'font-roboto',
            'font-uppercase'
          ]}>
            comprised of
          </Heading>
        </div>
        <HubTable
          headings={[
            'Provider',
            'Description',
            'Total',
            'Type'
          ]}
          data={transactions}
        />
        <Loader isVisible={isPending} />
      </div>
    )
  }
}

HubAccountList.propTypes = {
  ...defaultPropTypes
}

export default HubAccountList
