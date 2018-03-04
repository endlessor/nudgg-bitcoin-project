import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import classNames from 'utils/classNames'
import { defaultPropTypes } from 'utils/react'

import Icon from 'components/gui/Icon'

export const baseClass = 'comparison-icon'

class ComparisonIcon extends PureComponent {
  render () {
    const {
      value,
      className,
      modifier
    } = this.props

    const modifiedClassName = classNames(baseClass, className, modifier)

    const type = value ? 'comparison-yes' : 'comparison-no'

    return (
      <Icon
        modifier={type}
        className={modifiedClassName}
      />
    )
  }
}

ComparisonIcon.propTypes = {
  ...defaultPropTypes,
  value: PropTypes.bool.isRequired
}

export default ComparisonIcon
