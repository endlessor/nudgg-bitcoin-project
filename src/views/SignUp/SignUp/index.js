import React, { Component } from 'react'

import { Grid, Col } from 'react-bootstrap'

import View from 'components/other/View'
import { SIGN_UP as title } from 'data/titles'

import ProgressLine from 'components/gui/ProgressLine'
import HeroImage from 'components/parallax/HeroImage'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import SignUpForm from 'containers/signUp/SignUpForm'

import { PROGRESS_MIN_VALUE } from 'data/other'

// Mockup
import { hero } from 'data/signUp'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      progress: PROGRESS_MIN_VALUE
    }

    this.handleProgress = this.handleProgress.bind(this)
  }

  handleProgress (value) {
    this.setState({
      progress: value
    })
  }

  render () {
    const { progress } = this.state

    return (
      <View title={title}>
        <div className='sign-up'>
          <ProgressLine
            progress={progress}
            modifier='fixed'
            className='hidden-sm-up'
          />
          <HeroImage
            src={hero}
            alt={title}
            className='sign-up__hero-image'
          />
          <Grid>
            <Col sm={7}>
              <Heading size={2} modifier='standard'>
                It all starts with a little nudgg
              </Heading>
              <Paragraph modifier='standard'>
                And we are here to keep you motivated, moving and on top of your finances. We only need a few small details to get you started, and may ask for more information later on to best tailor your nudgg profile around you.
              </Paragraph>
              <SignUpForm
                handleProgress={this.handleProgress}
              />
            </Col>
          </Grid>
        </div>
      </View>
    )
  }
}

export default SignUp