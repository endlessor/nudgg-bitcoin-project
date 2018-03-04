import React, { PureComponent } from 'react'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import onClickOutside from 'react-onclickoutside'

export const baseClass = 'tooltip'

/*
Using "data-gramm=false" attribute to disable Grammarly on the element
https://github.com/quilljs/quill/issues/574
*/

class Tooltip extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: false
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.toggleState = this.toggleState.bind(this)
  }

  handleClickOutside () {
    this.setState({
      isVisible: false
    })
  }

  handleOpen () {
    this.setState(this.toggleState)
  }

  toggleState (state) {
    const { isVisible } = state
    const inverted = !isVisible

    return {
      isVisible: inverted
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
      <div className={modifiedClassName} onClick={this.handleOpen} data-gramm={false}>
        <div className='tooltip__title'>
          {title}
        </div>
        <div className='tooltip__description'>
          {children}
        </div>
      </div>
    )
  }
}

Tooltip.propTypes = {
  ...defaultPropTypes
}

export default onClickOutside(Tooltip)