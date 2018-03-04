import React, { Component } from 'react'

import View from 'components/other/View'
import { HUB as title } from 'data/titles'

import Icon from 'components/gui/Icon'
import Tile from 'components/common/Tile'
import Image from 'components/gui/Image'
import ProgressLine from 'components/gui/ProgressLine'

import HubBreakdownTable from 'components/hub/HubBreakdownTable'

class HubBreakdown extends Component {
  constructor (props) {
    super(props)

    this.state = {
      progress: 66
    }

    this.handleExit = this.handleExit.bind(this)
    this.handleGoBack = this.handleGoBack.bind(this)
  }

  handleExit () {
    const { history } = this.props

    history.push('/hub/balance')
  }

  handleGoBack () {
    const { history } = this.props

    history.push('/hub/accounts')
  }

  render () {
    const { progress } = this.state

    return (
      <View title={title}>
        <HubBreakdownTable />
      </View>
    )
  }
}

export default HubBreakdown
