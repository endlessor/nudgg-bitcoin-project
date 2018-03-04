import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getLastMessage } from 'selectors/messages'

import Message from 'components/gui/Message'

@connect(
  (state) => ({
    message: getLastMessage(state)
  })
)
class Messages extends Component {
  render () {
    const { message } = this.props

    if (!message) return null

    return (
      <div className='messages'>
        <Message
          text={message.text}
          modifier={message.type}
        />
      </div>
    )
  }
}

export default Messages
