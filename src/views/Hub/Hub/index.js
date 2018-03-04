import React, { Component } from 'react'

import HubGoalContainer from 'containers/hub/HubGoalContainer'

import HubBalance from '../HubBalance'

class Hub extends Component {

  componentWillMount () {
    console.log('MOUNTING')
  }

  render () {

    return (
      <span>
        <HubGoalContainer />
        <HubBalance {...this.props} />
      </span>
    )
  }
}

export default Hub
