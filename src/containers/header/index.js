import React, { Component } from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import { logout } from 'actions/user'
import { messagesAddSuccess } from 'actions/messages'

import Header from 'components/layout/Header'

@withRouter
@connect(
  ({ user }) => {
    const {
      details,
      isLogged
    } = user

    const { firstName } = details

    return {
      isLogged,
      firstName
    }
  },
  (dispatch) => ({
    logout: () => dispatch(logout()),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message))
  })
)
class HeaderContainer extends Component {
  constructor (props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout () {
    const {
      logout,
      history,
      submitSuccess
    } = this.props

    logout()

    history.push('/')
    submitSuccess('You have been successfully logged out.')
  }

  render () {
    const {
      firstName,
      isLogged
    } = this.props

    return (
      <Header
        firstName={firstName}
        isLogged={isLogged}
        handleLogout={this.handleLogout}
      />
    )
  }
}

export default HeaderContainer
