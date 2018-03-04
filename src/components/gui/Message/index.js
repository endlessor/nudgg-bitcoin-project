import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

export const baseClass = 'message'
export const delay = 5000

class Message extends PureComponent {
  constructor (props) {
    super(props)

    this.timeout = null

    this.state = {
      isVisible: true
    }

    this.handleHideMessage = this.handleHideMessage.bind(this)
  }

  componentDidMount () {
    this.setTimeout()
  }

  componentWillUnmount () {
    this.clearTimeout()
  }

  componentWillReceiveProps () {
    this.setTimeout()
  }

  handleHideMessage () {
    this.setState(() => ({
      isVisible: false
    }))

    this.clearTimeout()
  }

  setTimeout () {
    if (this.timeout) this.clearTimeout()

    this.setState(() => ({
      isVisible: true
    }))

    this.timeout = setTimeout(this.handleHideMessage, delay)
  }

  clearTimeout () {
    if (!this.timeout) return false

    clearTimeout(this.timeout)
    this.timeout = null
  }

  render () {
    const { isVisible } = this.state
    const { text, className, modifier } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'visible': isVisible
    })

    return (
      <div className={modifiedClassName}>
        {text}
      </div>
    )
  }
}

Message.propTypes = {
  ...defaultPropTypes
}

export default Message
