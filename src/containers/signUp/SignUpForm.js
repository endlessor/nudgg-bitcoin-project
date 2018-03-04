import React, { PureComponent } from 'react'

import { withRouter } from 'react-router'
import { connect } from 'react-redux'

import {
  inputChange,
  submit
} from 'actions/signUp'

import { messagesAddError } from 'actions/messages'

import {
  Form,
  Field,
  Submit
} from 'components/forms'

import Loader from 'components/gui/Loader'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'
import ButtonAction from 'components/gui/ButtonAction'
import Link from 'components/gui/Link'

import Input from 'components/inputs/Input'
import Checkbox from 'components/inputs/Checkbox'

import { isFunction } from 'utils/function'

import {
  validation,
  errors
} from 'forms/signUp'

import { FIELDS_COUNT } from 'data/signUp'
import { PROGRESS_ATTR_NAME } from 'data/other'

import { omitKeys } from 'utils/object'
import { formatDateOfBirth } from 'utils/date'

@withRouter
@connect(
  ({ signUp }) => {
    const {
      request,
      firstName,
      lastName,
      dob,
      email,
      phoneNumber,
      password,
      terms
    } = signUp

    const { isPending } = request

    return {
      isPending,
      values: {
        firstName,
        lastName,
        dob,
        email,
        phoneNumber,
        password,
        terms,
      }
    }
  },
  (dispatch) => ({
    inputChange: (input) => dispatch(inputChange(input)),
    submit: (fields) => dispatch(submit(fields)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)

class SignUpForm extends PureComponent {
  constructor (props) {
    super(props)

    this.handleFocus = this.handleFocus.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
  }

  handleFocus (evt) {
    const { target } = evt
    const { handleProgress } = this.props

    const attr = target.getAttribute(PROGRESS_ATTR_NAME)
    const index = Number(attr)

    const progress = this.calculateProgress(index)

    if (isFunction(handleProgress)) {
      handleProgress(progress)
    }
  }

  calculateProgress (index) {
    return index * (100 / FIELDS_COUNT)
  }

  handleSubmit () {
    const {
      values,
      submit,
      submitError
    } = this.props

    const notNeeded = 'terms'
    const fields = omitKeys(values, notNeeded)

    submit(fields)
      .then(this.handleSuccess)
      .catch(submitError)
  }

  handleSuccess () {
    const {
      match,
      history
    } = this.props

    const { url: baseUrl } = match
    history.push(`${baseUrl}/activate`)
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
        <div className='sign-up__group'>
          <Heading size={5} modifier='font-roboto'>
            Getting to know you
          </Heading>
          <div>
            <Field
              component={Input}
              name='firstName'
              label='Your first name'
              customAttr={{
                'data-progress-index': 1
              }}
              handleFocus={this.handleFocus}
            />
            <Field
              component={Input}
              name='lastName'
              label='Last name'
              customAttr={{
                'data-progress-index': 2
              }}
              handleFocus={this.handleFocus}
            />
            <Field
              component={Input}
              name='dob'
              label='Date of birth'
              customAttr={{
                'data-progress-index': 3
              }}
              handleFocus={this.handleFocus}
              formatValue={formatDateOfBirth}
            />
          </div>
        </div>
        <div className='sign-up__group'>
          <Heading size={5} modifier='font-roboto'>
            Keeping you informed
          </Heading>
          <div>
            <Field
              component={Input}
              name='email'
              label='Your email address'
              customAttr={{
                'data-progress-index': 4
              }}
              handleFocus={this.handleFocus}
            />
            <Field
              component={Input}
              name='phoneNumber'
              label='Phone number (optional)'
              isOptional={true}
              customAttr={{
                'data-progress-index': 5
              }}
              handleFocus={this.handleFocus}
            />
          </div>
        </div>
        <div className='sign-up__group'>
          <Heading size={5} modifier='font-roboto'>
            Safe and secure
          </Heading>
          <div>
            <Field
              component={Input}
              type='password'
              name='password'
              label='Password'
              customAttr={{
                'data-progress-index': 6
              }}
              handleFocus={this.handleFocus}
            />
          </div>
          <Paragraph className='sign-up__password-description'>
            Your password should contain a minimum of 8 characters, including at least 1 uppercase letter and 1 number.
          </Paragraph>
        </div>
        <div className='sign-up__group'>
          <Heading size={5} modifier='font-roboto'>
            Nearly there
          </Heading>
          <Field
            component={Checkbox}
            name='terms'
            label={(
              <span>
                I agree to the nudgg <Link to='/terms' isExternal={true} target='_blank' modifier={['color-aqua', 'font-italic']}>terms and conditions</Link>
              </span>
            )}
            className='login__checkbox'
          />
        </div>
        <Submit
          component={ButtonAction}
          children='Get started'
        />
        <Loader isVisible={isPending} />
      </Form>
    )
  }
}

export default SignUpForm
