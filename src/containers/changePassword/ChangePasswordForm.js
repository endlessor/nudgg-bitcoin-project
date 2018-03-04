import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import {
  inputChange,
  submit
} from 'actions/changePassword'

import {
  messagesAddSuccess,
  messagesAddError
} from 'actions/messages'

import {
  Form,
  Field,
  Submit
} from 'components/forms'

import Loader from 'components/gui/Loader'
import Input from 'components/inputs/Input'
import ButtonAction from 'components/gui/ButtonAction'

import {
  validation,
  errors
} from 'forms/changePassword'

@withRouter
@connect(
  ({ changePassword }) => {
    const {
      request,
      password,
      confirmPassword
    } = changePassword

    const { isPending } = request

    return {
      isPending,
      values: {
        password,
        confirmPassword
      }
    }
  },
  (dispatch) => ({
    inputChange: (input) => dispatch(inputChange(input)),
    submit: (password, token) => dispatch(submit(password, token)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class ChangePasswordForm extends PureComponent {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  handleSubmit () {
    const {
      match,
      values,
      submit,
      submitError
    } = this.props

    const { params } = match
    const { token } = params
    const { password } = values

    submit(password, token)
      .then(this.handleSuccess)
      .catch(submitError)
  }

  handleSuccess () {
    const {
      history,
      submitSuccess
    } = this.props

    history.push('/login')
    submitSuccess('You successfully changed your password. Please login using the new password.')
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
          type='password'
          name='password'
          label='Password'
          modifier='white'
        />
        <Field
          component={Input}
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          modifier='white'
        />
        <Submit
          component={ButtonAction}
          children='Reset password'
        />
        <Loader isVisible={isPending} />
      </Form>
    )
  }
}

export default ChangePasswordForm
