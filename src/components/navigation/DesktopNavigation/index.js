import React, { Component } from 'react'

import NavLink from 'components/other/NavLink'

// Mockup data
import navLinks from 'data/navigation'

class DesktopNavigation extends Component {
  constructor (props) {
    super(props)

    this.renderLink = this.renderLink.bind(this)
  }

  renderLink (link) {
    const { isLogged } = this.props

    const {
      href,
      title,
      isPrivate
    } = link

    if (!isLogged && isPrivate) return null

    return (
      <li className='desktop-navigation__item' key={title}>
        <NavLink to={href} className='desktop-navigation__item-link'>
          {title}
        </NavLink>
      </li>
    )
  }

  render () {
    return (
      <nav className='desktop-navigation'>
        <ul>
          {navLinks.map(this.renderLink)}
        </ul>
      </nav>
    )
  }
}
export default DesktopNavigation
