import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { FORGOTTEN_PASSWORD as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import ForgottenPasswordForm from 'containers/forgottenPassword/ForgottenPasswordForm'

class ForgottenPassword extends Component {
  render () {
    return (
      <View title={title} className='forgotten-password' modifier='blue'>
        <Grid>
          <Col sm={6} smPush={3}>
            <Heading
              size={2}
              modifier='color-white'
            >
              Forgotten Password
            </Heading>
            <Paragraph modifier={['color-white']} className='forgotten-password__paragraph'>
              Please enter the email address that you registered with.
            </Paragraph>
            <ForgottenPasswordForm />
          </Col>
        </Grid>
      </View>
    )
  }
}

export default ForgottenPassword
