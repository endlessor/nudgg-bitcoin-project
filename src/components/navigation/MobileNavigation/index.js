import React, { Component } from 'react'
import { withRouter } from 'react-router'

import classNames from 'utils/classNames'

import Body from 'components/layout/Body'
import NavLink from 'components/other/NavLink'
import Burger from 'components/navigation/Burger'

import { toggleActiveState } from 'utils/other'

// Mockup data
import navLinks from 'data/navigation'
import { MODAL_MODIFIER } from 'data/other'

export const baseClass = 'mobile-navigation'

@withRouter
class MobileNavigation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isActive: false
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.renderLink = this.renderLink.bind(this)
  }

  handleToggle () {
    this.setState(toggleActiveState)
  }

  handlePageChange () {
    this.hide()
  }

  handleLogout () {
    const { handleLogout } = this.props

    this.hide()
    handleLogout()
  }

  hide () {
    this.setState({
      isActive: false
    })
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
      <li className='mobile-navigation__item' key={title}>
        <NavLink
          to={href}
          className='mobile-navigation__link'
          onClick={this.handlePageChange}
        >
          {title}
        </NavLink>
      </li>
    )
  }

  renderLogout () {
    return (
      <li
        className='mobile-navigation__logout'
        onClick={this.handleLogout}
        children='Logout'
      />
    )
  }

  render () {
    const { isActive } = this.state
    const { isLogged } = this.props

    const modifiedClassName = classNames(baseClass, null, {
      'active': isActive
    })

    const bodyClassName = isActive ? MODAL_MODIFIER : ''
    const burgerColor = isActive ? 'color-white' : ''

    return (
      <Body modifier={bodyClassName}>
        <nav className={modifiedClassName}>
          <Burger
            isActive={isActive}
            handleClick={this.handleToggle}
            className='mobile-navigation__burger'
            modifier={burgerColor}
          />
          <ul className='container mobile-navigation__list'>
            {navLinks.map(this.renderLink)}
            {isLogged && this.renderLogout()}
          </ul>
        </nav>
      </Body>
    )
  }
}

export default MobileNavigation
