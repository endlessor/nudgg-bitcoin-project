import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import onClickOutside from 'react-onclickoutside'

import { isFunction } from 'utils/function'

class ModalContent extends PureComponent {
  handleClickOutside (evt) {
    const { handleClickOutside } = this.props

    if (isFunction(handleClickOutside)) {
      handleClickOutside(evt)
    }
  }

  render () {
    const { children, className, modifier } = this.props

    const modifiedClassName = classNames('modal-content', className, modifier)

    return (
      <div className={modifiedClassName} children={children} />
    )
  }
}

ModalContent.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.node.isRequired
}

export default onClickOutside(ModalContent)
