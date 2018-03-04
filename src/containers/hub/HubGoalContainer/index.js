import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import scrollToElement from 'scroll-to-element'

import { getGoal } from 'actions/hub'
import { messagesAddError } from 'actions/messages'

import {
  Grid,
  Col
} from 'react-bootstrap'

import View from 'components/other/View'
import Loader from 'components/gui/Loader'
import Heading from 'components/gui/Heading'
import HubArrow from 'components/hub/HubArrow'
import Separator from 'components/gui/Separator'
import Paragraph from 'components/gui/Paragraph'
import ProgressLine from 'components/gui/ProgressLine'

import {
  percentOf,
  parseWithCommas
} from 'utils/other'

import {GOAL_TYPES} from 'data/goal'
import { HUB as title } from 'data/titles'

@connect(
  ({ user, hub }) => {
    const { token } = user

    const { request } = hub
    const {
      data,
      isPending,
      isError
    } = request

    return {
      token,
      isPending,
      isError,
      goal: data
    }
  },
  (dispatch) => ({
    getGoal: (token) => dispatch(getGoal(token)),
    submitError: (message) => dispatch(messagesAddError(message))
  })
)
class HubGoalContainer extends Component {
  constructor (props) {
    super(props)

    this.getGoal = this.getGoal.bind(this)
  }

  componentDidMount () {
    this.getGoal()
  }

  getGoal () {
    const {
      getGoal,
      token
    } = this.props

    getGoal(token)
  }

  render () {
    const {
      isPending,
      isError,
      goal,
      scrollToBalance
    } = this.props

    const {
      balance,
      goalName,
      goalAmount,
      goalType
    } = goal

    const progress = percentOf(balance, goalAmount)

    if (isError) {
      return (
        <Redirect to={{
          pathname: '/hub/no-goal',
          state: {
            balance
          }
        }} />
      )
    }

    let selectedGoal = {}

    if (goalType) {
      selectedGoal = GOAL_TYPES.filter((goal) => (goal.name === goalType))[0]
    }

    return (
      <View title={title} className='hub' style={{backgroundImage: `url('${selectedGoal.image}')`}}>
        <div>
          <div className='hub__content absolute-center-v'>
            <Grid>
              <Col sm={8}>
                <Heading
                  size={4}
                  modifier={[
                    'font-uppercase',
                    'font-normal',
                    'color-white'
                  ]}
                  className='hub__motto'
                >
                  building towards
                </Heading>
                <Heading
                  modifier={[
                    'font-uppercase',
                    'font-normal',
                    'color-white'
                  ]}
                  className='hub__goal-name'
                >
                  {goalName || '*goal name*'}
                </Heading>
                <div className='hub__motto-small'>
                  <Separator
                    modifier='bg-white'
                    className='hub__separator'
                  />
                  <Paragraph
                    modifier={[
                      'color-white'
                    ]}
                    className='hub__motto-small-heading'
                  >
                    Help me reach my goal
                  </Paragraph>
                  <Separator
                    modifier='bg-white'
                    className='hub__separator'
                  />
                </div>
              </Col>
              <Col sm={12} className='hub__progress-titles'>
                <Heading
                  modifier={[
                    'color-white',
                    'font-roboto'
                  ]}
                  className='hub__balance float-left'
                >
                  {`£${parseWithCommas(balance)}`}
                </Heading>
                <Heading
                  size={5}
                  modifier={[
                    'color-white',
                    'font-roboto',
                    'font-semi-bold'
                  ]}
                  className='float-right'
                >
                  <span className='hidden-sm-up'>/ {goalAmount ? `£${parseWithCommas(goalAmount)}` : '*goal amount*'}</span>
                  <span className='visible-sm-up'>out of {goalAmount ? `£${parseWithCommas(goalAmount)}` : '*goal amount*'}</span>
                </Heading>
              </Col>
            </Grid>
            <ProgressLine
              progress={progress}
              modifier='bg-white'
              className='hub__progress-line'
            />
            <Grid>
              <Paragraph
                modifier={[
                  'color-white',
                  'font-italic'
                ]}
                className='hub__to-target'
              >
                <span>{progress}</span>% of goal
              </Paragraph>
            </Grid>
          </div>
          <Loader isVisible={isPending} />
          <HubArrow onClick={() => scrollToElement('#hubBalance')}/>
        </div>
      </View>
    )
  }
}

export default HubGoalContainer
