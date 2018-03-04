import React, { PureComponent } from 'react'

import Cursor from 'components/gui/Cursor'
import Typing from 'react-typing-animation'
import { typingList } from 'data/home'

export const baseClass = 'home-typing'

export const defaultProps = {
  loop: true,
  speed: 35,
  delay: 2500,
  startDelay: 1000,
  cursor: <Cursor />
}

class HomeTyping extends PureComponent {
  constructor (props) {
    super(props)

    this.renderLine = this.renderLine.bind(this)
  }

  renderLine (line, index) {
    return (
      <span key={index}>
        <span>{line}</span>
        <Typing.Reset count={1} delay={2500} />
      </span>
    )
  }

  render () {
    return (
      <Typing {...defaultProps} className='home-typing'>
        {typingList.map(this.renderLine)}
      </Typing>
    )
  }
}

export default HomeTyping
