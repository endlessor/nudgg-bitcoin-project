import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'

import { messagesAddError } from 'actions/messages'

@connect(
  ({ user }) => ({
    isLogged: user.isLogged,
    isLoaded: user.isLoaded
  }),
  (dispatch) => ({
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class PrivateRoute extends Component {
  constructor (props) {
    super(props)

    this.renderRoute = this.renderRoute.bind(this)
  }

  renderRoute (props) {
    const {
      isLogged,
      isLoaded
    } = this.props

    if (!isLoaded) return null
    if (!isLogged) return this.renderRedirect(props)

    return this.renderComponent(props)
  }

  renderComponent (props) {
    const { component: Component } = this.props

    return <Component {...props} />
  }

  renderRedirect () {
    // const { submitError } = this.props
    // submitError('Please login.')

    const { location } = this.props
    const { pathname } = location

    return (
      <Redirect to={{
        pathname: '/login',
        state: {
          referrer: pathname
        }
      }} />
    )
  }

  render () {
    const { component: Component, ...rest } = this.props

    return <Route {...rest} render={this.renderRoute} />
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Component)
  ])
}

export default PrivateRoute
