import React, { Component } from 'react'

import { Grid, Col } from 'react-bootstrap'

import Logo from 'components/gui/Logo'
import Link from 'components/gui/Link'

// Mockup data
import {
  links,
  socials
} from 'data/footer'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.renderLinkGroup = this.renderLinkGroup.bind(this)
    this.renderLink = this.renderLink.bind(this)
    this.renderSocialIcon = this.renderSocialIcon.bind(this)
  }

  shouldComponentUpdate () {
    return false
  }

  renderLinkGroup (linkGroup, index) {
    return (
      <Col sm={4} key={index} className='footer__list no-padding'>
        <ul>
          {linkGroup.map(this.renderLink)}
        </ul>
      </Col>
    )
  }

  renderLink (link) {
    const {
      href,
      title
    } = link

    return (
      <li className='footer__list-item' key={title}>
        <Link to={href} className='footer__list-link'>
          {title}
        </Link>
      </li>
    )
  }

  renderSocialIcon (icon) {
    const {
      href,
      title,
      image
    } = icon

    return (
      <li className='footer__socials-item' key={title}>
        <Link to={href} isExternal={true} target='_blank'>
          <img
            src={image}
            title={title}
            className='footer__socials-image'
          />
        </Link>
      </li>
    )
  }

  render () {
    return (
      <footer className='footer'>
        <Grid>
          <div className='footer__container'>
            <Col sm={6}>
              <Link to='/'>
                <Logo modifier='white' className='footer__logo' />
              </Link>
            </Col>
            <Col sm={6}>
              <div className='footer__site-map clearfix'>
                {links.map(this.renderLinkGroup)}
              </div>
              <div className='footer__socials'>
                <ul>
                  {socials.map(this.renderSocialIcon)}
                </ul>
              </div>
            </Col>
          </div>
        </Grid>
      </footer>
    )
  }
}

export default Footer
