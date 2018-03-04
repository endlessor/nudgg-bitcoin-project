import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Collapsible from 'react-collapsible'
import Heading from 'components/gui/Heading'
import Icon from 'components/gui/Icon'

import { isFunction } from 'utils/function'
import { isBoolean } from 'utils/boolean'

export const baseClass = 'faq'

class FAQ extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: false
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.toggleState = this.toggleState.bind(this)
  }

  componentDidMount () {
    const { isVisible } = this.props

    if (!isBoolean(isVisible)) return false

    this.setState({
      isVisible
    })
  }

  handleToggle (evt) {
    evt.persist()

    this.setState(
      this.toggleState,
      () => this.handleToggleFinish(evt)
    )
  }

  toggleState (state) {
    const { isVisible } = state
    const inverted = !isVisible

    return {
      isVisible: inverted
    }
  }

  handleToggleFinish (evt) {
    const { handleToggle } = this.props
    const { isVisible } = this.state

    const meta = {
      isVisible
    }

    if (isFunction(handleToggle)) {
      handleToggle(evt, meta)
    }
  }

  render () {
    const { isVisible } = this.state

    const {
      title,
      children,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'visible': isVisible
    })

    return (
      <div className={modifiedClassName} onClick={this.handleToggle}>
        <div className='faq__heading'>
          <Heading size={4} className='faq__title'>
            {title}
          </Heading>
          <Icon
            modifier='right-arrow'
            className='faq__icon'
          />
        </div>
        <Collapsible open={isVisible} className='faq__content'>
          {children}
        </Collapsible>
      </div>
    )
  }
}

FAQ.propTypes = {
  ...defaultPropTypes,
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  handleToggle: PropTypes.func
}

export default FAQ
