import React, { Component } from 'react'
import { withRouter } from 'react-router'

import View from 'components/other/View'
import { HUB as title } from 'data/titles'

import Icon from 'components/gui/Icon'
import Tile from 'components/common/Tile'

import ProgressLine from 'components/gui/ProgressLine'
import PlusButton from 'components/gui/PlusButton'

import HubAccountList from 'components/hub/HubAccountList'
import AddAccountForm from 'containers/addAccount/AddAccountForm'


@withRouter
class HubAccounts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      progress: 33
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { history } = this.props

    history.push('/hub/balance')
  }

  render () {
    const { progress } = this.state

    return (
      <View title={title}>
        <div className='hub-accounts'>
          <ProgressLine
            progress={progress}
            modifier={[
              'fixed',
              'bg-grey'
            ]}
            className='hidden-sm-up'
          />
          <div className='hub-balance__container col-xs-12 col-sm-8 container'>
            <Tile className={[
              'hub-accounts__tile',
              'hub-tile-fixed'
            ]}>
              <Icon
                modifier={[
                  'plus',
                  'green-cross'
                ]}
                className='hub-accounts__exit'
                handleClick={this.handleClick}
              />
              <HubAccountList />
              <AddAccountForm redirect='/hub/accounts' />
            </Tile>
          </div>
        </div>
      </View>
    )
  }
}

export default HubAccounts
