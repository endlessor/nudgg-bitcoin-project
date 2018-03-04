import React, { Component } from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import {
  verifyToken,
  login,
  logout
} from 'actions/user'

import Loader from 'components/gui/Loader'

@withRouter
@connect(
  ({ user }) => ({
    token: user.token,
    isLoaded: user.isLoaded,
    isLogged: user.isLogged
  }),
  (dispatch) => ({
    verifyToken: (token) => dispatch(verifyToken(token)),
    login: (token, details) => dispatch(login(token, details)),
    logout: () => dispatch(logout())
  })
)
class Authentication extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isVerified: false
    }

    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const {
      token,
      isLoaded,
      isLogged
    } = nextProps

    const { verifyToken } = this.props

    if (isLoaded) {
      if (!token || isLogged) return this.hideLoader()

      verifyToken(token)
        .then(this.handleSuccess)
        .catch(this.handleError)
    }
  }

  handleSuccess ({ _, value: data }) {
    const { firstName } = data

    const {
      login,
      token
    } = this.props

    login(token, { firstName })
    this.hideLoader()
  }

  handleError () {
    const { logout } = this.props

    logout()
    this.hideLoader()
  }

  hideLoader () {
    this.setState({
      isVerified: true
    })
  }

  render () {
    const { isVerified } = this.state
    const { children } = this.props

    if (!isVerified) return <Loader />

    return children
  }
}

export default Authentication