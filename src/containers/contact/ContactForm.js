import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import {
  inputChange,
  submit
} from 'actions/contact'

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
import Textarea from 'components/inputs/Textarea'
import ButtonAction from 'components/gui/ButtonAction'
import Paragraph from 'components/gui/Paragraph'
import Link from 'components/gui/Link'

import {
  validation,
  errors
} from 'forms/contact'

import {
  socials
} from 'data/contact'

@withRouter
@connect(
  ({ contact }) => {
    const {
      request,
      name,
      email,
      subject,
      body
    } = contact

    const { isPending } = request

    return {
      isPending,
      values: {
        name,
        email,
        subject,
        body
      }
    }
  },
  (dispatch) => ({
    inputChange: (input) => dispatch(inputChange(input)),
    submit: (fields) => dispatch(submit(fields)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class ContactForm extends PureComponent {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.renderSocialIcon = this.renderSocialIcon.bind(this)
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

  handleSuccess () {
    const {
      history,
      submitSuccess
    } = this.props

    history.push('/')
    submitSuccess('You successfully send the message.')
  }

  renderSocialIcon (icon, index) {
    const {
      href,
      title,
      image
    } = icon

    return (
      <div className='contact__social' key={index}>
        <Link to={href} isExternal={true} target='_blank'>
          <img
            src={image}
            title={title}
            className='contact__social-icon'
          />
        </Link>
      </div>
    )
  }

  render () {
    const {
      values,
      inputChange,
      isPending
    } = this.props

    return (
      <div>
        <Paragraph>
          Be social and reach out to us through any of our accounts:
        </Paragraph>
        <div className='contact__socials'>
          {socials.map(this.renderSocialIcon)}
        </div>
        <Paragraph>
          Or fill out your details below and we’ll be in touch as soon as we can.
        </Paragraph>
        <Paragraph>
          It’s typically between 3 and 4 working days.
        </Paragraph>
        <Form
          values={values}
          validation={validation}
          errors={errors}
          handleChange={inputChange}
          handleSubmit={this.handleSubmit}
        >
          <Field
            component={Input}
            name='name'
            label='Your name'
          />
          <Field
            component={Input}
            name='email'
            label='Email address'
          />
          <Field
            component={Input}
            name='subject'
            label='Subject'
          />
          <Field
            component={Textarea}
            name='body'
            label='How can we help?'
          />
          <Submit
            component={ButtonAction}
            children='Send'
          />
          <Loader isVisible={isPending} />
        </Form>
      </div>
    )
  }
}

export default ContactForm
