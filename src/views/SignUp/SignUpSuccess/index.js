import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import { Grid, Col } from 'react-bootstrap'

import { connect } from 'react-redux'
import { activateAccount } from 'actions/signUp'
import { ACTIVATE_KEY } from 'reducers/signUp'

import { login } from 'actions/user'

import {
  messagesAddSuccess,
  messagesAddError
} from 'actions/messages'

import View from 'components/other/View'
import { SIGN_UP_SUCCESS as title } from 'data/titles'

import HeroImage from 'components/parallax/HeroImage'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import Button from 'components/gui/Button'
import Link from 'components/gui/Link'

// Mockup
import { hero } from 'data/signUp'

const FIRSTNAME_PLACEHOLDER = '*firstName*'

@withRouter
@connect(
  ({ signUp }) => {
    const {
      [ACTIVATE_KEY]: request
    } = signUp

    const {
      data = {},
      isLoaded
    } = request

    const { firstName } = data

    return {
      data,
      isLoaded,
      firstName
    }
  },
  (dispatch) => ({
    submit: (token) => dispatch(activateAccount(token)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message)),
    login: (token, details) => dispatch(login(token, details))
  })
)
class SignUpSuccess extends Component {
  constructor (props) {
    super(props)

    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  componentDidMount () {
    const {
      match,
      submit
    } = this.props

    const { params } = match
    const { token } = params

    if (!token) return false

    submit(token)
      .then(this.handleSuccess)
      .catch(this.handleError)
  }

  handleSuccess ({ _, value: data }) {
    const {
      token,
      firstName
    } = data

    const {
      login,
      submitSuccess
    } = this.props

    //login(token, { firstName })
    submitSuccess('You successfully activated your account. Please log in to continue.')
  }

  handleError (message) {
    const {
      history,
      submitError
    } = this.props

    history.push('/404')
    submitError(message)
  }

  render () {
    const { firstName = FIRSTNAME_PLACEHOLDER } = this.props

    return (
      <View title={title}>
        <div className='sign-up-success'>
          <HeroImage
            src={hero}
            alt={title}
            className='sign-up__hero-image'
          />
          <Grid>
            <Col sm={7}>
              <Heading size={2} modifier='standard'>
                Congratulations {firstName}, and welcome to nudgg!
              </Heading>
              <Paragraph modifier='standard'>
                Now you have verified your profile, we’re excited to help you along the way of managing your money and acheiving your goals, which we recommend starting with.
              </Paragraph>
              <Link to='/login' modifier='standard'>
                <Button
                  modifier={[
                    'bg-aqua',
                    'fixed-width',
                    'standard'
                  ]}
                  className='sign-up-success__btn-goal'
                >
                  Log in
                </Button>
              </Link>
              {/*
              <Paragraph modifier={[
                'font-italic',
                'font-light',
                'standard'
              ]}>
                (Don’t worry - We won’t ask you to commit to anything financially, this will just help us to understand you better)
              </Paragraph>
              <Paragraph modifier={[
                'font-light',
                'standard'
              ]}>
                Alternatively you can begin to link your existing financial accounts within your <Link to='/hub' modifier={['color-aqua', 'font-italic']}>nudgg hub</Link>.
              </Paragraph>
              */}
            </Col>
          </Grid>
        </div>
      </View>
    )
  }
}

SignUpSuccess.propTypes = {
  firstName: PropTypes.string
}

export default SignUpSuccess
