import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { HOMEPAGE as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import Button from 'components/gui/Button'
import Link from 'components/gui/Link'

import HomeSection from 'components/home/HomeSection'

import {
  features,
  securityFeature
} from 'data/home'

class Home extends Component {
  constructor (props) {
    super(props)

    this.renderFeature = this.renderFeature.bind(this)
  }

  renderFeature (feature, index) {
    return (
      <Col md={4} key={index}>
        <HomeSection {...feature} />
      </Col>
    )
  }

  render () {
    return (
      <View title={title} className='home'>
        <div className='home__slogan view' style={{ backgroundImage: 'url(assets/images/home-bg.png)' }}>
          <Grid>
            <div className="home__content">
              <h1>We believe in...</h1>
              <h2>connecting you to better</h2>
              <span className="content-text-one">
                By bringing all accounts & knowledge to their fingertips, we
                bring convenience to Millennials & help them make smarter
                decisions, faster & more frequently.
              </span>
              <span className="content-text-two">
                Providing pro-active & real-time comparison against each
                account, magnifying the potential improvement the user can
                make in each scenario.
              </span>
            </div>
          </Grid>
        </div>
        <div className='home__features'>
          <div className='home__small-features'>
            <Grid>
              {features.map(this.renderFeature)}
            </Grid>
          </div>
          <div className='home__big-feature'>
            <Grid>
              <HomeSection
                {...securityFeature}
                className='home__big-feature-section'
              />
            </Grid>
          </div>
        </div>
        <div className='home__join view'>
          <Grid>
            <div className='home__join-content absolute-center'>
              <Heading modifier='color-white'>
                It all starts with a nudgg
              </Heading>
              <Paragraph
                modifier='color-white'
                className='home__join-description'
              >
                Interested in getting early access? We are launching soon, leave your email and we’ll keep you notified.
              </Paragraph>
              <Link to='/contact'>
                <Button
                  modifier={[
                    'bg-white',
                    'font-uppercase',
                    'pos-center',
                    'fixed-width',
                    'font-semi-bold'
                  ]}
                  className='home__btn'
                >
                  Request an invite
                </Button>
              </Link>
            </div>
          </Grid>
        </div>
      </View>
    )
  }
}

export default Home
