import React, { PureComponent } from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import {
  inputChange,
  submit
} from 'actions/login'

import { login } from 'actions/user'

import {
  messagesAddSuccess,
  messagesAddError
} from 'actions/messages'

import {
  Form,
  Field,
  Submit
} from 'components/forms'

import Loader from '../../components/gui/Loader'
import Input from 'components/inputs/Input'
import ButtonAction from 'components/gui/ButtonAction'
import Link from 'components/gui/Link'
import Checkbox from 'components/inputs/Checkbox'

import {
  validation,
  errors
} from 'forms/login'

@withRouter
@connect(
  ({ login }) => {
    const {
      request,
      email,
      password,
      remember
    } = login

    const { isPending } = request

    return {
      isPending,
      values: {
        email,
        password,
        remember
      }
    }
  },
  (dispatch) => ({
    inputChange: (input) => dispatch(inputChange(input)),
    submit: (fields) => dispatch(submit(fields)),
    login: (token, details) => dispatch(login(token, details)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class LoginForm extends PureComponent {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  handleSubmit () {
    const {
      values,
      submit,
      submitError
    } = this.props

    submit(values)
      .then(this.handleSuccess)
      .catch(submitError)
  }

  handleSuccess ({ _, value: data }) {
    const {
      token,
      firstName
    } = data

    const {
      login,
      history,
      location,
      submitSuccess
    } = this.props

    const { state = {} } = location
    const { referrer = '/hub' } = state

    const details = {
      firstName
    }

    login(token, details)

    history.push(referrer)
    submitSuccess('You have been successfully logged in.')
  }

  render () {
    const {
      values,
      inputChange,
      isPending
    } = this.props

    return (
      <Form
        values={values}
        validation={validation}
        errors={errors}
        handleChange={inputChange}
        handleSubmit={this.handleSubmit}
      >
        <Field
          component={Input}
          name='email'
          label='Email address'
          modifier='white'
        />
        <Field
          component={Input}
          type='password'
          name='password'
          label='Password'
          modifier='white'
        />
        <Field
          component={Checkbox}
          name='remember'
          label='Keep me logged in'
          modifier='white'
          className='login__checkbox'
        />
        <Submit
          component={ButtonAction}
          children='Log in'
        />
        <Link
          to='/forgotten-password'
          modifier={[
            'color-white',
            'font-italic'
          ]}
          className='login__link-forgotten'
          children='Forgotten password?'
        />
        <Loader isVisible={isPending} />
      </Form>
    )
  }
}

export default LoginForm
