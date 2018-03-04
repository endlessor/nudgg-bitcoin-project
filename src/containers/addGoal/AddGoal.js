import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withRouter } from 'react-router'
import {
  Switch,
  Route
} from 'react-router-dom'

import { Grid } from 'react-bootstrap'

import AddGoalForm from 'containers/addGoal/AddGoalForm'
import AddGoalNameForm from 'containers/addGoal/AddGoalNameForm'
import AddGoalAmountForm from 'containers/addGoal/AddGoalAmountForm'
import PageNotFound from 'views/PageNotFound'

import ProgressLine from 'components/gui/ProgressLine'
import HeroImage from 'components/parallax/HeroImage'

import { hero } from 'data/signUp'

import { GOAL_TYPES } from 'data/goal'

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
  }
)
class AddGoal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      progress: 30
    }

    this.handleProgress = this.handleProgress.bind(this)
  }

  handleProgress (value) {
    this.setState({
      progress: value
    })
  }

  render () {
    const { progress } = this.state

    const {
      match,
      values = {}
    } = this.props

    const { url: baseUrl } = match
    const {
      goalType,
      goalName,
      goalAmount
    } = values

    const selectedGoal = GOAL_TYPES.filter((goal) => (goal.key === goalType))[0]

    return (
      <div>
        {goalType && (
          <HeroImage
            src={selectedGoal.image}
            className='add-goal__hero-image'
          />
        )}
        {(goalName || goalAmount) && (
          <div className='add-goal__details'>
            <Grid>
              <div className='float-left'>
                {goalName || ''}
              </div>
              <div className='float-right'>
                <span className='add-goal__details-amount'>
                  {goalAmount
                    ? `£${goalAmount}`
                    : ''
                  }
                </span>
              </div>
            </Grid>
          </div>
        )}
        <ProgressLine progress={progress} />
        <Grid className='add-goal__content'>
          <Switch>
            <Route exact path={baseUrl} component={AddGoalForm} />
            <Route path={`${baseUrl}/name`} component={AddGoalNameForm} />
            <Route path={`${baseUrl}/amount`} component={AddGoalAmountForm} />
            <Route component={PageNotFound} />
          </Switch>
        </Grid>
      </div>
    )
  }
}

export default AddGoal
