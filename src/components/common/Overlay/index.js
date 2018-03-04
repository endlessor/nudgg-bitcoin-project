import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'
import { MODAL_MODIFIER } from 'data/other'

import Body from 'components/layout/Body'

export const baseClass = 'overlay'

class Overlay extends PureComponent {
  render () {
    const {
      children,
      isVisible,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier, {
      'visible': isVisible
    })

    const bodyModifier = isVisible ? MODAL_MODIFIER : ''

    return (
      <Body modifier={bodyModifier}>
        <div className={modifiedClassName} children={children} />
      </Body>
    )
  }
}

Overlay.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired
}

export default Overlay
