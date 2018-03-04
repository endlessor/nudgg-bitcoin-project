import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import { Col } from 'react-bootstrap'

import { inputChange } from 'actions/addGoal'

import {
  Form,
  Field,
  Submit
} from 'components/forms'

import Input from 'components/inputs/Input'
import ButtonAction from 'components/gui/ButtonAction'
import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import {
  validation,
  errors
} from 'forms/addGoal'

@withRouter
@connect(
  ({ addGoal }) => {
    const {
      goalType,
      goalName,
      goalAmount
    } = addGoal

    return {
      values: {
        goalType,
        goalName,
        goalAmount
      }
    }
  },
  (dispatch) => ({
    inputChange: (input) => dispatch(inputChange(input))
  })
)
class AddGoalNameForm extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  navigateTo (url) {
    const { history } = this.props

    history.push(url)
  }

  handleSubmit () {
    this.navigateTo('/add-goal/amount')
  }

  handleGoBack () {
    this.navigateTo('/add-goal')
  }

  render () {
    const {
      values,
      inputChange
    } = this.props

    const { goalType } = values

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
            It’s more than just {goalType || '*goal type*'}. Give your goal a name
          </Heading>
          <Paragraph modifier='standard'>
            Studies show that those who write down their goals accomplish significantly more.
          </Paragraph>
          <Heading size={6}>
            I’m saving towards
          </Heading>
          <Field
            component={Input}
            name='goalName'
            label='For example: A trip to the moon'
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
              children='Next'
              className='add-goal__submit'
            />
          </div>
        </Col>
      </Form>
    )
  }
}

export default AddGoalNameForm
