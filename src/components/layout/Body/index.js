import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import BodyStyle from 'components/other/BodyStyle'

import { isTouchDevice } from 'utils/touch'

class Body extends PureComponent {
  constructor (props) {
    super(props)

    this.isTouchable = null
  }

  componentWillMount () {
    this.isTouchable = isTouchDevice()
  }

  render () {
    const { isTouchable } = this
    const { children, style, className, modifier } = this.props

    const modifiedClassName = classNames('body', className, modifier, {
      'no-touch': !isTouchable
    })

    return (
      <BodyStyle
        className={modifiedClassName}
        style={style}
        children={children}
      />
    )
  }
}

Body.propTypes = {
  ...defaultPropTypes,
  children: PropTypes.any,
  style: PropTypes.object
}

export default Body