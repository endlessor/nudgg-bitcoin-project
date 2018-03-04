import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Body from 'components/layout/Body'
import Messages from 'containers/messages/Messages'

import Default from './Default'

@withRouter
class Layout extends Component {
  render () {
    const {
      children,
      history
    } = this.props

    const { location } = history
    const { pathname } = location

    let layout
    switch (pathname) {
      default: layout = <Default children={children} />
    }

    return (
      <Body>
        <div>
          {layout}
          <Messages />
        </div>
      </Body>
    )
  }
}

export default Layout