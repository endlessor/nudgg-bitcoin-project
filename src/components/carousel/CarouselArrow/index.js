import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Icon from 'components/gui/Icon'

class CarouselArrow extends PureComponent {
  render () {
    const { type, className, modifier, handleClick } = this.props

    const modifiedClassName = classNames('carousel-arrow',
      ['absolute-center-v', className],
      [modifier, type]
    )

    return (
      <Icon
        modifier={type}
        className={modifiedClassName}
        handleClick={handleClick}
      />
    )
  }
}

CarouselArrow.propTypes = {
  ...defaultPropTypes,
  type: PropTypes.oneOf([
    'left-arrow',
    'right-arrow'
  ]),
  handleClick: PropTypes.func
}

export default CarouselArrow