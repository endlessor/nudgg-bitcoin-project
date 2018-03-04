import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid } from 'react-bootstrap'

import Link from 'components/gui/Link'
import Logo from 'components/gui/Logo'

import DesktopNavigation from 'components/navigation/DesktopNavigation'
import MobileNavigation from 'components/navigation/MobileNavigation'

import Button from 'components/gui/Button'

class Header extends Component {
  renderButtons () {
    return (
      <div className='header__buttons'>
        <Link to='/login' className='header__btn-login'>
          <Button text=''>
            Login
          </Button>
        </Link>
        <Link to='/sign-up' className='header__btn-sign-up'>
          <Button
            modifier={[
              'bg-aqua'
            ]}
          >
            Sign up
          </Button>
        </Link>
      </div>
    )
  }

  renderUserDetails () {
    const { firstName } = this.props

    return (
      <div className='header__user-details'>
        <span>
          Welcome, <span className='header__user-name'>{firstName}</span>
        </span>
        {this.renderUserLogout()}
      </div>
    )
  }

  renderUserLogout () {
    const { handleLogout } = this.props

    return (
      <span className='header__user-logout link link--color-aqua link--font-italic' onClick={handleLogout}>
        Log out
      </span>
    )
  }

  render () {
    const {
      isLogged,
      handleLogout
    } = this.props

    return (
      <header className='header'>
        <Grid>
          <div className='header__container'>
            <MobileNavigation
              isLogged={isLogged}
              handleLogout={handleLogout}
            />
            <Link to='/' className='header__logo'>
              <Logo />
            </Link>
            <DesktopNavigation
              isLogged={isLogged}
            />
            {
              isLogged
                ? this.renderUserDetails()
                : this.renderButtons()
            }
          </div>
        </Grid>
      </header>
    )
  }
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  firstName: PropTypes.string
}

export default Header
