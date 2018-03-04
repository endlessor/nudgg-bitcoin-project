import React, { Component } from 'react'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import { LOGIN as title } from 'data/titles'

import Heading from 'components/gui/Heading'
import LoginForm from '../../containers/login/LoginForm'

class Login extends Component {
  render () {
    return (
      <View title={title} className='login' modifier='blue'>
        <Grid>
          <Col sm={6} smPush={3}>
            <Heading size={2} modifier='color-white' className='login__heading'>
              Log in
            </Heading>
            <LoginForm />
          </Col>
        </Grid>
      </View>
    )
  }
}

export default Login
