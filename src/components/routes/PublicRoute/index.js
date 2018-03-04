import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Redirect
} from 'react-router-dom'

import { connect } from 'react-redux'

@connect(
  ({ user }) => ({
    isLogged: user.isLogged,
    isLoaded: user.isLoaded
  })
)
class PublicRoute extends Component {
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
    if (isLogged) return this.renderRedirect(props)

    return this.renderComponent(props)
  }

  renderComponent (props) {
    const { component: Component } = this.props

    return <Component {...props} />
  }

  renderRedirect () {
    return <Redirect to='/' />
  }

  render () {
    const { component: Component, ...rest } = this.props

    return <Route {...rest} render={this.renderRoute} />
  }
}

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Component)
  ])
}

export default PublicRoute
