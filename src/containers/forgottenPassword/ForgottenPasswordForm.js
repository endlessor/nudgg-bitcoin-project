import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import {
  inputChange,
  submit
} from 'actions/forgottenPassword'

import { messagesAddError } from 'actions/messages'

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
} from 'forms/forgottenPassword'

@withRouter
@connect(
  ({ forgottenPassword, login }) => {
    const {
      request,
      email
    } = forgottenPassword

    const { isPending } = request
    const { email: loginEmail } = login

    return {
      isPending,
      values: {
        email
      },
      loginEmail
    }
  },
  (dispatch) => ({
    inputChange: (input) => dispatch(inputChange(input)),
    submit: (email) => dispatch(submit(email)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class ForgottenPasswordForm extends PureComponent {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  componentWillMount () {
    const {
      loginEmail,
      inputChange
    } = this.props

    if (!loginEmail) return false

    inputChange({
      name: 'email',
      value: loginEmail
    })
  }

  handleSubmit () {
    const {
      values,
      submit,
      submitError
    } = this.props

    const { email } = values

    submit(email)
      .then(this.handleSuccess)
      .catch(submitError)
  }

  handleSuccess () {
    const {
      match,
      history
    } = this.props

    const { url: baseUrl } = match

    history.push(`${baseUrl}/success`)
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
        <Submit
          component={ButtonAction}
          children='Send email'
        />
        <Loader isVisible={isPending} />
      </Form>
    )
  }
}

export default ForgottenPasswordForm
