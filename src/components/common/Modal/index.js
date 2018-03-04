import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Overlay from 'components/common/Overlay'
import ModalContent from 'components/common/ModalContent'

import { isFunction } from 'utils/function'
import { mapVisibleState } from 'utils/other'

export const baseClass = 'modal'

class Modal extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: false
    }

    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentWillMount () {
    this.mapPropsToState()
  }

  componentWillReceiveProps () {
    this.mapPropsToState()
  }

  mapPropsToState () {
    this.setState(mapVisibleState)
  }

  handleClickOutside () {
    const { handleClickOutside } = this.props

    this.setState({
      isVisible: false
    })

    if (isFunction(handleClickOutside)) {
      handleClickOutside()
    }
  }

  renderModalContent () {
    const { children } = this.props

    return (
      <ModalContent
        children={children}
        handleClickOutside={this.handleClickOutside}
      />
    )
  }

  render () {
    const { isVisible } = this.state

    const {
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    return (
      <Overlay isVisible={isVisible} className={modifiedClassName}>
        {isVisible && this.renderModalContent()}
      </Overlay>
    )
  }
}

Modal.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired
}

export default Modal
