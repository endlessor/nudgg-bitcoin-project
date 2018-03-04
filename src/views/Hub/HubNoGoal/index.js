import React, { Component } from 'react'

import View from 'components/other/View'
import { HUB_NO_GOAL as title } from 'data/titles'

import {
  Grid,
  Col
} from 'react-bootstrap'

import Heading from 'components/gui/Heading'
import Link from 'components/gui/Link'
import Button from 'components/gui/Button'
import ProgressLine from 'components/gui/ProgressLine'

import { parseWithCommas } from 'utils/other'

class HubNoGoal extends Component {
  render () {
    const { location } = this.props
    const { state } = location
    const { balance } = state

    return (
      <View title={title} className='hub-no-goal'>
        <div>
          <div className='hub__content absolute-center-v'>
            <Grid>
              <Col sm={8}>
                <Heading
                  modifier={[
                    'font-uppercase',
                    'font-normal',
                    'color-white'
                  ]}
                  className='hub__goal-name'
                >
                  what are you building towards?
                </Heading>
                <Link to='/add-goal'>
                  <Button
                    modifier={[
                      'bg-aqua'
                    ]}
                    className='hub-no-goal__btn-create'
                  >
                    Create your goal
                  </Button>
                </Link>
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
              </Col>
            </Grid>
            <ProgressLine
              progress={60}
              // noDelay={true}
              modifier='bg-white'
              className='hub__progress-line'
            />
          </div>
        </div>
      </View>
    )
  }
}

export default HubNoGoal
