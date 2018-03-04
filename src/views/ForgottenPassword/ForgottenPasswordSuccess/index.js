import React, { Component } from 'react'

import { Grid, Col } from 'react-bootstrap'

import View from 'components/other/View'
import { FORGOTTEN_PASSWORD_SUCCESS as title } from 'data/titles'

import Heading from 'components/gui/Heading'

import ForgottenPasswordSuccessForm from 'containers/forgottenPassword/ForgottenPasswordSuccessForm'

class ForgottenPasswordSuccess extends Component {
  render () {
    return (
      <View title={title} className='forgotten-password-success' modifier='blue'>
        <Grid>
          <Col sm={6} smPush={3}>
            <Heading
              size={2}
              modifier='color-white'
            >
              Email sent
            </Heading>
            <ForgottenPasswordSuccessForm />
          </Col>
        </Grid>
      </View>
    )
  }
}

export default ForgottenPasswordSuccess
