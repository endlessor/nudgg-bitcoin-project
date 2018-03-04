import React, { Component } from 'react'

import { Grid, Col } from 'react-bootstrap'

import View from 'components/other/View'
import { HUB as title } from 'data/titles'

import ProgressLine from 'components/gui/ProgressLine'
import HubBalanceContainer from 'containers/hub/HubBalanceContainer'

// // Mockup
// import { overview } from 'data/hub'

class HubBalance extends Component {
  constructor (props) {
    super(props)

    this.state = {
      progress: 10
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { history } = this.props

    history.push('/hub/accounts')
  }

  render () {
    const { progress } = this.state

    return (
      <div className='hub-balance' id='hubBalance'>
        <ProgressLine
          progress={progress}
          modifier={[
            'fixed',
            'bg-grey'
          ]}
          className='hidden-sm-up'
        />
        <Grid>
          <Col sm={6} className='hub-balance__container'>
            <HubBalanceContainer handleClick={this.handleClick} />
          </Col>
        </Grid>
      </div>
    )
  }
}

export default HubBalance
