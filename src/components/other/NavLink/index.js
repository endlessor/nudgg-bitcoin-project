import React, { Component } from 'react'
import { NavLink as DefaultNavLink } from 'react-router-dom'

import { NAV_LINK_ACTIVE_CLASS } from 'data/other'
const BASE_PATH = '/'

class NavLink extends Component {
  constructor (props) {
    super(props)

    this.handleIsActive = this.handleIsActive.bind(this)
  }

  handleIsActive (match, location) {
    if (
      match &&
      match.path === BASE_PATH &&
      location.pathname !== BASE_PATH
    ) return false

    return !!match
  }

  render () {
    return (
      <DefaultNavLink
        {...this.props}
        isActive={this.handleIsActive}
        activeClassName={NAV_LINK_ACTIVE_CLASS}
      />
    )
  }
}

export default NavLink
