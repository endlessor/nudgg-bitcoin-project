import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

import { Grid, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { resendEmail } from 'actions/signUp'

import {
  messagesAddSuccess,
  messagesAddError
} from 'actions/messages'

import View from 'components/other/View'
import { SIGN_UP_ACTIVATE as title } from 'data/titles'

import Loader from 'components/gui/Loader'
import HeroImage from 'components/parallax/HeroImage'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import Link from 'components/gui/Link'

// Mockup
import { hero } from 'data/signUp'

const EMAIL_PLACEHOLDER = '*email*'

@connect(
  ({ signUp }) => {
    const {
      email,
      request,
      'request_resend': resend
    } = signUp

    const { isPending } = resend
    const { data } = request
    const { token } = data

    return {
      isPending,
      email,
      token
    }
  },
  (dispatch) => ({
    submit: (email, token) => dispatch(resendEmail(email, token)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)

class SignUpActivate extends PureComponent {
  constructor (props) {
    super(props)

    this.handleResendEmail = this.handleResendEmail.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  handleResendEmail () {
    const {
      email,
      token,
      submit,
      submitError
    } = this.props

    submit(email, token)
      .then(this.handleSuccess)
      .catch(submitError)
  }

  handleSuccess () {
    const {
      email,
      submitSuccess
    } = this.props

    submitSuccess(`The email was resent to ${email}.`)
  }

  render () {
    const {
      isPending,
      token,
      email = EMAIL_PLACEHOLDER
    } = this.props

    if (!token) {
      return <Redirect to='/404' />
    }

    return (
      <View title={title}>
        <div className='sign-up-activate'>
          <HeroImage
            src={hero}
            alt={title}
            className='sign-up__hero-image'
          />
          <Grid>
            <Col sm={7}>
              <Heading size={2} modifier='standard'>
                Activate your account
              </Heading>
              <Paragraph modifier='standard'>
                Almost there - We’ve sent you an activation link to {email}. Please check and follow the instructions and we’ll see you shortly.
              </Paragraph>
              <Paragraph>
                Haven’t received anything from us? <span className='link link--color-aqua' onClick={this.handleResendEmail}>Resend email</span>
              </Paragraph>
              <Paragraph>
                Wrong email? <Link to='/sign-up' modifier='color-aqua'>Update email address</Link>
              </Paragraph>
            </Col>
          </Grid>
        </div>
        <Loader isVisible={isPending} />
      </View>
    )
  }
}

SignUpActivate.propTypes = {
  email: PropTypes.string,
  token: PropTypes.string,
  resendEmail: PropTypes.func
}

export default SignUpActivate
