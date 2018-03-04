import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PlusButton from 'components/gui/PlusButton'

import {getFastLinkParameters} from 'actions/addAccount'

@connect(
  ({ user, addAccount }) => {
    const { token } = user
    const { fastlink } = addAccount
    return {
      token,
      fastlink
    }
  },
  (dispatch) => ({
    getFastLinkParameters: (token) => dispatch(getFastLinkParameters(token))
  })
)
class AddAccountForm extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const {token, getFastLinkParameters} = this.props
    getFastLinkParameters(token)
  }

  handleClick () {
    this.form.submit()
  }

  render () {
    const {
      fastlink = {},
      redirect
    } = this.props

    const {
      data = {},
      isPending,
      isError
    } = fastlink

    const {
      app,
      rsession,
      token,
      action
    } = data

    return (
      <form
        action={action}
        method="POST"
        ref={(form) => { this.form = form }}>

        <input type="hidden" name="app" value={app} />
        <input type="hidden" name="rsession" value={rsession} />
        <input type="hidden" name="token" value={token} />
        <input type="hidden" name="redirectReq" value="true" />
        <input type="hidden" name="extraParams" value="https://www.google.com" />

        <PlusButton className='hub-accounts__btn-connect' isDisabled={isPending || isError} handleClick={this.handleClick}>
          Connect Account
        </PlusButton>
      </form>
    )
  }
}

AddAccountForm.propTypes = {
  redirect: PropTypes.string.isRequired
}

export default AddAccountForm
