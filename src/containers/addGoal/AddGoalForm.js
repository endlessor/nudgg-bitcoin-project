import React, { Component } from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'

import { Row, Col } from 'react-bootstrap'

import { inputChange } from 'actions/addGoal'

import Heading from 'components/gui/Heading'
import Paragraph from 'components/gui/Paragraph'

import Carousel from 'components/carousel'
import GoalTile from 'components/goal/GoalTile'

import { GOAL_TYPES, carouselOptions } from 'data/goal'
import { hero } from 'data/signUp'

@withRouter
@connect(
  ({ user, addGoal }) => {
    const { details } = user
    const { firstName } = details

    const { goalType } = addGoal

    return {
      firstName,
      values: {
        goalType
      }
    }
  },
  (dispatch) => ({
    inputChange: (value) => dispatch(inputChange({
      name: 'goalType',
      value
    }))
  })
)
class AddGoalForm extends Component {
  constructor (props) {
    super(props)

    this.renderGoalTile = this.renderGoalTile.bind(this)
    this.handleSelectGoal = this.handleSelectGoal.bind(this)
  }

  navigateTo (url) {
    const { history } = this.props

    history.push(url)
  }

  renderGoalTile (goal, index) {
    const { values } = this.props
    const { goalType } = values

    const isActive = goal.key === goalType

    return (
      <GoalTile
        key={index}
        title={goal.name}
        image={goal.image}
        handleClick={() => this.handleSelectGoal(goal.key)}
        isActive={isActive}
      />
    )
  }

  handleSelectGoal (key) {
    const { inputChange } = this.props
    inputChange(key)
    this.navigateTo('/add-goal/name')
  }

  render () {
    const { firstName } = this.props

    return (
      <span>
        <Row>
          <Col xs={12} sm={7} md={6}>
            <Heading size={2} modifier='standard'>
              Beyond money, what do you want from life {firstName || '*first name*'}?
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Paragraph modifier='standard'>
              We know that life is more than endlessly collecting cash and counting pennys: We want you to acheive your dreams.
            </Paragraph>
            <Paragraph modifier='standard'>
              So, importantly, what are you looking to save for {firstName || '*first name*'}?
            </Paragraph>
            <Carousel {...carouselOptions}>
              {GOAL_TYPES.map(this.renderGoalTile)}
            </Carousel>
          </Col>
        </Row>
      </span>
    )
  }
}

export default AddGoalForm
