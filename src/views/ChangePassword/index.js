import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { CHANGE_PASSWORD as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import ChangePasswordForm from 'containers/changePassword/ChangePasswordForm'

class ChangePassword extends Component {
  render () {
    return (
      <View title={title} className='change-password' modifier='blue'>
        <Grid>
          <Col sm={6} smPush={3}>
            <Heading
              size={2}
              modifier='color-white'
            >
              Change password
            </Heading>
            <Paragraph modifier={['color-white']} className='change-password__paragraph'>
              Enter your new password. It must contain a minimum of 8 characters, including at least 1 uppercase letter and 1 number.
            </Paragraph>
            <ChangePasswordForm />
          </Col>
        </Grid>
      </View>
    )
  }
}

export default ChangePassword
