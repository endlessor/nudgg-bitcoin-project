import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { submit } from 'actions/forgottenPassword'

import {
  messagesAddSuccess,
  messagesAddError
} from 'actions/messages'

import Loader from 'components/gui/Loader'
import Paragraph from 'components/gui/Paragraph'
import Button from 'components/gui/Button'

@connect(
  ({ forgottenPassword }) => {
    const {
      request,
      email
    } = forgottenPassword

    const { isPending } = request

    return {
      isPending,
      values: {
        email
      }
    }
  },
  (dispatch) => ({
    submit: (email) => dispatch(submit(email)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class ForgottenPasswordForm extends PureComponent {
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

    const { email } = values

    submit(email)
      .then(this.handleSuccess)
      .catch(submitError)
  }

  handleSuccess () {
    const {
      values,
      submitSuccess
    } = this.props

    const { email } = values

    submitSuccess(`An email with details was resent to ${email}.`)
  }

  render () {
    const {
      values,
      isPending
    } = this.props

    const { email } = values

    return (
      <div>
        <div className='forgotten-password-success__paragraphs'>
          <Paragraph modifier={['color-white']}>
            We’ve sent you an email to <span className='forgotten-password-success__email'>{email || '*email here*'}. </span>
          </Paragraph>
          <Paragraph modifier={['color-white']}>
            Click the link in the email to reset your password.
          </Paragraph>
          <Paragraph modifier={['color-white']}>
            If you haven’t received the email, please check your junk folders.
          </Paragraph>
          <div>
            <Button
              handleClick={this.handleSubmit}
              modifier={[
                'standard',
                'font-italic',
                'color-white',
                'text-left'
              ]}
            >
              Resend email
            </Button>
          </div>
        </div>
        <Loader isVisible={isPending} />
      </div>
    )
  }
}

export default ForgottenPasswordForm
