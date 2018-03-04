import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import { Col } from 'react-bootstrap'

import {
  inputChange,
  submit
} from 'actions/addGoal'

import {
  Form,
  Field,
  Submit
} from 'components/forms'

import {
  messagesAddSuccess,
  messagesAddError
} from 'actions/messages'

import { getGoal } from 'actions/hub'

import Input from 'components/inputs/Input'
import ButtonAction from 'components/gui/ButtonAction'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import {
  validation,
  errors
} from 'forms/addGoal'

import { GOAL_TYPES } from 'data/goal'

@withRouter
@connect(
  ({ user, addGoal }) => {
    const { token } = user

    const {
      request,
      goalType,
      goalName,
      goalAmount
    } = addGoal

    const { isPending } = request

    return {
      isPending,
      token,
      values: {
        goalType,
        goalName,
        goalAmount
      }
    }
  },
  (dispatch) => ({
    inputChange: (input) => dispatch(inputChange(input)),
    submit: (fields, token) => dispatch(submit(fields, token)),
    submitSuccess: (message) => dispatch(messagesAddSuccess(message)),
    submitError: (message) => dispatch(messagesAddError(message)),
    getGoal: (token) => dispatch(getGoal(token))
  })
)
class AddGoalAmountForm extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSuccess = this.handleSuccess.bind(this)
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  navigateTo (url) {
    const { history } = this.props

    history.push(url)
  }

  handleSubmit () {
    const {
      values,
      token,
      submit,
      submitError,
      getGoal
    } = this.props

    //Replace key with name value of goalType
    const selectedGoal = GOAL_TYPES.filter((goal) => (goal.key === values.goalType))[0]


    values.goalType = selectedGoal.name

    submit(values, token)
      .then(() => getGoal(token))
      .then(this.handleSuccess)
      .catch(submitError)
  }

  handleSuccess () {
    const {
      history,
      submitSuccess
    } = this.props

    history.push('/hub')
    submitSuccess('You successfully added your goal.')
  }

  handleGoBack () {
    this.navigateTo('/add-goal/name')
  }

  render () {
    const {
      values,
      inputChange
    } = this.props

    const { goalName } = values

    return (
      <Form
        values={values}
        validation={validation}
        errors={errors}
        handleChange={inputChange}
        handleSubmit={this.handleSubmit}
      >
        <Col sm={8}>
          <Heading size={2} modifier='standard'>
            How much are you looking to spend on {goalName || '*goal name*'}?
          </Heading>
          <Paragraph modifier='standard'>
            Buying a first home typically means saving a deposit of around 10 per cent, or more to access the best mortgage rates.
          </Paragraph>
          <Heading size={6}>
            I want to save up at least
          </Heading>
          <Field
            component={Input}
            name='goalAmount'
            label='£'
            modifier='show-label'
          />
        </Col>
        <Col xs={12} className='add-goal__buttons'>
          <div className='add-goal__left-button'>
            <span className='link link--color-aqua link--font-italic link--underline' onClick={this.handleGoBack}>
              Step back
            </span>
          </div>
          <div className='add-goal__right-button'>
            <Submit
              component={ButtonAction}
              children='Save goal'
              className='add-goal__submit'
            />
          </div>
        </Col>
      </Form>
    )
  }
}

export default AddGoalAmountForm
