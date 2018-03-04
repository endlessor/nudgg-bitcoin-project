import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Heading from 'components/gui/Heading'

import { isFunction } from 'utils/function'

class PartnerTitle extends PureComponent {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    const {
      id,
      handleClick
    } = this.props

    const meta = {
      id
    }

    if (isFunction(handleClick)) {
      handleClick(evt, meta)
    }
  }

  render () {
    const { children, isActive, className, modifier } = this.props

    const modifiedClassName = classNames('partner-title', className, modifier, {
      'active': isActive
    })

    return (
      <Heading
        size={5}
        modifier='font-uppercase'
        className={modifiedClassName}
        children={children}
        handleClick={this.handleClick}
      />
    )
  }
}

PartnerTitle.propTypes = {
  ...defaultPropTypes,
  isActive: PropTypes.bool
}

PartnerTitle.defaultProps = {
  isActive: false
}

export default PartnerTitle
